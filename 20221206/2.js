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