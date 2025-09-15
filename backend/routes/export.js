

const express = require("express");
const router = express.Router();
const ExcelJS = require("exceljs");
const Form = require("../models/Attempt");

// ✅ Date + Time formatter
const formatDateTime = (date) => {
  if (!date) return "";
  return new Date(date).toLocaleString("en-IN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
};

// ✅ Date Only formatter (for DOB)
const formatDateOnly = (date) => {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

// ✅ Clean text
const cleanText = (val) => {
  if (val === undefined || val === null || val === "N/A") return "";
  return String(val).replace(/\r?\n|\r/g, " ").trim();
};

router.get("/excel", async (req, res) => {
  try {
    // ✅ testuser ko hata diya
    const forms = await Form.find({ name: { $ne: "testuser" } }).lean();

    if (!forms.length) {
      return res.status(404).json({ message: "No data found" });
    }

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Submissions");

    // ✅ Cleaned forms
    const cleanedForms = forms.map((f) => ({
      Name: cleanText(f.name),
      Email: cleanText(f.email),
      Phone: f.phone ? `'${cleanText(f.phone)}` : "",
      Gender: cleanText(f.gender),
      DOB: formatDateOnly(f.dob),
      Aadhaar: f.aadhaar ? `'${f.aadhaar}` : "",
      City: cleanText(f.city),
      SiteLocation: f.site_location ? `'${cleanText(f.site_location)}` : "",
      StartedAt: formatDateTime(f.startedAt),
      FinishedAt: formatDateTime(f.finishedAt),

      // ✅ Answers sirf actual users ke liye
  //     Answers:
  // Array.isArray(f.answers) && f.answers.length > 0
  //   ? f.answers
  //       .map(
  //         (a, i) =>
  //           `${i + 1}. ${cleanText(a.questionText)}  Selected: ${cleanText(
  //             a.selected
  //           )}  Correct: ${a.isCorrect ? "Yes" : "No"}`
  //       )
  //       .join("||")
  //   : "",
      // ✅ Declaration properly show
      // Declaration:
      //   f.declaration && Object.keys(f.declaration).length
      //     ? Object.entries(f.declaration)
      //         .map(([key, val]) => {
      //           if (val === true || val === "yes") return `${key}: Yes`;
      //           if (val === false || val === "no") return `${key}: No`;
      //           if (val === "N/A") return `${key}: N/A`;
      //           return `${key}: ${cleanText(val)}`;
      //         })
      //         .join(" || ")
      //     : "No declaration",
    }));

    // ✅ Headers
    sheet.columns = Object.keys(cleanedForms[0]).map((key) => ({
      header: key,
      key: key,
      width: 40,
      style: {
        alignment: { vertical: "middle", horizontal: "left", wrapText: true },
      },
    }));

    // ✅ Rows
    cleanedForms.forEach((obj) => {
      sheet.addRow(obj);
    });

    // ✅ Row style
    sheet.eachRow((row) => {
      row.height = 20;
      row.eachCell((cell) => {
        cell.numFmt = "@"; // text
      });
    });

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=submissions.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Export Excel failed" });
  }
});

module.exports = router;
