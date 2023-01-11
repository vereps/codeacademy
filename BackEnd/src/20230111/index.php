<?php

// Sukurkite dvimatį masyvą. Pirmieji du raktai yra lt ir en.
// Raktai turi savaitės dienų vardų masyvus lietuviškai ir angliškai.
define('NEW_LINE', "<br>\n");
$weekDay = array (
    'lt' => array ('Pirmadinis', 'Antradienis', 'Trečiadinis', 'Ketvirtadienis','Penktadienis', 'Šeštadienis', 'Sekmadinis'),
    'en' => array ('Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday', 'Sunday'),
);
// Naudodamiesi šiuo masyvu, pirmadienį parodykite lietuvių kalba, o trečiadienį - anglų kalba.
echo "{$weekDay['lt'][0]} {$weekDay['en'][2]}". NEW_LINE;
// Sukurkite kintamuosius lang (reikšmės lt arba en) ir parodykite dieną

// $lang =  ['lt', 'en'];
$lang =  'lt';
// echo "{$lang[0]} {$lang[1]}". NEW_LINE;
// echo "{$lang}". NEW_LINE;
echo "{$weekDay[$lang][0]}". NEW_LINE;