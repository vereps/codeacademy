// CITIES:
let citiesData = [
    {
    name: 'Vilnius',
    population: 1000,
        location: {
            continent: ('Europa'),
            country: ('Lietuva'),
        },
        touristAttractions: ['Gedimino pilis', 'Arena'],
        isCapital: true,
    },
    {
    name: 'Kaunas',
    population: 5000,
        location: {
            continent: ('Europa'),
            country: ('Lietuva'),
        },
        touristAttractions: ['Pilis', 'Aikste'],
        isCapital: false,
    },
    {
    name: 'Bauska',
    population: 25000,
        location: {
            continent: ('Europa'),
            country: ('Latvija'),
        },
        touristAttractions: ['Pils'],
        isCapital: false,
    },
    {
    name: 'Toronto',
    population: 5004565400,
        location: {
            continent: ('North American'),
            country: ('Canada'),
        },
        touristAttractions: ['Pilis', 'Aikste'],
        isCapital: true,
    },
    {
    name: 'Toronto',
    population: 5004565400,
        location: {
            continent: ('North American'),
            country: ('Canada'),
        },
        touristAttractions: ['Pilis', 'Aikste'],
        isCapital: true,
    },
    {
        name: 'Praha',
        population: 1309000,
        location: {
            continent: ('Europa'),
            country: ('Cekija'),
        },
        touristAttractions: ['Prahos pilis', 'Sv. Vito katedra', 'Karolio tiltas'],
        isCapital: true,
    },
    {
        name: 'Toronto',
        population: 9645454645,
        location: {
            continent: ('North American'),
            country: ('Canada'),
        },
        touristAttractions: ['Prahos pilis', 'Sv. Vito katedra', 'Karolio tiltas'],
        isCapital: true,
    },
    {
        name: 'Toronto',
        population: 784564,
        location: {
            continent: ('North American'),
            country: ('Canada'),
        },
        touristAttractions: ['Pilis', 'Aikste'],
        isCapital: true,
    },
    {
        name: 'Toronto',
        population: 504545,
        location: {
            continent: ('North American'),
            country: ('Canada'),
        },
        touristAttractions: ['Pilis', 'Aikste'],
        isCapital: true,
    },
    {
        name: 'Zeimelis',
        population: 1000,
        location: {
            continent: ('Europa'),
            country: ('Lietuva'),
        },
        touristAttractions: [],
        isCapital: true,
    },
];

function renderCities(cities) {
    // console.log(cities);
    let citiesWrapper = document.querySelector('#cities-wrapper');
    cities.map((city) => {
      let { name, population, touristAttractions, isCapital} = city;
      let { continent, country } = city.location;
    let cityTitle = '';
    let cityDescription = '';
    let capitalClass = '';
    let nameText = `<span class="capital">${name}<span>`;
    console.log(nameText);
    if   (isCapital == true) {
        cityTitle = `<h2>${nameText} (capital)</h2>`; 
        cityDescription = `<p>${name} is the capital of ${country}. ${name} city is located in ${continent}, ${country} and has population of ${population} people.</p>`;
        capitalClass = ' capital';
    } else {
        cityTitle = `<h2>${name}</h2>`;
        cityDescription = `<p>${name} city is located in ${continent}, ${country} and has population of ${population} people.</p>`;
    }
      let cityTouristAttractionsWrapper = '';
      let cityTouristAttractionsTitle = '';
      let cityTouristAttractionsItems = '';
      touristAttractions.map((touristAttraction) => {
        cityTouristAttractionsItems += '<li>' + touristAttraction + '</li>';
      });
      if (touristAttractions.length == 0) {
        cityTouristAttractionsWrapper = '';
      } else if (touristAttractions.length == 1) {
        cityTouristAttractionsTitle = `<h3>Main tourist attraction of ${name} is:</h3>`;
          cityTouristAttractionsWrapper = `${cityTouristAttractionsTitle}
                                       <ul>${cityTouristAttractionsItems}</ul>`;
      } else if (touristAttractions.length > 1) {
        cityTouristAttractionsTitle = `<h3>Main tourist attractions of ${name} are:</h3>`;
        cityTouristAttractionsWrapper = `${cityTouristAttractionsTitle}
        <ul>${cityTouristAttractionsItems}</ul>`;
      } else {
        cityTouristAttractionsWrapper = '';
      }
      citiesWrapper.innerHTML += `<div class="city-item ${capitalClass}">
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
//   console.log(city);
  city.style.backgroundColor = '';
})
let capitalItems = document.querySelectorAll('.capital');
console.dir(capitalItems);
console.dir(capitalItems.length);
capitalItems.forEach((name) => {
//   console.log(city);
  city.name.style.backgroundColor = '';
})
// 1. Sukurti masyv??, kuriame b??t?? 10 skirting?? miest??. Kiekvienas miestas turi b??ti objekto tipo ir turi tur??ti ??iuos properties:
// 1.1. name - miesto pavadinimas (string)
// 1.2. population - miesto populiacija (number)
// 1.3. location - (object)
//    1.3.1. continent - ??emynas (string)
//    1.3.2. country - ??alis (string)
// 1.4. touristAttractions - lankytinos vietos (array)
// 1.5. isCapital - reik??m?? nurodanti ar miestas yra sostin?? (boolean)



// 1.6. Visus miest?? masyv?? narius i??vesti ?? konsol??.
// 1.6.1. Vis?? miest?? pavadinimis i??vesti ?? konsol??.
// 1.6.2. Vis?? miest?? populiacij?? i??vesti ?? konsol??.
// 1.6.3. Vis?? miest?? ??emyn?? i??vesti ?? konsol??.
// 1.6.4. Vis?? miest?? ??al?? i??vesti ?? konsol??.
// 1.6.5. ?? konsol?? i??vesti ar miestas yra sostin??, ar ne.
// 1.6.6. ?? konsol?? i??vesti visas miesto lankytinas vietas.
// console.log(array);

// 3.1. Jeigu miestas yra sostin??, tai:
// 3.1.1. Prie miesto pavadinimo prid??ti ??od?? capital, pvz.: Vilnius (capital)
// 3.1.2. Prie miesto apra??ymo prid??ti tekst??, kuris nusako jog tai ??alies sostin??, pvz.: ???Vilnius is the capital of Lithuania."

// 4. Priklausomai nuo miesto lankytin?? objekt?? kiekio, tekstas turi skirtis:
// 4.1. Jeigu lankytina vieta tik viena, tai tur??t?? b??ti naudojama vienaskaita, pvz.: ???Main Tourist attraction of Vilnius is".
// 4.2. Jeigu lankytin?? viet?? yra daugiau, nei viena, tai tekstas tur??t?? b??ti daugiskaitoje, pvz. ???Main Tourist attractions of Kaunas are".
// 4.3. Jeigu lankytin?? viet?? n??ra, tai tekstas netur??t?? b??ti atvaizduojamas.

// 6. Jeigu miestas yra sostin??, tai prie apgaubian??io elemento prid??ti klas?? ???capital".
// 6.1. Naudojant tik JavaScript, pakeisti vis?? sostini?? teksto spalv??.
// 7. Naudojant tik JavaScript:
// 7.1. Pakeisti kas antro miesto fono spalv??.
// 7.2. Pakeisti vis?? lankytin?? viet?? s??ra??o pirmo nario spalv?? ?? ??ali??.
// 7.3. Pakeisti vis?? lankytin?? viet?? s??ra??o paskutini?? nari?? spalv?? ?? raudon??, jeigu nari?? (lankytin?? viet??) yra daugiau nei 3.
// 8. Jeigu miest?? skai??ius n??ra porinis, tai paskutinio miesto plotis turi b??ti 100%, o vis?? kit?? - 50%.