const fs = require('fs');
const pdf = require('pdf-parse');

async function readPdf() {
  try {
    const dataBuffer = fs.readFileSync('public/PalakMishraCV2026.pdf');
    const data = await pdf(dataBuffer);
    console.log("=== PDF TEXT ===");
    console.log(data.text);
    console.log("=== END ===");
  } catch (err) {
    console.error("Error parsing:", err);
  }
}

readPdf();
