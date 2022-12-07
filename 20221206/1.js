console.log(`-------task1-----------`);
// Muzikinės grupės turi specialius pavadinimus pagal žmonių skaičių grupėje. Pvz., „kvartetas“ yra muzikinė grupė, kurią sudaro keturi muzikantai.
// Parašykite sąlyginių teiginių seriją (else...if statements), kuri:
// Atspausdins consolėje "ne grupė" jei muzikantų yra mažiau ar lygu 0;
// Atspausdins consolėje "solo" jei muzikantų yra 1;
// Atspausdins consolėje "duetas" jei muzikantų yra 2;
// Atspausdins consolėje "trio" jei muzikantų yra 3;
// Atspausdins consolėje "kvartetas" jei muzikantų yra 4;
// Atspausdins consolėje "didelė grupė" jei muzikantų yra daugiau nei 4.
let num = ('');
let result = 'ne grupė';
if (num == 1) {
    result = `solo`;
} else if (num == 2) {
    result = `duetas`;
} else if (num == 3) {
    result = `trio`;
} else if (num == 4) {
    result = `kvartetas`;
} else if (num > 4) {
    result = `didelė grupė`;
} else {
    result = `ne grupė`;
}
console.log(result);
// ---------------------------------------
console.log(`-------task2-----------`);
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
function checkAge(age) { return age > 18 ? true : `Did parents allow you?`; };
console.log(checkAge(43));
// ---------------------------------------
console.log(`-------task3-----------`);
// Parašykite „JavaScript“ funkciją, kuri grąžina perduotą eilutę su raidėmis abėcėlės tvarka.
console.assert(alphabetOrder('alphabetical') == 'aaabcehillpt');
function alphabetOrder(word) {
    return [...word].sort().join("").toLowerCase();
}
console.log(alphabetOrder(`Naujas miestas`));
// ---------------------------------------
console.log(`-------task4-----------`);
// [21:51] Kirilas Čalkin"plusPlus" Function [JavaScript]
// Parašykitė funkciją plusplus kuri priima 2 parametrus:
//  skaičius	
//  kiek kartu prie šio skaičiaus reikia pridėti 1
// Pvz.: plusPlus(10, 3) grąžina 13. Svarbu: turi pridėti butent 1, o ne tesiog sudėti du skaičius
function plusPlus(num, x) {
    for (let i = 0; i < x; i++) {
        num++;
    }
    return num;
}
console.log(plusPlus(10, 3));
// ---------------------------------------

