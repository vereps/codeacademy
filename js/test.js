// CITIES:
// 1. Sukurti masyvą, kuriame būtų 10 skirtingų miestų. Kiekvienas miestas turi būti objekto tipo ir turi turėti šiuos properties:
//  1.1. name - miesto pavadinimas (string)
//  1.2. population - miesto populiacija (number)
//  1.3. location - (object)
//    1.3.1. continent - žemynas (string)
//    1.3.2. country - šalis (string)
//  1.4. touristAttractions - lankytinos vietos (array)
//  1.5. isCapital - reikšmė nurodanti ar miestas yra sostinė (boolean)
let citiesData = [
  {
    name: 'London',
    population: 11120000,
    location: {
      continent: 'Europe',
      country: 'United Kingdom',
    },
    touristAttractions: ['Big Ben'],
    isCapital: true,
  },
  {
    name: 'Paris',
    population: 11027000,
    location: {
      continent: 'Europe',
      country: 'France',
    },
    touristAttractions: [],
    isCapital: true,
  },
];
// 1.6. Visus miestų masyvų narius išvesti į konsolę.
// 1.6.1. Visų miestų pavadinimis išvesti į konsolę.
// 1.6.2. Visų miestų populiaciją išvesti į konsolę.
// 1.6.3. Visų miestų žemyną išvesti į konsolę.
// 1.6.4. Visų miestų šalį išvesti į konsolę.
// 1.6.5. Į konsolę išvesti ar miestas yra sostinė, ar ne.
// 1.6.6. Į konsolę išvesti visas miesto lankytinas vietas.

function renderCities(cities) {
  let citiesWrapper = document.querySelector('#cities-wrapper');
  cities.map((city) => {
    // let name = city.name;
    // let population = city.population;
    // let touristAttractions = city.touristAttractions;
    let { name, population, touristAttractions, isCapital } = city;
    // let continent = city.location.continent;
    // let country = city.location.country;
    let { continent, country } = city.location;
    // let capitalText = isCapital ? ' (capital)' : '';
    let capitalText = '';
    let capitalDescriptionText = '';
    let capitalClass = '';
    if (isCapital) {
      capitalText = ' (capital)';
      capitalDescriptionText = ` ${name} is the capital of ${country}.`;
      capitalClass = ' capital';
    }
    // let cityTitle = '';
    // if (name) {
    //   cityTitle = `<h2>${name}</h2>`;
    // }
    let cityTitle = name ? `<h2>${name}${capitalText}</h2>` : '';
    let cityDescription = `<p>${name} city is located in ${continent}, ${country} and has population of ${population} people.${capitalDescriptionText}</p>`;
    let cityTouristAttractionsWrapper = '';
    if (touristAttractions.length > 0) {
      // PIRMAS BŪDAS
      // let cityTouristAttractionsTitle = `<h3>Main tourist attractions of ${name} are:</h3>`;
      // if (touristAttractions.length === 1) {
      //   cityTouristAttractionsTitle = `<h3>Main tourist attraction of ${name} is:</h3>`;
      // }
      // ANTRAS BŪDAS
      // let cityTouristAttractionsTitle = '';
      // if (touristAttractions.length === 1) {
      //   cityTouristAttractionsTitle = `<h3>Main tourist attraction of ${name} is:</h3>`;
      // } else {
      //   cityTouristAttractionsTitle = `<h3>Main tourist attractions of ${name} are:</h3>`;
      // }
      // TREČIAS BŪDAS
      let cityTouristAttractionsTitle = touristAttractions.length === 1 ? `<h3>Main tourist attraction of ${name} is:</h3>` : `<h3>Main tourist attractions of ${name} are:</h3>`;
      let cityTouristAttractionsItems = '';
      touristAttractions.map((touristAttraction) => {
        cityTouristAttractionsItems += '<li>' + touristAttraction + '</li>';
      });
      cityTouristAttractionsWrapper = `${cityTouristAttractionsTitle}
                                       <ul>${cityTouristAttractionsItems}</ul>`;
    }
    citiesWrapper.innerHTML += `<div class="city-item${capitalClass}">
                                  ${cityTitle}
                                  ${cityDescription}
                                  ${cityTouristAttractionsWrapper}
                                </div>`;
  })
}
renderCities(citiesData);
// JS selectoriai
let cityItems = document.querySelectorAll('.city-item');
console.dir(cityItems);
console.dir(cityItems.length);
cityItems.forEach((city) => {
  console.log(city);
  city.style.backgroundColor = 'green';
})

// 6. Jeigu miestas yra sostinė, tai prie apgaubiančio elemento pridėti klasę „capital".
// 6.1. Naudojant tik JavaScript, pakeisti visų sostinių teksto spalvą.
// 7. Naudojant tik JavaScript:
// 7.1. Pakeisti kas antro miesto fono spalvą.
// 7.2. Pakeisti visų lankytinų vietų sąrašo pirmo nario spalvą į žalią.
// 7.3. Pakeisti visų lankytinų vietų sąrašo paskutinių narių spalvą į raudoną, jeigu narių (lankytinų vietų) yra daugiau nei 3.
// 8. Jeigu miestų skaičius nėra porinis, tai paskutinio miesto plotis turi būti 100%, o visų kitų - 50%.