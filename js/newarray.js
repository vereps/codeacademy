// UŽDUOTIS:
// 1. Naudojant Object() metodą sukurti kintamąjį įmonei apibūdinti.
let company = new Object();

// 2. Prie objekto pridėti:
// 2.1. Property „company name" ir priskirti įmonės pavadinimo reikšmę.
company['company name'] = 'Taurus';
// 2.2. Property „opened" ir priskirti įmonės įkūrimo metų reikšmę.
company.opened = 2019;
// 2.3. Property „companyCode" ir priskirti įmonės kodo reikšmę.
company.companyCode = 178545457;
// 2.4. Property „employees" ir priskirti įmonėje dirbančių darbuotojų kiekio reikšmę.
company.employees = 50;
// 2.5. Property „ceo" ir priskirti įmonės vadovo reikšmę.
company.ceo = 'reiskme';
// 2.6. Property „nvo" ir priskirti boolean reikšmę (ar įmonė turi NVO statusą).
company.nvo = false;
// 2.7. Property „workingLocation" ir priskirti įmonės veiklos šalių value (turi būti bent 2 veiklos šalys).
company.workingLocation = ['Latvija', 'Esita'];
// 2.8. Property „activityAreas" ir priskirti įmonės veiklos sričių reikšmę (turi būti bent dvi veiklos sritys).
company.activityAreas = ['Siuntos', 'laiskai'];
// 2.9. Property „contacts", kuris turės:
company.contacts = {};
//       2.9.1. „phone"
company.contacts.phone = '+37066666666';
//       2.9.2. „email"
company.contacts.email = 'hdkjahsk@gmail.com';
//       2.9.3. „address", kuris turės:
company.contacts.address = {};
//           2.9.3.1. „country"
company.contacts.address.country = 'Lietuva';
//           2.9.3.2. „city"
company.contacts.address.city = 'Vilnius';
//           2.9.3.3. „street"
company.contacts.address.street = 'Vilniaus';
//           2.9.3.4. „apartment"
company.contacts.address.apartment = 15;
// 2.10. Property „subsidiaries", kurio reikšmė bus masyvas.
company.subsidiaries = ['TukTuk', 'Jakun'];
console.log(company);

let company1 = {
    'company name': 'Jau greit',
    opened: 2018,
    companyCode: 789456464,
    employees: 40,
    ceo: 'nereiskia',
    nvo: false,
    workingLocation: ['Latvija', 'Estia'],
    addworkingLocation(naujaLokacija) {
        this.workingLocation.push(naujaLokacija);
      },
    activityAreas: ['Keliones', 'gabenimas'],
    addActivityAreas(naujaVeikla) {
        this.activityAreas.push(naujaVeikla);
      },
    subsidiaries: [company],
    contacts: {
        phone: '+37066666666',
        email: 'hdkjahsk@gmail.com',
        address: {
            country: 'Lietuva',
            city: 'Vilnius',
            street: 'Vilniaus g.',
            apartment: 15,
            gautiPilnaAddress: function() {
                return `${this.country} ${this.city} ${this.street} ${this.apartment}`;
              },
        },
    },
    padarytiCompanyActyve() {
        this.nvo = true;
    },
    padarytiCompanyInactyve() {
        this.nvo = false;
    },
    switchCompanyAc() {
        this.nvo = !this.nvo;
    },
}
console.log(company1);

// 5. Sukurti funkciją, kuri sukuria adreso string'ą: „Vilniaus st. 15, Vilnius, Lithuania.".
// gautiPilnaAddress: function() {
//     return `${this.country} ${this.city} ${this.street} ${this.apartment}`;
//   },
console.log(company1.contacts.address.gautiPilnaAddress());
// 6. Sukurti dvi funkcijas, kurios:
//        6.1. Pakeičia NVO statusą į true.
console.log(company1.nvo);
company1.padarytiCompanyActyve();
console.log(company1.nvo);
//        6.2. Pakeičia NVO statusą į false.
company1.padarytiCompanyInactyve();
console.log(company1.nvo);
//        6.3. BONUS, sukurti funkciją, kuri keičia NVO statusą iš true į false ir iš false į true.
company1.switchCompanyAc();
console.log(company1.nvo);
// 7. Sukurti funkcijas, kurios grąžina:
//        7.1. Šalis, kuriose veikia įmonė į vieną string'ą.
console.log(company1.workingLocation);
company1.workingLocation.map((hobis) => hobis);
for (let i = 0; i < company1.workingLocation.length; i++) {
  console.log(company1.workingLocation[i]);
}
let locationA = company1.workingLocation;
console.log(`BAD - Šalys: ${locationA}`);
//        7.2. Veiklos sritis, kuriose veikia įmonė į vieną string'ą.
console.log(company1.activityAreas);
company1.activityAreas.map((hobis) => hobis);
for (let i = 0; i < company1.activityAreas.length; i++) {
  console.log(company1.activityAreas[i]);
}
let areas = company1.activityAreas;
console.log(`BAD - Veiklos sritis: ${areas}`);
// 8. Sukurti funkcijas, kurios prideda:
//        8.1. Naują veiklos šalį prie šalių masyvo.
console.log(company1.workingLocation);
company1.addworkingLocation('Egiptas');
console.log(company1.workingLocation);
//        8.2. Naują veiklos rūšį prie veiklų masyvo.
console.log(company1.activityAreas);
company1.addActivityAreas('Transportavimas');
console.log(company1.activityAreas);
// 9. Sukurti funkcijas, kurios pašalina:
//        9.1. Veiklos šalį iš šalių masyvo.
console.log(company1.workingLocation);
company1.pasalintiworkingLocation = function(salinti) {
  this.workingLocation = this.workingLocation.filter(senasworkingLocation => senasworkingLocation !== salinti);
};
company1.pasalintiworkingLocation('Latvija');
console.log(company1.workingLocation);
//        9.2. Veiklos rūšį iš veiklų masyvo.
company1.pasalintiactivityAreas = function(salinti) {
    this.activityAreas = this.activityAreas.filter(senasactivityAreas => senasactivityAreas !== salinti);
  };
  company1.pasalintiactivityAreas('gabenimas');
  console.log(company1.activityAreas);
  