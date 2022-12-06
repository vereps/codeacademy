// Muzikinės grupės turi specialius pavadinimus pagal žmonių skaičių grupėje. Pvz., „kvartetas“ yra muzikinė grupė, kurią sudaro keturi muzikantai.
// Parašykite sąlyginių teiginių seriją (else...if statements), kuri:
// Atspausdins consolėje "ne grupė" jei muzikantų yra mažiau ar lygu 0;
// Atspausdins consolėje "solo" jei muzikantų yra 1;
// Atspausdins consolėje "duetas" jei muzikantų yra 2;
// Atspausdins consolėje "trio" jei muzikantų yra 3;
// Atspausdins consolėje "kvartetas" jei muzikantų yra 4;
// Atspausdins consolėje "didelė grupė" jei muzikantų yra daugiau nei 4.
// let music = [0, 1, 2, 3, 4, 5];
// console.log(music);
// function audio(music) {
//     let result;
//     if (music > 0) {
//         result = `ne grupė" jei muzikantų yra mažiau ar lygu 0`;
//     } else {result = `ELSE`;}
//     return result;
//     console.log(result);
// }
// let filteredMusic0 = music.filter(num => num <= 0);
// console.log(`ne grupė`);
// let filteredMusic1 = music.filter(num => num == 1);
// console.log(`solo`);
// let filteredMusic2 = music.filter(num => num == 2);
// console.log(`duetas`);
// let filteredMusic3 = music.filter(num => num == 3);
// console.log(`trio`);
// let filteredMusic4 = music.filter(num => num == 4);
// console.log(`kvartetas`);
// let filteredMusic5 = music.filter(num => num > 4);
// console.log(`didelė grupė`);
// --------------------------------------------------
// Funkcija grąžins true, jei parametro amžius yra didesnis nei 18 metų.
//       function checkAge(age) {​
//   if (age > 18) {​
//     return true;
//   }​ else {​
//     return confirm('Did parents allow you?');
//   }​
// }​
// Perrašykite funkcijos kodą, kad jis būtų be if ir vienoje eilutėje:
// Naudokite: ternary operator ?
function checkAge(age) {return age > 18 ? true : false;};
console.log(checkAge(43));