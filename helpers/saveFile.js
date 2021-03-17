const fs = require('fs');

const file = './db/data.json';

const saveDB = (data) => {
  fs.writeFileSync(file, JSON.stringify(data));
};

const readDB = () => {
  if (fs.existsSync(file)) {
    const info = fs.readFileSync(file, { encoding: 'utf-8' });
    const data = JSON.parse(info)
    console.log(data);

    return null
  }
};

module.exports = {
  saveDB,
  readDB
};
