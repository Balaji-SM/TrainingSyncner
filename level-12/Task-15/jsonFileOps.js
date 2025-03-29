const fs = require('fs');
const path = require('path');

const jsonFilePath = path.join(__dirname, 'data.json');

function modifyJsonData() {
  
  fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err.message}`);
      return;
    }

    try {
      let jsonData = JSON.parse(data);
      console.log('Original Data:', jsonData);

      jsonData.push({
        id: 4,
        name: 'John Doe',
        age: 28
      });

      const itemToUpdate = jsonData.find(item => item.id === 2);
      if (itemToUpdate) {
        itemToUpdate.name = 'Jane Smith';
        itemToUpdate.age = 32;
      }

      const itemIndexToRemove = jsonData.findIndex(item => item.id === 1);
      if (itemIndexToRemove !== -1) {
        jsonData.splice(itemIndexToRemove, 1);
      }

      console.log('Modified Data:', jsonData);
      fs.writeFile(jsonFilePath, JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
        if (err) {
          console.error(`Error writing file: ${err.message}`);
          return;
        }
        console.log('JSON file has been updated successfully!');
      });
    } catch (parseError) {
      console.error(`Error parsing JSON data: ${parseError.message}`);
    }
  });
}

modifyJsonData();
