const fs = require('fs');
const path = require('path');


function readJSON(filePath, callback) {
    const jsonFilePath = path.join(__dirname, filePath);

    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            callback(err);
            return;
        }

        try {
            const json = JSON.parse(data);
            callback(null, json);
        } catch (error) {
            console.error(error);
            callback(error);
        }
    });
}


function writeJSON(filePath, data, callback) {
    const jsonFilePath = path.join(__dirname, filePath);
    const jsonData = JSON.stringify(data);

    fs.writeFile(jsonFilePath, jsonData, (err) => {
        if (err) {
            console.error(err);
            callback(err);
            return;
        }

        callback(null);
    });
}


module.exports = {
    readJSON,
    writeJSON
};
