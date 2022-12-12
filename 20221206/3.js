console.log(`Veikia`);
// Sukurkite HTML dokumentą su lentele (table) ir forma (form). Dokumentu turi būti žemiau aptartos žymos (angl. tags) ir jų atributai.

// Suraskite ir konsolėje atvaizduokite:


// Lentelę su id = "age-table".
let tableList = document.querySelectorAll('#age-table');
tableList.forEach((element, key) => {
    console.log(element)
});
// Pirmasis <td> toje lentelėje (su id “age”).
let firstTd = document.querySelectorAll('#age');
firstTd.forEach((element, key) => {
    console.log(element)
});

// Visus <label> elementus lentelės viduje (jų turėtų būti 3).
let labelList = document.querySelectorAll('label');
labelList.forEach((element, key) => {
    console.log(element)
});
// Pirmają įvestį (<input>) į formą.
let firstInput = document.querySelector('form input:nth-child(1)');
console.log(firstInput);
// Paskutinę įvestį (<input>) į formą.
let lastInput = document.querySelector('form input:last-child');
console.log(lastInput);