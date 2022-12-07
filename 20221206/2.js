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
console.log(`-------task1(recursion)-----------`);
function plusPlusRecursion(x, y) {
    if (y > 0) {
      x++;
      x = plusPlusRecursion(x, --y);
    }
    return x;
}
console.log(`-------task2-----------`);
// Sukurkite masyvą a, b, c. Parodykite masyvą naudodami console.log funkciją.
let array = ('a', 'b', 'c');
console.log(array);
// Naudodamiesi ankstesnės užduoties masyvu, parodykite pirmojo, antrojo ir trečiojo elementų turinį.
// Sukurkite masyvą a, b, c, d ir naudodami jį parodykite eilutė a + b, c + d.
// Sukurkite masyvą su elementais 2, 5, 3, 9.
// Pirmąjį masyvo elementą padauginkite iš antrojo, o trečiąjį elementą iš ketvirtojo.
// Sudėkite rezultatus, priskirkite kintamąjam. Parodykite šio kintamojo reikšmę.
// Yra pateiktas masyvas [[1, 2, 3], [4, 5, 6], [7,8,9]]. Parodykite skaičių 4 iš šio masyvo.
// Duoti du masyvai: 1, 2, 3 ir 4, 5, 6. Sujunkite juos.
// Duotas masyvas 1, 2, 3. Iš jo padarykite masyvą 3, 2, 1.
// Duotas masyvas 1, 2, 3. Pridėkite elementus 4, 5, 6 į galą ir -1, -2, -3 į priekį.
// Duotas masyvas html, css, js. Parodykite pirmąjį ir paskutinį elementus.
// Duotas masyvas 3, 4, 1, 2, 7. Surūšiuokite jį.
// Duotas masyvas 1, 2, 3, 4, 5. Konvertuokite masyvą į 1, 2, 3.
console.log(array);