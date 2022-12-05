
// function count(num) {
//     console.log(`Lygu ` + num + ` !`);
// }

// count(1);
// let num = 1;


// for (let i = 1; i <= 20; i++) {
//     count(i);
// }
// function count(num) {
//     console.log('- ' + num + '!');
//   }
function loop() {
    for (let i = 1; i <= 10; i++) {
    //   console.log('- ' + i + '!');
      count(i);
    }
  }
//   loop();
// Sukurti funkcijas, kurios paleidžia ciklą su skaičiais nuo 1 iki 100. Šie ciklai:
// 1. Padaugina skaičių iš 2.
// 2. Padaugina skaičių iš 5.
// 3. Prideda prie skaičiaus 5.
// 4. Atima iš skaičiaus 2.
// 5. Pakelia skaičių kvadratu.
// 6. Pakelia skaičių kūbu.
function task1() {
    for (let i = 1; i <= 10; i++) {
        console.log(i * 2);
      }
}
// task1();

function task2() {
    for (let i = 1; i <= 10; i++) {
        console.log(i * 5);
      }
}
// task2();
function task3() {
    for (let i = 1; i <= 10; i++) {
        console.log(i + 5);
      }
}
// task3();
function task4() {
    for (let i = 1; i <= 10; i++) {
        console.log(2 - i);
      }
}
// task4();
function task5() {
    for (let i = 1; i <= 10; i++) {
        console.log(i * i);
      }
}
// task5();
function task6() {
    for (let i = 1; i <= 10; i++) {
        console.log(i * i * i);
      }
}
// task6();
// 7. Sukurti analogiškas funkcijas pirmoms užduotims, tačiau padaryti, jog ciklai skaičiuotųsi nuo 100 iki 1.

function task7() {
    for (let i = 10; i >= 0; i--) {
        console.log(i * 2);
      }
}
// task7();
function task8() {
    for (let i = 10; i >= 0; i--) {
        console.log(i * 5);
      }
}
// task8();
function task9() {
    for (let i = 10; i >= 0; i--) {
        console.log(i + 5);
      }
}
// task9();
function task10() {
    for (let i = 10; i >= 0; i--) {
        console.log(i - 2);
      }
}
// task10();
function task11() {
    for (let i = 10; i >= 0; i--) {
        console.log(i**2);
      }
}
// task11();
function task12(start=10, end=0, repeat=1) {
    for (let i = start; i >= end; i-=repeat) {
        let answer = i**3;
        let output =`${i} ^3 = ${answer}`; 
        console.log(output);
      }
}
// task12(10, 1, 1);

// VARIANTAS 1
// function fizzBuzz(i) {
//     if (i % 3 == 0 && i % 5 == 0 && i % 7 == 0) {
//         return "„FizzBuzzBiff";
//     } else if (i % 5 == 0 && i % 7 == 0) {
//         return "„BuzzBiff";
//     } else if (i % 3 == 0 && i % 7 == 0) {
//         return "„FizzBiff";
//     } else if (i % 7 == 0) {
//         return "„Biff";
//     } else {
//         return i;
//     }
// }
// function fizzBuzzResult(start=1, end=100,repeat=1){
//     for (let i = start; i <= end; i+=repeat) {
//         console.log(fizzBuzz(i));
//     }
// }
// fizzBuzzResult(1, 106, 1);
// ATRAS VARIANTAS
// function fizzBuzz(start=1, end=100,repeat=1){
//     for (let i = start; i <= end; i+=repeat) {
//         if (i % 3 == 0 && i % 5 == 0 && i % 7 == 0 && i % 9 == 0  && i % 11 == 0) {
//             console.log("FizzBuzzBiffFuzz");
//         } else if (i % 5 == 0 && i % 7 == 0 && i % 9 == 0) {
//             console.log("BuzzBiffFuzz");
//         } else if (i % 3 == 0 && i % 7 == 0 && i % 9 == 0) {
//             console.log("FizzBiffFuzz");
//         } else if (i % 3 == 0 && i % 5 == 0 && i % 9 == 0) {
//             console.log("FizzBuzzFuzz");
//         } else if (i % 7 == 0 && i % 9 == 0) {
//             console.log("BiffFuzz");
//         } else if (i % 5 == 0 && i % 9 == 0) {
//             console.log("BuzzFuzz");
//         } else if (i % 3 == 0 && i % 9 == 0) {
//             console.log("FizzFuzz");
//         } else if (i % 11 == 0) {
//             console.log("„Bizz");
//         } else if (i % 9 == 0) {
//             console.log("Fuzz");
//         } else if (i % 7 == 0) {
//             console.log("Biff");
//         } else if (i % 5 == 0) {
//             console.log("„Buzz");
//         } else if (i % 3 == 0) {
//             console.log("Fizz");
//         } else {
//             console.log(i);
//         }
//     }
// }
// fizzBuzz(1, 315, 1);
// TERCIAS VARIANTAS
function fizzBuzz(start=1, end=100,repeat=1){
    for (let i = start; i <= end; i+=repeat) {
        if (i % 3 == 0 && i % 5 == 0 && i % 7 == 0 && i % 9 == 0  && i % 11 == 0) {
            console.log("FizzBuzzBiffFuzz");
        } else if (i % 5 == 0 && i % 7 == 0 && i % 9 == 0) {
            console.log("BuzzBiffFuzz");
        } else if (i % 3 == 0 && i % 7 == 0 && i % 9 == 0) {
            console.log("FizzBiffFuzz");
        } else if (i % 3 == 0 && i % 5 == 0 && i % 9 == 0) {
            console.log("FizzBuzzFuzz");
        } else if (i % 7 == 0 && i % 9 == 0) {
            console.log("BiffFuzz");
        } else if (i % 5 == 0 && i % 9 == 0) {
            console.log("BuzzFuzz");
        } else if (i % 3 == 0 && i % 9 == 0) {
            console.log("FizzFuzz");
        } else if (i % 11 == 0) {
            console.log("„Bizz");
        } else if (i % 9 == 0) {
            console.log("Fuzz");
        } else if (i % 7 == 0) {
            console.log("Biff");
        } else if (i % 5 == 0) {
            console.log("„Buzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else {
            console.log(i);
        }
    }
}
// fizzBuzz(1, 315, 1);



// 8. Kiekvienos užduoties išvesties tekstą suformuluoti, jog būtų parašytas užduoties sprendimas, pvz.:
// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6
// ir t.t.


// 9. Papildyti funkcijas, jog jos priimtu šiuos argumentus:
// 9.1. Nusakytų nuo kokio skaičiaus prasidės ciklas.
// 9.2. Nusakytų iki kokio skaičiaus ciklas tęsis.
// 9.3. Nusakytų kelinto ciklo metu turi išvesti atsakymą į konsolę.

