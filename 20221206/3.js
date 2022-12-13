console.log(`---task1----`);
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
let firstInput = document.querySelector('form input:nth-child(3)');
console.log(firstInput);
// Paskutinę įvestį (<input>) į formą.
let lastInput = document.querySelector('form input:last-child');
console.log(lastInput);
console.log(`---task2----`);
// Sukurkite 2 input elemetntus ir mygtuką. Vienas iš input elementų turi būti readonly. Paspaudus mygtuką įvestas tekstas JavaScript Event pagalba turi būti perkeltas iš pirmo į antrą input.
let btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    document.getElementById('two').value = document?.getElementById('one')?.value;
    document.getElementById('one').value = '';
});
console.log(`---task3----`);
// Parašykite JavaScript kodą, kuris rodytu lango plotį ir aukštį H1 elemente (kiekvieną kartą kai keičiamas lango dydis skaičiai atsinaujina)
let h1Element = document.querySelector('h1');
let btn1 = document.getElementById('btn1');
btn1.addEventListener("click", () => {
    h1Element.textContent = `Lango plotis: ${window.innerWidth} px ir aukštis ${window.innerHeight} px.`;
});