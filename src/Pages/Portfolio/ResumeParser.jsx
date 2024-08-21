// import React, { useState, useRef } from "react";
// import { Modal, Button } from "@mui/material";
// import { PDFDocument } from "pdf-lib";

// const ResumeParser = () => {
//   const [open, setOpen] = useState(false);
//   const [resumeData, setResumeData] = useState(null);
//   const [error, setError] = useState(null);
//   const fileInputRef = useRef(null);

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const handleFileChange = async (event) => {
//     setError(null); // Clear previous errors
//     const file = event.target.files[0];
//     if (file && file.type === "application/pdf") {
//       try {
//         const arrayBuffer = await file.arrayBuffer();
//         const pdfDoc = await PDFDocument.load(arrayBuffer);
//         const pages = pdfDoc.getPages();
//         const text = await Promise.all(
//           pages.map(async (page) => {
//             const textContent = await page.getTextContent();
//             return textContent.items.map((item) => item.str).join(" ");
//           })
//         );
//         setResumeData(text.join("\n\n"));
//         handleOpen();
//       } catch (err) {
//         console.log(err)
//         setError("Failed to parse the resume PDF.");
//       }
//     } else {
//       setError("Please upload a valid PDF file.");
//     }
//   };

//   const handleButtonClick = () => {
//     setError(null); // Clear previous errors
//     fileInputRef.current.click();
//   };

//   return (
//     <div>
//       <input
//         type="file"
//         accept="application/pdf"
//         onChange={handleFileChange}
//         style={{ display: "none" }}
//         ref={fileInputRef}
//       />
//       <Button variant="contained" component="span" onClick={handleButtonClick}>
//         Upload Resume
//       </Button>

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       <Modal open={open} onClose={handleClose}>
//         <div
//           style={{
//             padding: 20,
//             backgroundColor: "white",
//             margin: "auto",
//             marginTop: "10%",
//           }}
//         >
//           <h2>Parsed Resume Data</h2>
//           {resumeData ? <pre>{resumeData}</pre> : <p>Loading...</p>}
//           <Button variant="contained" onClick={handleClose}>
//             Close
//           </Button>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default ResumeParser;
// import React, { useState, useRef } from "react";
// import { Modal, Button } from "@mui/material";
// import * as pdfjsLib from "pdfjs-dist/webpack";

// const ResumeUploader = () => {
//   const [open, setOpen] = useState(false);
//   const [resumeData, setResumeData] = useState(null);
//   const [error, setError] = useState(null);
//   const fileInputRef = useRef(null);

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const extractTextFromPDF = async (arrayBuffer) => {
//     const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
//     let extractedText = "";
//     for (let i = 1; i <= pdf.numPages; i++) {
//       const page = await pdf.getPage(i);
//       const textContent = await page.getTextContent();
//       const pageText = textContent.items.map((item) => item.str).join(" ");
//       extractedText += pageText + "\n\n";
//     }
//     return extractedText;
//   };

//   const handleFileChange = async (event) => {
//     setError(null); // Clear previous errors
//     const file = event.target.files[0];
//     if (file && file.type === "application/pdf") {
//       try {
//         const arrayBuffer = await file.arrayBuffer();
//         const text = await extractTextFromPDF(arrayBuffer);
//         setResumeData(text);
//         console.log(text)
//         handleOpen();
//       } catch (err) {
//         setError("Failed to parse the resume PDF.");
//       }
//     } else {
//       setError("Please upload a valid PDF file.");
//     }
//   };

//   const handleButtonClick = () => {
//     setError(null); // Clear previous errors
//     fileInputRef.current.click();
//   };

//   return (
//     <div>
//       <input
//         type="file"
//         accept="application/pdf"
//         onChange={handleFileChange}
//         style={{ display: "none" }}
//         ref={fileInputRef}
//       />
//       <Button variant="contained" component="span" onClick={handleButtonClick}>
//         Upload Resume
//       </Button>

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       <Modal open={open} onClose={handleClose}>
//         <div
//           style={{
//             padding: 20,
//             backgroundColor: "white",
//             margin: "auto",
//             marginTop: "10%",
//           }}
//         >
//           <h2>Parsed Resume Data</h2>
//           {resumeData ? <p>{resumeData}</p> : <p>Loading...</p>}
//           <Button variant="contained" onClick={handleClose}>
//             Close
//           </Button>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default ResumeUploader;
const data = () => {
  return <></>;
};
export default data;
