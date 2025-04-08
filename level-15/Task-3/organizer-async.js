const fs = require('fs/promises');
const path = require('path');

const categories = require('./categories.json');

const organizeFilesAsync = async (dirPath) => {
  const files = await fs.readdir(dirPath);
  const report = [];

  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = await fs.lstat(fullPath);

    if (stat.isFile()) {
      const ext = path.extname(file).toLowerCase();
      let moved = false;

      for (let category in categories) {
        if (categories[category].includes(ext)) {
          await moveFile(dirPath, fullPath, file, category);
          report.push({ file, movedTo: category });
          moved = true;
          break;
        }
      }

      if (!moved) {
        await moveFile(dirPath, fullPath, file, 'Others');
        report.push({ file, movedTo: 'Others' });
      }
    }
  }

  await fs.writeFile('fileReport.json', JSON.stringify(report, null, 2));
  console.log('Files Organized Successfully (Async)');
};

const moveFile = async (dirPath, fullPath, file, category) => {
  const categoryPath = path.join(dirPath, category);
  try {
    await fs.mkdir(categoryPath);
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
  }
  await fs.rename(fullPath, path.join(categoryPath, file));
};

organizeFilesAsync('./files');
