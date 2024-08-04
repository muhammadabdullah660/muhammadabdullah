const fs = require("fs");
const path = require("path");

const directoryPath = path.join(__dirname, "../../public/images/life");

// Check if the directory exists
if (!fs.existsSync(directoryPath)) {
  console.error("Directory does not exist:", directoryPath);
  process.exit(1);
}

// Read filenames from the directory
const imageNames = fs
  .readdirSync(directoryPath)
  .filter((file) => /\.(jpg|jpeg|png)$/.test(file));

// Create an array of image objects with paths and dimensions
const imageList = imageNames.map((name, i) => {
  const desc = "";
  return {
    src: `/images/life/${name}`,
    // name minus extension
    title: name.replace(/\.[^/.]+$/, ""),
    desc,
  };
});

const outputFilePath = path.join(
  __dirname,
  "../../public/images/imageList.json"
);
fs.writeFileSync(outputFilePath, JSON.stringify(imageList, null, 2));

console.log("Image list generated successfully!");
