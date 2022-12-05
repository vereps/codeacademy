// Užduotis (masyvai):
// 1. Sukurti 3 masyvus, kuriuose būtų bent 10 narių.
// 2. Sukurti funkciją, kuri išveda visus masyve esančius narius į konsolę.

// let car = [[['Audi', 'BMW']], [['1995', '2005']], [['A6', 'X5']]];
// function carArrays(car) {
//     for (let i = 0; i < car.length; i++) {
//         for (let j = 0; j < car[i].length; j++) {
//             console.log(car[i][j]);
//         }
//     }
// }
// let car = [[['Audi', 'BMW']], [['1995', '2005']], [['A6', 'X5']]];
// function carArrays(car) {
//     for (let i = 0; i < car.length; i++) {
//         for (let j = 0; j < car[i].length; j++) {
//             for (let k = 0; k < car[i][j].length; k++) {
//                 console.log(car[i][j][k]);
//             }
//         }
//     }
// }
// carArrays(car);

// 1. Sukurti 3 sluoksniu masyva, kuriuose būtų bent 10 narių ir i6vesti i console.

// UZDUOTIS dirbant su pirkinių sąrašu (bent 7 pirkiniai):
// Kiekvienam iš punktų sukurti po atskirą kintamąjį ir jame išsaugoti reikšmę. Šią reikšmę atvaizduoti konsolėje.
// 1. Išimti pirmus du pirkinius.
// 2. Išimti tris paskutinius pirkinius.
// 3. Išimti ketvirtą ir penktą pirkinį.
// 4. Išimti antrą ir trečią pirkinį.
// 5. Išimti visus, išskyrus pirmą pirkinį.

// let purchases = ['obuoliai', 'bananai', 'mandarinai', 'vynuoges', 'kriauses', 'slyvos', 'vysnios'];
// console.log(purchases);
// let slicePurchases1 = purchases.slice(0, 2);
// console.log('pirmus du pirkinius' ,slicePurchases1);
// let slicePurchases2 = purchases.slice(-3);
// console.log('tris paskutinius pirkinius' ,slicePurchases2);
// let slicePurchases3 = purchases.slice(3, 5);
// console.log('ketvirtą ir penktą pirkinį' ,slicePurchases3);
// let slicePurchases4 = purchases.slice(1, 3);
// console.log('antrą ir trečią pirkinį' ,slicePurchases4);
// let slicePurchases5 = purchases.slice(1);
// console.log('išskyrus pirmą pirkinį' ,slicePurchases5);

// [20:47] Romanas Venckus
// Sukurti 10-ties filmų masyvą ir iš jo:
// (nemodifikuoti originalaus masyvo)
// 1. Išimti pirmus 5 filmus.
// 2. Išimti 4 paskutinius filmus.
// 3. Išimti nuo trečio iki septinto filmo.
// 4. Išimti antrą ir trečią filmą.
// 5. Išimti visus, išskyrus pirmą filmą.
// 6. Išimti 5 filmus skaičiuojant nuo trečio.
// 7. Išimti tris filmus nuo galo, tačiau palikti paskutinį.

// (galima modifikuoti originalų masyvą)
// 8. Vietoje penkto filmo įrašyti du naujus filmus.
// 9. Pašalinti pirmą filmą.
// 10. Įrašyti naują filmą į masyvo pradžią.

// 11.1. Išimti pirmus tris filmus, skaičiuojant nuo antro filmo.
// 11.2. Išimti paskutinius tris filmus, skaičiuojant nuo priešpaskutinio filmo.
// 11.3. Šiuos išimtus filmus išsaugoti naujame masyve ir padaryti, jog jo nariai būtų apsukti.

// let video = ['obuoliai', 'bananai', 'mandarinai', 'vynuoges', 'kriauses', 'slyvos', 'vysnios', 'marke', 'jodas', 'jaunas'];
// console.log(video);
// let sliceVideo1 = video.slice(0, 5);
// console.log('pirmus 5 filmus' ,sliceVideo1);
// let sliceVideo2 = video.slice(-4);
// console.log('Išimti 4 paskutinius filmus' ,sliceVideo2);
// let sliceVideo3 = video.slice(2, 7);
// console.log('Išimti nuo trečio iki septinto filmo' ,sliceVideo3);
// let sliceVideo4 = video.slice(1, 3);
// console.log('Išimti antrą ir trečią filmą.' ,sliceVideo4);
// let sliceVideo5 = video.slice(1);
// console.log('Išimti visus, išskyrus pirmą filmą.' ,sliceVideo5);
// let sliceVideo6 = video.slice(2, 7);
// console.log('Išimti 5 filmus skaičiuojant nuo trečio.' ,sliceVideo6);
// let sliceVideo7 = video.slice(-4, -1);
// console.log('Išimti tris filmus nuo galo, tačiau palikti paskutinį.' ,sliceVideo7);

// let spliceVideo8 = video.splice(4, 1, 'naujas1', 'naujas2');
// console.log('Vietoje penkto filmo įrašyti du naujus filmus.' ,spliceVideo8);
// console.log('masyvas -', video);
// let spliceVideo9 = video.splice(0, 1);
// console.log('Pašalinti pirmą filmą.' ,spliceVideo9);
// console.log('masyvas -', video);
// let spliceVideo10 = video.splice(0, 0, 'Naujas');
// console.log('Įrašyti naują filmą į masyvo pradžią.' ,spliceVideo10);
// console.log('masyvas -', video);

// let spliceVideo11 = video.splice(1, 3);
// console.log('Išimti pirmus tris filmus, skaičiuojant nuo antro filmo.' ,spliceVideo11);

// let spliceVideo12 = video.splice(-4, 3);
// console.log('Išimti paskutinius tris filmus, skaičiuojant nuo priešpaskutinio filmo.' ,spliceVideo12);

// let newVideos = spliceVideo11.concat(spliceVideo12)
// console.log('masyvas -', video);
// console.log('Naujas masyvas reverse: ' + newVideos.reverse());

// // 12. Filmų sąrašą išvesti į ekraną (ul - li elementuose). Prie filmo pavadinimo pridėti filmo eilės numerį.
// for (let i = 0; i < newVideos.length; i++) {
//     let list = document.createElement('li');
//     list.innerHTML=newVideos[i];
//     document.querySelector('ul').appendChild(list);
// }



const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function mapLoop(arr) {
    arr.map((item) => console.log(item));
}
mapLoop(arr1);
mapLoop(arr2);
mapLoop(arr3);
let arr4 = [["labas", "naujas"], ["tre", "ket"], ["pen", "ses"]];

function nestedMapLoop(arr) {
    arr.map((firstlevelArr) => {
        firstlevelArr.map((item) => {
            console.log(item);
        })
    });
}
nestedMapLoop(arr4);

let arr5 = [[["labas", "naujas"], ["tre", "ket"]], [["fff", "dddd"], ["aaaa", "lll"]]];
function nestedMapLoops(arr) {
    arr.map((firstlevelArr) => {
        firstlevelArr.map((secondLevelArr) => {
            secondLevelArr.map((item) => {
                console.log(item);
            })    
        })
    });
}
nestedMapLoops(arr5);

// FILTER:
console.log('-----Filter-----------');
// 1. Sukurti 20-ties skaičių masyvą ir išfiltruoti skaičius, kurie:
let numsArray = [5, 2, 3, 7, -5, 6, 7, 10, 11, 20, -20, -5, 7 , 15, 13, 100, 0, 7, 25, 88];
console.log('Masyvas: ' + numsArray);
// 1.1. Yra didesni už 10
let filteredArrayNums = numsArray.filter(num => num > 10);
console.log('Yra didesni už 10: ' + filteredArrayNums);
// 1.2. Yra neigiami
let filteredMinusArrayNums = numsArray.filter(num => num < 0);
console.log('Yra neigiami: ' + filteredMinusArrayNums);
// 1.3. Dalinasi iš 3 arba 5
let filtered3Or5ArrayNums = numsArray.filter(num => num % 3 === 0 || num % 5 === 0);
console.log('Dalinasi iš 3 arba 5: ' + filtered3Or5ArrayNums);
// 1.4. Dalinasi iš 4 ir yra didesni už 13
let filtered4And13ArrayNums = numsArray.filter(num => num % 4 === 0 && num > 13);
console.log('Dalinasi iš 4 ir yra didesni už 13: ' + filtered4And13ArrayNums);

console.log('---------Reduce-------------');
// REDUCE:
// 1. Sukurti masyvą su bent 7 pasaulio valstybėmis.
let countries = ['Lietuva', 'Latvija', 'Estija', 'Vokietija', 'Anglija', 'Italija', 'Kinija'];
console.log('Vastybes: ' + countries);
// 2. Sukurti naują kintamąjį, kurio jo reikšmė bus visos pasaulio valstybės iš pirmojo masyvo sudėtos į vieną string'ą (naudoti reduce metodą).
// 3. Šio kintamojo reikšmę išvesti į konsolę.
let arraySum = countries.reduce((sum, currentValue) => {
    return currentValue + ', ' + sum;
  });
console.log('Visos pasaulio valstybės: ' + arraySum);

console.log('----------Filter ND 2 ---------------');
// 2. Sukurti 20-ties žodžių masyvą ir išfiltruoti žodžius, kurie:
let world = ['lele', 'Latvija', 'Estija', 'Vokietija', 'Anglija', 'Italija', 'Kinija', 'laike', 'laukas', 'daina', 'kiemas', 'vietra', 'stalas', 'kilimas', 'tiASltas', 'arena', 'futboilas', 'tenisas', 'autikas', 'trulikas'];
console.log(world);
// 2.1. Baigiasi raide e
let filteredWorldEndE = world.filter(num => num.slice(-1) == 'e');
console.log('Baigiasi raide e: ' + filteredWorldEndE);

// 2.2. Turi daugiau raidžių nei 8
let filteredWorldNums = world.filter(num => num.length > 8);
console.log('Turi daugiau raidžių nei 8: ' + filteredWorldNums);
// 2.3. Turi neporinį raidžių skaičių
let filteredWorldNonPaired = world.filter(num => num.length % 2 === 0);
console.log('Turi neporinį raidžių skaičių: ' + filteredWorldNonPaired);
// 2.4. Savyje turi raidžių junginį as

function filterItems(arr, query) {
    return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
  }
console.log('Savyje turi raidžių junginį as: ' + filterItems(world, "as"));

// ND
console.log('-----------------UŽDUOTIS papildoma-----------------');
// 1. Sukurti 10-ies skaičių masyvą.

const array = [1, 2, 9, 4, -3, 6, 11, 8, 9, 10];
console.log('Sukurti 10-ies skaičių masyvą: ' + array);
// 2. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina jų vidurkį.
function calculate(array) {
    let i=0, sum = 0, len = array.length;
    while (i < len) {
        sum = sum + array[i++];
    }
    return sum / len;
}
// 2.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) vidurkis yra 15"
console.log(`Skaiciu (` + array + `) vidurkis yra ` + calculate(array));
// 3. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina jų medianą.
const median = array => {
    const mid = Math.floor(array.length / 2),
      nums = [...array].sort((a, b) => a - b);
    return array.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  };
  console.log(`Skaiciu (` + array + `) mediana yra ` + median(array) + ' .');

  const sortNumber = array => {
    const mids = Math.floor(array.length / 2),
      nums = [...array].sort((a, b) => a - b);
    return nums;
  };
  
  console.log(' ------ Skaiciai didejancia tvarka: ' + sortNumber(array));
// 3.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) mediana yra 15"

let h1 = document.createElement('h1');
document.createElement('h1').textContent = median(array);
document.body.prepend('Sekos: ' + sortNumber(array) + `) mediana yra ` + median(array) + ' .');
// 4. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina didžiausia jame esantį skaičių.
let filteredGreatest = array.filter(num => num);
console.log('Didžiausias skaičius: ' + Math.max(...array));
// 4.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) didžiausias skaičius yra 15"
let h2 = document.createElement('h2');
document.createElement('h2').textContent = median(array);
document.body.prepend('Didžiausias skaičius: ' + Math.max(...array));
// 5. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina mažiausią jame esantį skaičių.
let filteredMin = array.filter(num => num);
console.log('mažiausias skaičius yra:: ' + Math.min(...array));
// 5.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) mažiausias skaičius yra 1"
let h3 = document.createElement('h3');
document.createElement('h3').textContent = median(array);
document.body.prepend('Sekos: ' + sortNumber(array) + 'mažiausias skaičius yra: ' + Math.min(...array));
// 6. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina n-tąjį skaičių pagal dydį (skaičiuojant nuo mažiausio iki didžiausio).
let filteredN = sortNumber(array).filter(num => num);
console.log('Sekos: ' + sortNumber(array) + ' trečias skaičius pagal dydį yra: ' + sortNumber(array).splice(2, 1));
// 6.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) trečias skaičius pagal dydį yra 3"

