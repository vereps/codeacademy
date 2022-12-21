// Parašykite NodeJS programą kuri iš komandinės eilutės priims 2 parametrus:
// failo pavadinimas
// failo turinys

// O tada sukurtų tokį failą ir įdės ten turinį.
let fs = require('fs');
const fileName = 'text.txt';
const data = 'Helo to new documet';

fs.writeFile(fileName, data, { overwrite: false }, function (err) {
    if (err) throw err;
    console.log('It\'s saved!');
});

// fs.createWriteStream(path, { overwrite: false });