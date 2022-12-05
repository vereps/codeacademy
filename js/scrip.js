// UŽDUOTIS:
// Į konsole išvesti apskaičiuotus keturkampio perimetrus pagal šias kraštines:
// 1. 10 ilgis ir 10 plotis.
// 2. 10 ilgis ir 25 plotis.
// 3. 10 ilgis ir 30 plotis.
// 4. 10 ilgis ir 35 plotis.
// 5. 10 ilgis ir 40 plotis.
// 6. 10 ilgis ir 45 plotis.
// 7. 10 ilgis ir 50 plotis.
// 8. 10 ilgis ir 55 plotis.
// 9. 10 ilgis ir 60 plotis.
// 10. 10 ilgis ir 120 plotis.
console.log('Perimetras: ' + (10 + 10) * 2 + ' m.');
console.log('Perimetras: ' + (10 + 25) * 2 + ' m.');
console.log('Perimetras: ' + (10 + 30) * 2 + ' m.');
console.log('Perimetras: ' + (10 + 35) * 2 + ' m.');
console.log('Perimetras: ' + (10 + 40) * 2 + ' m.');
console.log('Perimetras: ' + (10 + 45) * 2 + ' m.');
console.log('Perimetras: ' + (10 + 50) * 2 + ' m.');
console.log('Perimetras: ' + (10 + 55) * 2 + ' m.');
console.log('Perimetras: ' + (10 + 60) * 2 + ' m.');
console.log('Perimetras: ' + (10 + 120) * 2 + ' m.');
// DRY - Don't Repeat Yourself
// FUNKCIJOS
// Funkcijos kūrimas
// 1. Iniciavimo žodelis (function)
// 2. Funkcijos pavadinimas
// 3. Paprasti skliaustai funkcijos argumentas įrašyti - ()
// 4. Riestiniai skliaustai skirti nurodyti ką funkcija turi atlikti - {}
function hello() {
  console.log('Good evening, John.');
}
// Funkcijos iškvietimas:
// 1. Funkcijos pavadinimas
// 2. Paprasti skliaustai - ()
hello();
const h1Element = document.querySelector('h1');
// Funkcija su argumentais (funkcija, kuri turi dinami6kas - besikeičiančias - dalis)
function helloWithName(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}.`;
}
console.log(helloWithName('John', 'Doe'));
h1Element.textContent = helloWithName('Steve', 'Doe');
const greetingText = helloWithName('Doe', 'John');
console.log(greetingText);
h1Element.textContent += greetingText;

function perimeter(width, height, units = 'kv. vnt.') {
  const answer = (width + height) * 2;
  const outputText = `Plotas: ${answer} ${units}`;
  return outputText;
}
function plotas(width, height, units = 'vnt.') {
  const answer = (width * height);
  const outputText = `Perimetras: ${answer} ${units}`;
  return outputText;
}
const num1 = 50;
const num2 = 20;
console.log(perimeter(num1, num2));
console.log(plotas(10, 10));
console.log(perimeter(10, 25));
console.log(perimeter(10, 30));
console.log(perimeter(10, 35));
console.log(perimeter(10, 40));
console.log(perimeter(10, 45));
console.log(perimeter(10, 50));
console.log(perimeter(10, 60));
console.log(perimeter(10, 120));

// Užduotis 1:
// 1. Sukurti funkciją, kuri skaičiuotų stačiakampio plotą.
// 2. Funkcija turi priimti du argumentus (ilgį ir plotį).
// 3. Funkcija turi grąžinti tekstą: „Stačiakampio plotas yra 10 kv. vnt."
// 4. Į konsolę išvesti šios funkcijos rezultatą.

// Užduotis 3:
// Sukurti naują funkciją, kuri apjungtų šias dvi užduotis ir išvestų abu rezultatus.