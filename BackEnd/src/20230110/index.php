<?php
// Naudojant PHP išveskite į naršyklę: "My name is {vardas}. My age is {amžius}"
// $name = 'Remigijus';
// $age = 43;
// echo "My name is {$name}. My age is {$age}";

// Panaudojus "Execution operator" parodykite opėracinės sistemos informaciją, kurioje veikia PHP
// echo PHP_OS;

// $output = PHP_OS;
// echo "<pre>{$output}</pre>";
// echo PHP_OS;
// https://www.cyberciti.biz/faq/how-to-check-os-version-in-linux-command-line/
$os = `cat /etc/os-release`;
echo "{$os}";

