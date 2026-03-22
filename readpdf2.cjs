const { PdfReader } = require('pdfreader');

new PdfReader().parseFileItems('public/PalakMishraCV2026.pdf', (err, item) => {
  if (err) console.error("error:", err);
  else if (!item) console.log("EOF");
  else if (item.text) console.log(item.text);
});
