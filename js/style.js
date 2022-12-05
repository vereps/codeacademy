function greeting (personName, isLoggedIn, time, isBirthday) {
  let nameText = (isLoggedIn && personName) ? ', ' + personName : '';
  let birthdayText = (isBirthday && isLoggedIn) ? 'and have a great birthday!' : '';
  if (time >= 5 && time <= 12) {
    greetingText = 'Good Morning';
  } else if (time >= 13 && time <= 18) {
    greetingText = 'Good Afternoon';
  } else if (time >= 19 && time <= 23 || time >= 0 && time <= 4) {
    greetingText = 'Good Evening';
  } else {
    greetingText = 'Hello';
  }
  let greetingOutput = `${greetingText}${nameText} ${birthdayText}`;
  return greetingOutput;
}
const h1Element = document.querySelector('h1');
const greetingOutput = greeting ('Tom', true, 15, true);
console.log(greetingOutput);
h1Element.textContent = greetingOutput;

const h2Element = document.querySelector('h2');
function grade (grade) {
  switch (grade) {
    case 1:
      gradeOutput = 'Labai blogai';
      h2Element.style.background = 'red';
      break;
    case 2:
      gradeOutput = 'Blogai';
      // h2Element.style.background = 'orange';
      break;
    case 3:
      gradeOutput = 'Vidutiniškai';
      // h2Element.style.background = 'brown';
      break;
    case 4:
      gradeOutput = 'Gerai';
      // h2Element.style.background = 'yellow';
      // h2Element.style.color = 'black';
      break;
    case 5:
      gradeOutput = 'Puikiai';
      h2Element.style.background = 'green';
      h2Element.style.textTransform = 'uppercase';
      break;
    default:
      gradeOutput = 'Įvestas netinkamas skaičius';
      // h2Element.style.background = 'red';
      break;
  }
  return gradeOutput;
}
console.log(grade(5));

h2Element.style.color = 'black';
h2Element.style.padding = '15px';
h2Element.style.fontSize = '50px';
h2Element.style.textAlign = 'center';
h2Element.style.background = 'brown';
h2Element.textContent = gradeOutput;

function perimeter(width, height, units = 'vnt') {
    const answer = (width + height) * 2;
    const outputText = `Perimetras: ${answer} ${units}.`;
    return outputText;
  }
  function area(width, height, units = 'vnt') {
    const answer = width * height;
    const outputText = `Stačiakampio plotas yra ${answer} kv. ${units}.`;
    return outputText;
  }

  function allInfo(width, height, units = 'vnt') {
    const perimeterText = perimeter(width, height, units);
    const areaText = area(width, height, units);
    return perimeterText + ' ' + areaText;
  }
 
console.log(allInfo(20, 20, 'cm'));
console.log(allInfo(20, 25, 'cm'));
console.log(allInfo(20, 30, 'cm'));
console.log(allInfo(20, 35, 'cm'));
console.log(allInfo(20, 40, 'cm'));
console.log(allInfo(20, 45, 'cm'));
console.log(allInfo(20, 50, 'cm'));
console.log(allInfo(20, 55, 'cm'));
console.log(allInfo(20, 60, 'cm'));
console.log(allInfo(20, 120, 'cm'));
const h3Element = document.querySelector('h3');
h3Element.textContent = allInfo(20, 20, 'cm');


function age (age) {
  if (age < 0) {
    ageText = 'Amzius per mazas';
  } else if (age < 16) {
    ageText = 'Pirkti negalima';
  } else if (age < 18) {
    ageText = 'Pirkti galima su tevu sutikimu';
  } else if (age < 120) {
    ageText = 'Galima pirkti';
  } else {
    ageText = 'Amzius per didelis';
  }
  let ageOutput = `${ageText}`
  return ageOutput;
}
const ageOutput = age(18);
console.log(ageOutput);
const h4Element = document.querySelector('h4');
h4Element.textContent = ageOutput;
