let array = [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];
console.log(array);

// 1. Dirbant su šiuo masyvu eilės tvarka atlikti žemiau pateiktas užduotis. Naudoti metodus: pop, push, shift, unshift, splice.
console.log(`1. Dirbant su šiuo masyvu eilės tvarka atlikti žemiau pateiktas užduotis. Naudoti metodus: pop, push, shift, unshift, splice.`);
// 1.1. Pašalinti pirmą masyvo narį.
let shiftArray = array.shift();
console.log(`1.1. Pašalinti pirmą masyvo narį. ${shiftArray}`);
// 1.2. Pašalinti paskutinį masyvo narį.
let popArray = array.pop();
console.log(`1.2. Pašalinti paskutinį masyvo narį. ${popArray}`);
// 1.3. Rasti vidurinį masyvo narį ir jį pašalinti.

// 1.4. Pašalinti priešpaskutinį masyvo narį.
console.log(array);
let spliceArray1 = array.splice(-2, 1);
console.log(`1.2. Pašalinti paskutinį masyvo narį. ${spliceArray1}`);
// 1.5. Pašalinti antrą masyvo narį.
console.log(array);
let spliceArray2 = array.splice(1, 1);
console.log(`1.5. Pašalinti antrą masyvo narį. ${spliceArray2}`);
// 1.6. Pašalinti 7 ir 8 masyvo narius.
console.log(array);
let spliceArray3 = array.splice(6, 2);
console.log(`1.6. Pašalinti 7 ir 8 masyvo narius. ${spliceArray3}`);
// 1.7. Pašalinti 4, 5 ir 6 masyvo narius skaičiuojant nuo galo.
console.log(array);
let spliceArray4 = array.splice(-6, 3);
console.log(`1.7. Pašalinti 4, 5 ir 6 masyvo narius skaičiuojant nuo galo. ${spliceArray4}`);
// 1.8. Pašalinti trečią masyvo narį ir į jo vietą įdėti skaičių 888.
console.log(array);
let spliceArray5 = array.splice(3, 1, 888);
console.log(`1.8. Pašalinti trečią masyvo narį ir į jo vietą įdėti skaičių 888. ${spliceArray5}`);
// 1.9. Pašalinti dešimtą masyvo narį ir į jo vietą įdėti skaičius: 33, 789 ir 6543.
console.log(array);
let spliceArray6 = array.splice(9, 1, 33, 789, 6543);
console.log(`Pašalinti dešimtą masyvo narį ir į jo vietą įdėti skaičius: 33, 789 ir 6543. ${spliceArray6}`);
// 1.10. Pašalinti paskutinį masyvo narį į jo vietą įdėti skaičius: 321, 654, 987.
console.log(array);
let spliceArray7 = array.splice(-1, 1, 321, 654, 987);
console.log(`Pašalinti paskutinį masyvo narį į jo vietą įdėti skaičius: 321, 654, 987. ${spliceArray7}`);
// 1.11. Tarp pirmo ir antro masyvo narių įdėti skaičių 11.
console.log(array);
let spliceArray8 = array.splice(1, 0, 11);
console.log(`1.11. Tarp pirmo ir antro masyvo narių įdėti skaičių 11. ${spliceArray8}`);
// 1.12. Tarp 13 ir 14 masyvo narių įdėti skaičių 1.
console.log(array);
let spliceArray9 = array.splice(13, 0, 1);
console.log(`1.12. Tarp 13 ir 14 masyvo narių įdėti skaičių 1. ${spliceArray9}`);
// 1.13. Tarp paskutinio ir priešpaskutinio masyvo narių įdėti skaičių -1.
console.log(array);
let spliceArray10 = array.splice(-1, 0, -1);
console.log(`1.13. Tarp paskutinio ir priešpaskutinio masyvo narių įdėti skaičių -1. ${spliceArray10}`);
// 1.14. Į masyvo pradžią pridėti skaičius: 1, 2, 3.
console.log(array);
let spliceArray11 = array.splice(0, 0, 1, 2, 3);
console.log(`1.14. Į masyvo pradžią pridėti skaičius: 1, 2, 3. ${spliceArray11}`);
// 1.15. Į masyvo pabaigą pridėti skaičius: -333, -321, -312.
console.log(array);
let spliceArray12 = array.splice(-1, 0, -333, -321, -312);
console.log(`bad - 1.15. Į masyvo pabaigą pridėti skaičius: -333, -321, -312. ${spliceArray12}`);
// 1.16. Į masyvo vidurį pridėti skaičių 0.
console.log(array);
let spliceArray13 = array.splice(-1, 0, -333, -321, -312);
console.log(`bad - 1.16. Į masyvo vidurį pridėti skaičių 0. ${spliceArray13}`);
// 1.17. Pašalinti pirmą masyvo narį.
console.log(array);
let spliceArray14 = array.splice(0, 1);
console.log(`1.17. Pašalinti pirmą masyvo narį. ${spliceArray14}`);
// 1.18. Pašalinti paskutinį masyvo narį.
console.log(array);
let spliceArray15 = array.pop();
console.log(`1.17. Pašalinti paskutini masyvo narį. ${spliceArray15}`);
// 1.19. Į masyvo pradžią pridėti žodį "start".
console.log(array);
let spliceArray16 = array.splice(0, 0, "start");
console.log(`1.19. Į masyvo pradžią pridėti žodį "start". ${spliceArray16}`);
// 1.20. Į masyvo pabaigą pridėti žodį "end".
console.log(array);
let spliceArray17 = array.splice(-1, 0, "end");
console.log(`bad - 1.20. Į masyvo pabaigą pridėti žodį "end". ${spliceArray17}`);
console.log(array);
console.log(`Atlikus šias užduotis eilės tvarka masyvas turėtų atrodyti taip:
['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']
`);

console.log(`----------- 2 ----------`);
console.log(array);
// 2. Tęsiant darbą su šiuo masyvu atlikti šias užduotis naudojant slice metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina slice metodas, ir šį kintamąjį išvesti į konsolę:
// 2.1. Gauti pirmą masyvo narį.
let sliceArrai1 = array.slice(0, 1);
console.log(`2.1. Gauti pirmą masyvo narį. ${sliceArrai1}`);
// 2.2. Gauti paskutinį masyvo narį.
let sliceArrai2 = array.slice(-1);
console.log(`2.2. Gauti paskutinį masyvo narį. ${sliceArrai2}`);
// 2.3. Gauti antrą masyvo narį.
let sliceArrai3 = array.slice(1, 2);
console.log(`2.3. Gauti antrą masyvo narį. ${sliceArrai3}`);
// 2.4. Gauti priešpaskutinį masyvo narį.
let sliceArrai4 = array.slice(-2, -1);
console.log(`2.4. Gauti priešpaskutinį masyvo narį. ${sliceArrai4}`);
// 2.5. Gauti aštuntą masyvo narį.
let sliceArrai5 = array.slice(7, 8);
console.log(`2.5. Gauti aštuntą masyvo narį. ${sliceArrai5}`);
// 2.6. Gauti devintą masyvo narį skaičiuojant nuo galo.
let sliceArrai6 = array.slice(-9, -8);
console.log(`2.6. Gauti devintą masyvo narį skaičiuojant nuo galo. ${sliceArrai6}`);
// 2.7. Gauti vidurinį masyvo narį.
let sliceArrai7 = array.slice(-1);
console.log(`bad - 2.7. Gauti vidurinį masyvo narį. ${sliceArrai7}`);
// 2.8. Gauti pirmus tris masyvo narius.
let sliceArrai8 = array.slice(0, 3);
console.log(`2.8. Gauti pirmus tris masyvo narius. ${sliceArrai8}`);
// 2.9. Gauti paskutinius tris masyvo narius.
let sliceArrai9 = array.slice(-3);
console.log(`2.9. Gauti paskutinius tris masyvo narius. ${sliceArrai9}`);
// 2.10. Gauti pirmus 10 masyvo narius.
let sliceArrai10 = array.slice(0, 10);
console.log(`2.10. Gauti pirmus 10 masyvo narius. ${sliceArrai10}`);
// 2.11. Gauti paskutinius 10 masyvo narius.
let sliceArrai11 = array.slice(-10);
console.log(`2.11. Gauti paskutinius 10 masyvo narius. ${sliceArrai11}`);
// 2.12. Gauti nuo 3 iki 8 masyvo nario (iš viso 6 nariai).
let sliceArrai12 = array.slice(2, 8);
console.log(`2.12. Gauti nuo 3 iki 8 masyvo nario (iš viso 6 nariai). ${sliceArrai12}`);
// 2.13. Gauti nuo 5 iki 9 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 5 nariai).
let sliceArrai13 = array.slice(-10, -5);
console.log(`2.13. Gauti nuo 5 iki 9 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 5 nariai). ${sliceArrai13}`);
// 2.14. Gauti nuo 11 iki 19 masyvo nario (iš viso 9 nariai).
let sliceArrai14 = array.slice(10, 19);
console.log(`2.14. Gauti nuo 11 iki 19 masyvo nario (iš viso 9 nariai). ${sliceArrai14}`);
// 2.15. Gauti nuo 9 iki 17 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 9 nariai).
let sliceArrai15 = array.slice(-17, -8);
console.log(`2.15. Gauti nuo 9 iki 17 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 9 nariai). ${sliceArrai15}`);
// 2.16. Gauti visus masyvo narius išskyrus pirmą.
let sliceArrai16 = array.slice(1);
console.log(`2.16. Gauti visus masyvo narius išskyrus pirmą. ${sliceArrai16}`);
// 2.17. Gauti visus masyvo narius išskyrus paskutinį.
let sliceArrai17 = array.slice(0, -1);
console.log(`2.17. Gauti visus masyvo narius išskyrus paskutinį. ${sliceArrai17}`);
// 2.18. Gauti visus masyvo narius išskyrus pirmus 5.
let sliceArrai18 = array.slice(5);
console.log(`2.18. Gauti visus masyvo narius išskyrus pirmus 5. ${sliceArrai18}`);
// 2.19. Gauti visus masyvo narius išskyrus paskutinius 5.
let sliceArrai19 = array.slice(0, -5);
console.log(`2.19. Gauti visus masyvo narius išskyrus paskutinius 5. ${sliceArrai19}`);
// 2.20. Gauti visus masyvo narius iki vidurinio masyvo nario, vidurinio nario neįskaičiuojant (iš viso 13 narių).
let sliceArrai20 = array.slice(-1);
console.log(`bad - 2.20. Gauti visus masyvo narius iki vidurinio masyvo nario, vidurinio nario neįskaičiuojant (iš viso 13 narių). ${sliceArrai20}`);
// 2.21. Gauti visus masyvo narius nuo vidurinio masyvo nario, vidurinio nario neįskaičiuojant, iki pabaigos (iš viso 13 narių).
let sliceArrai21 = array.slice(-1);
console.log(`bad - 2.21. Gauti visus masyvo narius nuo vidurinio masyvo nario, vidurinio nario neįskaičiuojant, iki pabaigos (iš viso 13 narių). ${sliceArrai21}`);
// 2.22. Gauti visus narius išskyrus pirmą ir paskutinį.
let sliceArrai22 = array.slice(1, -1);
console.log(`2.22. Gauti visus narius išskyrus pirmą ir paskutinį. ${sliceArrai22}`);
// 2.23. Gauti visus narius išskyrus pirmus penkis ir paskutinius tris.
let sliceArrai23 = array.slice(5, -3);
console.log(`2.23. Gauti visus narius išskyrus pirmus penkis ir paskutinius tris. ${sliceArrai23}`);
// 2.24. Gauti visus narius išskyrus pirmą ir paskutinius 8.
let sliceArrai24 = array.slice(1, -8);
console.log(`2.24. Gauti visus narius išskyrus pirmą ir paskutinius 8. ${sliceArrai24}`);
// 2.25. Gauti visus narius išskyrus pirmus 7 ir paskutinį.
let sliceArrai25 = array.slice(7, -1);
console.log(`2.25. Gauti visus narius išskyrus pirmus 7 ir paskutinį. ${sliceArrai25}`);
// 2.26. Gauti visus narius išskyrus pirmus 9 ir paskutinius 12.
let sliceArrai26 = array.slice(9, -12);
console.log(`2.26. Gauti visus narius išskyrus pirmus 9 ir paskutinius 12. ${sliceArrai26}`);
// 2.27. Gauti 9 narius skaičiuojant nuo 11.
let sliceArrai27 = array.slice(10, 19);
console.log(`2.27. Gauti 9 narius skaičiuojant nuo 11. ${sliceArrai27}`);
// 2.28. Gauti 12 narių skaičiuojant nuo 8.
let sliceArrai28 = array.slice(8, 20);
console.log(`2.28. Gauti 12 narių skaičiuojant nuo 8. ${sliceArrai28}`);
// 2.29. Gauti pirmus penkis ir paskutinius šešis masyvo narius. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.
let sliceArrai29 = array.slice(0, 5);
let sliceArrai30 = array.slice(-6);
console.log(`bad - 2.29. Gauti pirmus penkis ir paskutinius šešis masyvo narius. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose. ${sliceArrai29} ${sliceArrai30}`);
let newArray1 = [sliceArrai29 + sliceArrai30];
console.log(`bad - naujas masyvas ${newArray1}`);
// 2.30. Gauti masyvo narius nuo 3 iki 5 ir nuo 15 iki 17. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.
let sliceArrai31 = array.slice(2, 5);
let sliceArrai32 = array.slice(14, 17);
console.log(`bad - 2.30. Gauti masyvo narius nuo 3 iki 5 ir nuo 15 iki 17. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose. ${sliceArrai31} ${sliceArrai32}`);
let newArray2 = [sliceArrai31 + sliceArrai32];
console.log(`bad - naujas masyvas ${newArray2}`);

console.log(`----------- 3 ----------`);
console.log(array);

// 3. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant filter metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina filter metodas, ir šį kintamąjį išvesti į konsolę:
// 3.1. Gauti tik teigiamus skaičius.
let filteredArray1 = array.filter(num => num < 0);
console.log(`3.1. Gauti tik teigiamus skaičius. ${filteredArray1}`);
// 3.2. Gauti tik neigiamus skaičius.
let filteredArray2 = array.filter(num => num > 0);
console.log(`3.2. Gauti tik neigiamus skaičius. ${filteredArray2}`);
// 3.3. Gauti tik skaičius, kurie dalinasi iš 2.
let filteredArray3 = array.filter(num => num % 2 == 0);
console.log(`3.3. Gauti tik skaičius, kurie dalinasi iš 2. ${filteredArray3}`);
// 3.4. Gauti tik skaičius, kurie dalinasi iš 3.
let filteredArray4 = array.filter(num => num % 3 == 0);
console.log(`3.3. Gauti tik skaičius, kurie dalinasi iš 3. ${filteredArray4}`);
// 3.5. Gauti tik skaičius, kurie dalinasi iš 5.
let filteredArray5 = array.filter(num => num % 5 == 0);
console.log(`3.3. Gauti tik skaičius, kurie dalinasi iš 5. ${filteredArray5}`);
// 3.6. Gauti tik skaičius, kurie dalinasi iš 11.
let filteredArray6 = array.filter(num => num % 11 == 0);
console.log(`3.3. Gauti tik skaičius, kurie dalinasi iš 11. ${filteredArray6}`);
// 3.7. Gauti tik skaičius, kurie dalinasi iš 31.
let filteredArray7 = array.filter(num => num % 31 == 0);
console.log(`3.3. Gauti tik skaičius, kurie dalinasi iš 31. ${filteredArray7}`);
// 3.8. Gauti tik skaičius, kurie dalinasi iš 2 ir iš 3.
let filteredArray8 = array.filter(num => num % 2 == 0 && num % 3 == 0);
console.log(`3.8. Gauti tik skaičius, kurie dalinasi iš 2 ir iš 3. ${filteredArray8}`);
// 3.9. Gauti tik skaičius, kurie dalinasi iš 3 ir iš 7.
let filteredArray9 = array.filter(num => num % 3 == 0 && num % 7 == 0);
console.log(`3.9. Gauti tik skaičius, kurie dalinasi iš 3 ir iš 7. ${filteredArray9}`);
// 3.10. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 9.
let filteredArray10 = array.filter(num => num % 5 == 0 && num % 9 == 0);
console.log(`3.10. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 9. ${filteredArray10}`);
// 3.11. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 11.
let filteredArra11 = array.filter(num => num % 5 == 0 && num % 11 == 0);
console.log(`3.11. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 11. ${filteredArra11}`);
// 3.12. Gauti tik skaičius, kurie dalinasi iš 2, 8 ir 12.
let filteredArra12 = array.filter(num => num % 2 == 0 && num % 8 == 0 && num % 12 == 0);
console.log(`3.12. Gauti tik skaičius, kurie dalinasi iš 2, 8 ir 12. ${filteredArra12}`);
// 3.13. Gauti tik skaičius, kurie dalinasi iš 2 arba iš 3.
let filteredArra13 = array.filter(num => num % 2 == 0 || num % 3 == 0);
console.log(`3.13. Gauti tik skaičius, kurie dalinasi iš 2 arba iš 3. ${filteredArra13}`);
// 3.14. Gauti tik skaičius, kurie dalinasi iš 3 arba iš 5.
let filteredArra14 = array.filter(num => num % 3 == 0 || num % 5 == 0);
console.log(`3.14. Gauti tik skaičius, kurie dalinasi iš 3 arba iš 5. ${filteredArra14}`);
// 3.15. Gauti tik skaičius, kurie dalinasi iš 5 arba iš 6.
let filteredArra15 = array.filter(num => num % 5 == 0 || num % 6 == 0);
console.log(`3.15. Gauti tik skaičius, kurie dalinasi iš 5 arba iš 6. ${filteredArra15}`);
// 3.16. Gauti tik skaičius, kurie dalinasi iš 7 arba iš 8.
let filteredArra16 = array.filter(num => num % 7 == 0 || num % 8 == 0);
console.log(`3.16. Gauti tik skaičius, kurie dalinasi iš 7 arba iš 8. ${filteredArra16}`);
// 3.17. Gauti tik skaičius, kurie dalinasi iš 9 arba iš 13.
let filteredArra17 = array.filter(num => num % 9 == 0 || num % 13 == 0);
console.log(`3.17. Gauti tik skaičius, kurie dalinasi iš 9 arba iš 13. ${filteredArra17}`);
// 3.18. Gauti tik skaičius, kurie dalinasi iš 2, 3 arba iš 5.
let filteredArra18 = array.filter(num => num % 2 == 0 && num % 3 == 0 || num % 5 == 0);
console.log(`3.18. Gauti tik skaičius, kurie dalinasi iš 2, 3 arba iš 5. ${filteredArra18}`);
// 3.19. Gauti tik skaičius, kurie dalinasi iš 5, 7 arba iš 9.
let filteredArra19 = array.filter(num => num % 5 == 0 && num % 7 == 0 || num % 9 == 0);
console.log(`3.19. Gauti tik skaičius, kurie dalinasi iš 5, 7 arba iš 9. ${filteredArra19}`);
// 3.20. Gauti tik skaičius, kurie dalinasi iš 7, 8 arba iš 11.
let filteredArra20 = array.filter(num => num % 7 == 0 && num % 8 == 0 || num % 11 == 0);
console.log(`3.20. Gauti tik skaičius, kurie dalinasi iš 7, 8 arba iš 11. ${filteredArra20}`);
// 3.21. Gauti tik skaičius, kurie dalinasi iš 9, 12 arba iš 13.
let filteredArra21 = array.filter(num => num % 9 == 0 && num % 12 == 0 || num % 13 == 0);
console.log(`3.21. Gauti tik skaičius, kurie dalinasi iš 9, 12 arba iš 13. ${filteredArra21}`);
// 3.22. Gauti tik skaičius, kurie yra didesni už 100.
let filteredArra22 = array.filter(num => num > 100);
console.log(`3.22. Gauti tik skaičius, kurie yra didesni už 100. ${filteredArra22}`);
// 3.23. Gauti tik skaičius, kurie yra didesni už 555.
let filteredArra23 = array.filter(num => num >= 555);
console.log(`3.23. Gauti tik skaičius, kurie yra didesni už 555. ${filteredArra23}`);
// 3.24. Gauti tik skaičius, kurie yra didesni arba lygūs 888.
let filteredArra24 = array.filter(num => num >= 888);
console.log(`3.24. Gauti tik skaičius, kurie yra didesni arba lygūs 888. ${filteredArra24}`);
// 3.25. Gauti tik skaičius, kurie yra didesni arba lygūs 6789.
let filteredArra25 = array.filter(num => num >= 6789);
console.log(`3.25. Gauti tik skaičius, kurie yra didesni arba lygūs 6789. ${filteredArra25}`);
// 3.26. Gauti tik skaičius, kurie yra mažesni už 50.
let filteredArra26 = array.filter(num => num < 50);
console.log(`3.26. Gauti tik skaičius, kurie yra mažesni už 50. ${filteredArra26}`);
// 3.27. Gauti tik skaičius, kurie yra mažesni už 1000.
let filteredArra27 = array.filter(num => num < 1000);
console.log(`3.27. Gauti tik skaičius, kurie yra mažesni už 1000. ${filteredArra27}`);
// 3.28. Gauti tik skaičius, kurie yra mažesni arba lygūs -1.
let filteredArra28 = array.filter(num => num <= -1);
console.log(`3.28. Gauti tik skaičius, kurie yra mažesni arba lygūs -1. ${filteredArra28}`);
// 3.29. Gauti tik skaičius, kurie yra mažesni arba lygūs -5564.
let filteredArra29 = array.filter(num => num <= -5564);
console.log(`3.29. Gauti tik skaičius, kurie yra mažesni arba lygūs -5564. ${filteredArra29}`);
// 3.30. Gauti tik skaičius, kurie yra mažesni už 1000 ir didesni už 500.
let filteredArra30 = array.filter(num => num < 1000 && num > 500);
console.log(`3.30. Gauti tik skaičius, kurie yra mažesni už 1000 ir didesni už 500. ${filteredArra30}`);
// 3.31. Gauti tik skaičius, kurie yra mažesni už 100 ir didesni už 0.
let filteredArra31 = array.filter(num => num < 100 && num > 0);
console.log(`3.31. Gauti tik skaičius, kurie yra mažesni už 100 ir didesni už 0. ${filteredArra31}`);
// 3.32. Gauti tik skaičius, kurie yra mažesni už 0 ir didesni už -50.

// 3.33. Gauti tik skaičius, kurie yra mažesni arba lygūs 0 ir didesni už -100.
// 3.34. Gauti tik skaičius, kurie yra didesni arba lygūs 0 ir mažesni už 55.
// 3.35. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir mažesni arba lygūs 654.
// 3.36. Gauti tik teigiamus skaičius, kurie dalinasi iš 2.
// 3.37. Gauti tik teigiamus skaičius, kurie dalinasi iš 3.
// 3.38. Gauti tik neigiamus skaičius, kurie dalinasi iš 4.
// 3.39. Gauti tik neigiamus skaičius, kurie dalinasi iš 111.
// 3.40. Gauti tik skaičius, kurie yra didesni už 500 ir kurie dalinasi iš 2.
// 3.41. Gauti tik skaičius, kurie yra didesni už 1000 ir kurie dalinasi iš 3.
// 3.42. Gauti tik skaičius, kurie yra mažesni už 1000 ir kurie dalinasi iš 9.
// 3.43. Gauti tik skaičius, kurie yra mažesni už 500 ir kurie dalinasi iš 2.
// 3.44. Gauti tik skaičius, kurie yra didesni arba lygūs 33 ir kurie dalinasi iš 3.
// 3.45. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir kurie dalinasi iš 12.
// 3.46. Gauti tik skaičius, kurie yra mažesni arba lygūs 155 ir kurie dalinasi iš 5.
// 3.47. Gauti tik skaičius, kurie yra mažesni arba lygūs -333 ir kurie dalinasi iš 9.
// 3.48. Gauti tik skaičius, kurie yra didesni už 100, mažesni už 500 ir kurie dalinasi iš 5.
// 3.49. Gauti tik skaičius, kurie yra didesni arba lygūs 888, mažesni už 1000 ir kurie dalinasi iš 2.
// 3.50. Gauti tik skaičius, kurie yra mažesni arba lygūs 888, didesni arba lygūs -333, dalinasi iš 3 ir nėra nulis.
// 3.51. Gauti tik skaičius.
// 3.52. Gauti tik tekstus (string).
// 3.53. Gauti tik tekstus (string), kurie turi daugiau nei 5 simbolius.
// 3.54. Gauti tik tekstus (string), kurie turi mažiau arba lygiai 5 simbolius.
// 3.55. Gauti tik tekstus (string), kurie turi mažiau arba lygiai 5 simbolius.
// 3.56. Gauti tik tekstus (string), kurie turi raidę t.
// 3.57. Gauti tik tekstus (string), kurie turi raidę y.
// 3.58. Gauti tik tekstus (string), kurie turi raides e arba a.
// 3.59. Gauti tik tekstus (string), kurie turi raides t ir i.
// 3.60. Gauti tik tekstus (string), kurie turi raide t, bet neturi raidės k.
// 3.61. Gauti tik tekstus (string), kurie turi raide a, bet neturi raidės s.
// 3.62. Gauti tik tekstus (string), kurie turi daugiau nei vieną raidę t.
// 3.63. Gauti tik tekstus (string), kurie turi raidžių junginį st.
// 3.64. Gauti tik tekstus (string), kurie turi raidžių junginį nd.
// 3.65. Gauti tik tekstus (string), kurie neturi raidės s.
// 3.66. Gauti tik tekstus (string), kurie neturi raidės t.
// 3.67. Gauti tik tekstus (string), kurie neturi raidės r ir l.
// 3.68. Gauti tik tekstus (string), kurie prasideda skaičiumi.
// 3.69. Gauti tik tekstus (string), kurie prasideda raide s.
// 3.70. Gauti tik tekstus (string), kurie prasideda raide o.
// 3.70. Gauti tik tekstus (string), kurie baigiasi raide d.
// 3.71. Gauti tik tekstus (string), kurie baigiasi raide s.
// 3.72. Gauti tik tekstus (string), kurie turi daugiau nei 4 simbolius ir turi raidę o.
// 3.73. Gauti tik tekstus (string), kurie turi daugiau arba lygiai 5 simbolius ir turi raidę a.
// 3.74. Gauti tik tekstus (string), kurie turi daugiau arba lygiai 5 simbolius ir turi raidę a.
// 3.75. Gauti tik tekstus (string), kurie turi porinį simbolių skaičių.
// 3.76. Gauti tik tekstus (string), kurie turi neporinį simbolių skaičių ir turi raidę s.
// 3.77. Gauti tik tekstus (string), kurių trečias simbolis yra a.
// 3.78. Gauti tik tekstus (string), kurių ketvirtas simbolis yra l.
// 3.79. Gauti tik tekstus (string), kurių penktas simbolis nėra t ir kurie turi daugiau simbolių nei 4.
// 3.80. Gauti tik tekstus (string), kurių pirmas simbolis nėra e, kurie turi mažiau simbolių nei 6 ir kurie neprasideda skaičiumi.
