console.log(`-------task1-----------`);
//     Perrašykite aukščiau pateiktą funkciją "plusPlus" taip, kad joje nebūtų naudojamas joks ciklas ar kitokios JS fukcijos.
// Su If else
function plusPlus(num, x) {
    let i = 0;
    if (i < x) {
        i = i + x;
        num = num + i;
    }
    return num;
}
console.log(plusPlus(10, 3));
console.log(`-------task1_recursion-----------`);
function plusPlusRecursion(num, x) {
    if (x > 0) {
        num++;
        num = plusPlusRecursion(num, --x);
    }
    return num;
}
console.log(plusPlusRecursion(10, 4));
console.log(`-------task2-----------`);
// Sukurkite masyvą a, b, c. Parodykite masyvą naudodami console.log funkciją.
let array1 = ['a', 'b', 'c'];
// Naudodamiesi ankstesnės užduoties masyvu, parodykite pirmojo, antrojo ir trečiojo elementų turinį.
console.log(`${array1[0]} ${array1[1]} ${array1[2]}`);
console.log(`-------task3-----------`);
// Sukurkite masyvą a, b, c, d ir naudodami jį parodykite eilutė a + b, c + d.
let array2 = ['a', 'b', 'c', 'd'];
console.log(`${array2[0]} + ${array2[1]}, ${array2[2]} + ${array2[3]}`);
console.log(`-------task4-----------`);
// Sukurkite masyvą su elementais 2, 5, 3, 9.
let array3 = [2, 5, 3, 9];
// Pirmąjį masyvo elementą padauginkite iš antrojo, o trečiąjį elementą iš ketvirtojo.
let multipliFirst = array3[0] * array3[1];
let multipliSecondary = array3[2] * array3[3];
// Sudėkite rezultatus, priskirkite kintamąjam. Parodykite šio kintamojo reikšmę.
let multipliAmount = multipliFirst + multipliSecondary;
console.log(multipliAmount);
console.log(`-------task5-----------`);
// Yra pateiktas masyvas [[1, 2, 3], [4, 5, 6], [7,8,9]]. Parodykite skaičių 4 iš šio masyvo.
let array4 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(`${array4[1][0]}`);
console.log(`-------task6-----------`);
// Duoti du masyvai: 1, 2, 3 ir 4, 5, 6. Sujunkite juos.
let array51 = [1, 2, 3];
let array52 = [4, 5, 6];
let array5 = array51.concat(array52);
console.log(array5);
console.log(`-------task7-----------`);
// Duotas masyvas 1, 2, 3. Iš jo padarykite masyvą 3, 2, 1.
let array6 = [1, 2, 3];
array6.reverse();
console.log(array6);
console.log(`-------task8-----------`);
// Duotas masyvas 1, 2, 3. Pridėkite elementus 4, 5, 6 į galą ir -1, -2, -3 į priekį.
let array7 = [1, 2, 3];
array7.push(4, 5, 6);
array7.splice(0, 0, -1, -2, -3);
console.log(array7);
console.log(`-------task9-----------`);
// Duotas masyvas html, css, js. Parodykite pirmąjį ir paskutinį elementus.
let arrayFrontEnd = ['html', 'css', 'js'];
let first = arrayFrontEnd.slice(0, 1);
let last = arrayFrontEnd.slice(-1)
console.log(`${first}, ${last}`);
console.log(`-------task10-----------`);
// Duotas masyvas 3, 4, 1, 2, 7. Surūšiuokite jį.
let array8 = [3, 4, 1, 2, 7];
array8.sort();
console.log(array8);
console.log(`-------task11-----------`);
// Duotas masyvas 1, 2, 3, 4, 5. Konvertuokite masyvą į 1, 2, 3.
let array9 = [1, 2, 3, 4, 5];
array9.splice(3,);
console.log(array9);
console.log(`-------task12-----------`);
// Objects [JavaScript]
// Sukurkite objektą green: žalia, red: raudona, blue: mėlyna. Parodykite šio objekto raktus ir elementus naudojant for ciklą
let objectColor = {
    green: 'žalia',
    red: 'raudona',
    blue: 'mėlyna',
}
for (let i = 0; i < Object.keys(objectColor).length; i++) {
    let names = Object.keys(objectColor)[i];
    let solary = Object.values(objectColor)[i];
    console.log(`${names} ${solary}`);
};
console.log(`-------task13-----------`);
// Sukurkite objektą su raktais Mantas, Paulius, Mindaugas ir reikšmėm 200, 300, 300. Parodykite eilutes tokiu formatu: Mantas - 200 EU atlyginimas.
let objectSolary = {
    Mantas: 200,
    Paulius: 300,
    Mindaugas: 300,
}
for (const property in objectSolary) {
    console.log(`${property} - ${objectSolary[property]} EU atlyginimas`);
};
console.log(`-------task14-----------`);
// Sukurkite objektą su savaitės dienomis. Raktai jame turėtų būti dienų skaičiai nuo savaitės pradžios (1 -> pirmadienis ir t.t.). Parodykite dabartinę savaitės dieną.
const today = new Date('2022-12-07');
let weekDaysObjects = {
    1: 'Pirmadienis',
    2: 'Antardienis',
    3: 'Trečiadienis',
    4: 'Ketvirtadienis',
    5: 'Penktadienis',
    6: 'Šeštadienis',
    7: 'Sekamdienis',
};
let day = weekDaysObjects[today.getDay()];
console.log(`Dabartinė savaitės diena: ${day}`);