// // src/pages/FormPage.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function FormPage() {
//     const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     phonenumber: "",
//     gender: "",
//     date_of_birth: "",
//     address_place: "",
//     aadhaar: "",
//     specially_abled: "",
//     site_location: "",
//     answers: [],   // ✅ yahi tum update karte ho test complete hone ke baad
//   finishedAt: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //    console.log("Form Data:", formData);
//   //  navigate("/Declaration"); 
    
//   // };
// const handleSubmit = async (e) => {
//   e.preventDefault();

//   const siteLocations = {
//   "163783": "DED3 - Farukh Nagar (Regular)",
//   "163784": "DED3 - Farukh Nagar (ALFA)",
//   "163785": "DEL2 - Tauru (Regular)",
//   "204805": "DEL2 - Tauru (ALFA)",
//   "204806": "DEL4 - Jamalpur (Regular)",
//   "206117": "DEL4 - Jamalpur (ALFA)",
//   "206118": "DEL5 - Bilaspur (Regular)",
//   "206119": "DEL5 - Bilaspur (ALFA)",
//   "206120": "DED5 - Sohna (Regular)",
//   "206121": "DED5 - Sohna (ALFA)",
//   "212210": "DED4 - Sohna (Regular)",
//   "245611": "DED4 - Sohna (ALFA)",
//   "245795": "HDO3 - Dhatir (Regular)"
// };

//   try {
//     // Form data ke sath declaration ko bhi send karenge
//     // yahan empty declaration rakhi hai, One.jsx ke baad update karenge
//     const payload = {
//       name: formData.username,
//       email: formData.email,
//       phone: formData.phonenumber,
//       gender: formData.gender === "1" ? "Male" : "Female",
//       dob: formData.date_of_birth,
//       aadhaar: formData.aadhaar,
//       city: formData.address_place,
//       specially_abled: formData.specially_abled,
//       // site_location: formData.site_location,
//        site_location: siteLocations[formData.site_location] || formData.site_location,
//        declaration: {},   // placeholder, update after declaration page
//       answers: [],       // placeholder, update after test
//       // startedAt: new Date().toISOString(),
//       finishedAt: null
//     };

//     // send to backend
//     const res = await fetch("http://localhost:5000/api/submit", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload)
//     });

//     const data = await res.json();
//     console.log("Server Response:", data);

//     // navigate to declaration page
//     navigate("/Declaration", { state: { formData: payload } });
//   } catch (err) {
//     console.error("Error submitting form:", err);
//   }
// };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex justify-center items-start py-10 px-4">
//       <div className="w-full max-w-6xl bg-gray-800 rounded-xl shadow-xl p-8 flex flex-col md:flex-row gap-10">
        
//         {/* Left Column - Form */}
//         <div className="md:w-1/2">
//           <h1 className="text-3xl font-bold mb-6">Enter your details</h1>
//           <form onSubmit={handleSubmit} className="space-y-4">
            
//             {/* Name */}
//             <div>
//               <label className="block mb-1">
//                 Name <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block mb-1">
//                 Email address <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
//               />
//             </div>

//             {/* Phone */}
//             <div>
//               <label className="block mb-1">
//                 Phone number <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="phonenumber"
//                 value={formData.phonenumber}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
//               />
//             </div>

//             {/* Gender */}
//             <div>
//               <label className="block mb-1">
//                 Gender <span className="text-red-500">*</span>
//               </label>
//               <select
//                 name="gender"
//                 value={formData.gender}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
//               >
//                 <option value="">Select</option>
//                 <option value="1">Male</option>
//                 <option value="2">Female</option>
//               </select>
//             </div>

//             {/* Date of Birth */}
//             <div>
//               <label className="block mb-1">Date of birth</label>
//               <input
//                 type="date"
//                 name="date_of_birth"
//                 value={formData.date_of_birth}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
//               />
//             </div>

//             {/* City / Town */}
//             <div>
//               <label className="block mb-1">City / town</label>
//               <input
//                 type="text"
//                 name="address_place"
//                 value={formData.address_place}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
//               />
//             </div>

//             {/* Aadhaar */}
//             <div>
//               <label className="block mb-1">
//                 Aadhaar Card ID Number <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="aadhaar"
//                 value={formData.aadhaar}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
//               />
//             </div>

//             {/* Specially Abled */}
//             <div>
//               <label className="block mb-1">
//                 Specially Abled (Y/N) <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="specially_abled"
//                 value={formData.specially_abled}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
//               />
//             </div>

//             {/* Site Location */}
//             <div>
//               <label className="block mb-1">
//                 Please select your Site Location for joining. <span className="text-red-500">*</span>
//               </label>
//               <select
//                 name="site_location"
//                 value={formData.site_location}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
//               >
//                 <option value="">Select</option>
//                 <option value="163783">DED3 - Farukh Nagar (Regular)</option>
//                 <option value="163784">DED3 - Farukh Nagar (ALFA)</option>
//                 <option value="163785">DEL2 - Tauru (Regular)</option>
//                 <option value="204805">DEL2 - Tauru (ALFA)</option>
//                 <option value="204806">DEL4 - Jamalpur (Regular)</option>
//                 <option value="206117">DEL4 - Jamalpur (ALFA)</option>
//                 <option value="206118">DEL5 - Bilaspur (Regular)</option>
//                 <option value="206119">DEL5 - Bilaspur (ALFA)</option>
//                 <option value="206120">DED5 - Sohna (Regular)</option>
//                 <option value="206121">DED5 - Sohna (ALFA)</option>
//                 <option value="212210">DED4 - Sohna (Regular)</option>
//                 <option value="245611">DED4 - Sohna (ALFA)</option>
//                 <option value="245795">HDO3 - Dhatir (Regular)</option>
//               </select>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="mt-6 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-3 rounded-full font-bold hover:scale-105 transform transition"
//             >
//               Start Your Test &gt;&gt;
//             </button>

//           </form>
//         </div>

//         {/* Right Column - Optional Content */}
//         <div className="md:w-1/2">
//           <div className="bg-gray-700 h-full rounded-md p-4">
//             {/* You can put images, instructions, or other content here */}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }










import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phonenumber: "",
    gender: "",
    date_of_birth: "",
    address_place: "",
    aadhaar: "",
    specially_abled: "",
    site_location: "",
    answers: [],
    finishedAt: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const siteLocations = {
      "163783": "DED3 - Farukh Nagar (Regular)",
      "163784": "DED3 - Farukh Nagar (ALFA)",
      "163785": "DEL2 - Tauru (Regular)",
      "204805": "DEL2 - Tauru (ALFA)",
      "204806": "DEL4 - Jamalpur (Regular)",
      "206117": "DEL4 - Jamalpur (ALFA)",
      "206118": "DEL5 - Bilaspur (Regular)",
      "206119": "DEL5 - Bilaspur (ALFA)",
      "206120": "DED5 - Sohna (Regular)",
      "206121": "DED5 - Sohna (ALFA)",
      "212210": "DED4 - Sohna (Regular)",
      "245611": "DED4 - Sohna (ALFA)",
      "245795": "HDO3 - Dhatir (Regular)"
    };

    try {
      const payload = {
        name: formData.username,
        email: formData.email,
        phone: formData.phonenumber,
        gender: formData.gender === "1" ? "Male" : "Female",
        dob: formData.date_of_birth,
        aadhaar: formData.aadhaar,
        city: formData.address_place,
        specially_abled: formData.specially_abled,
        site_location: siteLocations[formData.site_location] || formData.site_location,
        declaration: {},
        answers: [],  // ❗ Test complete hone ke baad fill karenge
        finishedAt: null
      };

      const res = await fetch("http://localhost:5000/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      console.log("Server Response:", data);

      navigate("/Declaration", { state: { formData: payload } });
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-start py-10 px-4">
      <div className="w-full max-w-6xl bg-gray-800 rounded-xl shadow-xl p-8 flex flex-col md:flex-row gap-10">

        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-6">Enter your details</h1>
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Name */}
            <div>
              <label className="block mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1">
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-1">
                Phone number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="phonenumber"
                value={formData.phonenumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block mb-1">
                Gender <span className="text-red-500">*</span>
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white"
              >
                <option value="">Select</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
              </select>
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block mb-1">Date of birth</label>
              <input
                type="date"
                name="date_of_birth"
                value={formData.date_of_birth}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white"
              />
            </div>

            {/* City / Town */}
            <div>
              <label className="block mb-1">City / town</label>
              <input
                type="text"
                name="address_place"
                value={formData.address_place}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white"
              />
            </div>

            {/* Aadhaar */}
            <div>
              <label className="block mb-1">
                Aadhaar Card ID Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="aadhaar"
                value={formData.aadhaar}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white"
              />
            </div>

            {/* Specially Abled */}
            <div>
              <label className="block mb-1">
                Specially Abled (Y/N) <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="specially_abled"
                value={formData.specially_abled}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white"
              />
            </div>

            {/* Site Location */}
            <div>
              <label className="block mb-1">
                Please select your Site Location <span className="text-red-500">*</span>
              </label>
              <select
                name="site_location"
                value={formData.site_location}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white"
              >
                <option value="">Select</option>
                <option value="163783">DED3 - Farukh Nagar (Regular)</option>
                <option value="163784">DED3 - Farukh Nagar (ALFA)</option>
                <option value="163785">DEL2 - Tauru (Regular)</option>
                <option value="204805">DEL2 - Tauru (ALFA)</option>
                <option value="204806">DEL4 - Jamalpur (Regular)</option>
                <option value="206117">DEL4 - Jamalpur (ALFA)</option>
                <option value="206118">DEL5 - Bilaspur (Regular)</option>
                <option value="206119">DEL5 - Bilaspur (ALFA)</option>
                <option value="206120">DED5 - Sohna (Regular)</option>
                <option value="206121">DED5 - Sohna (ALFA)</option>
                <option value="212210">DED4 - Sohna (Regular)</option>
                <option value="245611">DED4 - Sohna (ALFA)</option>
                <option value="245795">HDO3 - Dhatir (Regular)</option>
              </select>
            </div>

            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-md text-white"
            >
              Next
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
