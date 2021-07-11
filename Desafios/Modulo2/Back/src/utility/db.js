const fs = require("fs");
const fsp = fs.promises;
const FILE = 'src/banco/db.json';

const readJSON = async() => {
    try {
        const file = await fsp.readFile(FILE, (err, data) => {
            if (err) {
                return err;
            }
            return data;
        })

        if (file.length > 0) {
            return JSON.parse(file);
        }
    } catch (err) {
        return false;
    }
};

const writeJSON = async () => {
    try {
        await fsp.writeFile(FILE, JSON.stringify(data, null, 2)); 
        return true;
    } catch (err) {
        return false
    }
}

module.exports = { readJSON, writeJSON }