const fs = require('fs');
const path = require('path');

const categories = require('./categories.json');

const organizeFiles = (dirPath) => {
  const files = fs.readdirSync(dirPath);
  const report = [];

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.lstatSync(fullPath).isFile()) {
      const ext = path.extname(file).toLowerCase();
      let moved = false;

      for (let category in categories) {
        if (categories[category].includes(ext)) {
          moveFile(dirPath, fullPath, file, category);
          report.push({ file, movedTo: category });
          moved = true;
          break;
        }
      }

      if (!moved) {
        moveFile(dirPath, fullPath, file, 'Others');
        report.push({ file, movedTo: 'Others' });
      }
    }
  });

  fs.writeFileSync('fileReport.json', JSON.stringify(report, null, 2));
  console.log('Files Organized Successfully (Sync)');
};

const moveFile = (dirPath, fullPath, file, category) => {
  const categoryPath = path.join(dirPath, category);
  if (!fs.existsSync(categoryPath)) {
    fs.mkdirSync(categoryPath);
  }
  fs.renameSync(fullPath, path.join(categoryPath, file));
};

organizeFiles('./files');
