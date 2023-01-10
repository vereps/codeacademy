<?php
// Sukurkite "a", "b", "c" masyvą. Išveskite masyvo reikšmę naudodami funkciją var_dump().
define('NEW_LINE', "<br>\n");
$arr = ['a', 'b', 'c'];
var_dump($arr);
// Naudodamiesi $arr masyvu iš ankstesnės užduoties, išveskite pirmo, antro ir trečio elementų turinį.
echo NEW_LINE. "{$arr[1]} {$arr[2]}". NEW_LINE;
// echo "{$arr[1]}". NEW_LINE;
// echo "{$arr[2]}". NEW_LINE;
// Sukurkite masyvą $arr = ['a', 'b', 'c', 'd'] ir panaudoja jį išveskite eilutė 'a + b, c + d'.
$arr1 = ['a', 'b', 'c', 'd'];
echo "{$arr1[0]} + {$arr1[1]}, {$arr1[2]} + {$arr1[3]}". NEW_LINE;
// Sukurkite $arr masyvą su elementais 2, 5, 3, 9. Padauginkite pirmąjį masyvo elementą iš antrojo, o trečiąjį elementą iš ketvirtojo. Sudėkite rezultatus ir priskirkite kintamajam $result. Išveskite šio kintamojo reikšmę.
$arr2 = [2, 5, 3, 9];
$result = ($arr2[0] * $arr2[1]) + ($arr2[2] * $arr2[3]);
echo "{$result}". NEW_LINE;
// Užpildykite $arr masyvą skaičiais nuo 1 iki 5. Nedeklaruokite masyvo elementų, o tiesiog užpildykite jį $arr[] = nauja reikšme.
$arr3 = [];
for ($i=1; $i <= 5; $i++) {
    $arr3[$i] = $i;
};
print_r($arr3);