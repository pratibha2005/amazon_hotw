

const express = require("express");
const router = express.Router();
const ExcelJS = require("exceljs");
const Form = require("../models/Attempt");

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

const formatDateOnly = (date) => {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

const cleanText = (val) => {
  if (val === undefined || val === null || val === "N/A") return "";
  return String(val).replace(/\r?\n|\r/g, " ").trim();
};

router.get("/excel", async (req, res) => {
  try {
    const forms = await Form.find({ name: { $ne: "testuser" } }).lean();
    if (!forms.length) {
      return res.status(404).json({ message: "No data found" });
    }

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Submissions");

    // Define columns
    sheet.columns = [
      { header: "Name", key: "name", width: 25 },
      { header: "Email", key: "email", width: 30 },
      { header: "Phone", key: "phone", width: 20 },
      { header: "Gender", key: "gender", width: 10 },
      { header: "DOB", key: "dob", width: 15 },
      { header: "Aadhaar", key: "aadhaar", width: 25 },
      { header: "City", key: "city", width: 20 },
      { header: "Site Location", key: "site_location", width: 30 },
      { header: "Started At", key: "startedAt", width: 25 },
      { header: "Finished At", key: "finishedAt", width: 25 },
      { header: "Answers", key: "answers", width: 100 },
    ];

    forms.forEach((f) => {
      let answersText = "";

      // Debug log to check data structure
      console.log("Form ID:", f._id);
      console.log("Answers array:", JSON.stringify(f.answers, null, 2));

      if (f.answers && Array.isArray(f.answers) && f.answers.length > 0) {
        // Group answers by questionId
        const grouped = {};
        
        f.answers.forEach((ans) => {
          const qId = ans.questionId || ans.question_id || ans.qId; // Handle different property names
          
          if (qId !== undefined && qId !== null) {
            if (!grouped[qId]) {
              grouped[qId] = {
                questionText: ans.questionText || ans.question_text || ans.question || `Question ${qId}`,
                answers: []
              };
            }
            
            const selectedAnswer = ans.selected || ans.answer || ans.selectedOption || "Unknown";
            const isCorrect = ans.isCorrect !== undefined ? ans.isCorrect : 
                             ans.is_correct !== undefined ? ans.is_correct : false;
            
            grouped[qId].answers.push(`${selectedAnswer} (${isCorrect ? "true" : "false"})`);
          }
        });

        // Convert grouped object → formatted string
        answersText = Object.entries(grouped)
          .map(([qid, data]) => {
            return `Q${qid}: ${data.questionText} → ${data.answers.join(", ")}`;
          })
          .join("\n");
      }

      // Debug log to check final answersText
      console.log("Final answersText for form", f._id, ":", answersText);

      sheet.addRow({
        name: cleanText(f.name),
        email: cleanText(f.email),
        phone: f.phone ? `'${cleanText(f.phone)}` : "",
        gender: cleanText(f.gender),
        dob: formatDateOnly(f.dob),
        aadhaar: f.aadhaar ? `'${f.aadhaar}` : "",
        city: cleanText(f.city),
        site_location: cleanText(f.site_location),
        startedAt: formatDateTime(f.startedAt),
        finishedAt: formatDateTime(f.finishedAt),
        answers: answersText || "No answers found", // Fallback text
      });
    });

    // Style header row
    const headerRow = sheet.getRow(1);
    headerRow.height = 25;
    headerRow.eachCell((cell) => {
      cell.font = { bold: true, color: { argb: 'FFFFFF' } };
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '366092' }
      };
      cell.alignment = {
        vertical: 'middle',
        horizontal: 'center'
      };
    });

    // Style data rows
    for (let i = 2; i <= sheet.rowCount; i++) {
      const row = sheet.getRow(i);
      row.height = 60; // Increased height for answers column
      
      row.eachCell((cell, colNumber) => {
        cell.alignment = {
          vertical: "top",
          horizontal: "left",
          wrapText: true,
        };
        
        // Special formatting for answers column (column 11)
        if (colNumber === 11) {
          cell.alignment = {
            vertical: "top",
            horizontal: "left",
            wrapText: true,
            indent: 1
          };
        }
        
        cell.numFmt = "@"; // Text format
        
        // Add borders
        cell.border = {
          top: { style: 'thin' },
          left: { style: 'thin' },
          bottom: { style: 'thin' },
          right: { style: 'thin' }
        };
      });
    }

    // Auto-fit columns (except answers column which we set manually)
    sheet.columns.forEach((column, index) => {
      if (index !== 10) { // Not the answers column
        let maxLength = 0;
        column.eachCell({ includeEmpty: true }, (cell) => {
          const columnLength = cell.value ? cell.value.toString().length : 10;
          if (columnLength > maxLength) {
            maxLength = columnLength;
          }
        });
        column.width = Math.min(maxLength + 2, 50); // Max width 50
      }
    });

    // Send file
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=submissions.xlsx"
    );

    await workbook.xlsx.write(res);
    res.status(200).end();
    
  } catch (err) {
    console.error("Excel export error:", err);
    res.status(500).json({ message: "Export Excel failed", error: err.message });
  }
});

module.exports = router;