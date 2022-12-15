console.log('---------task1------------');
// Turite HTML dokumentą, kuriame yra pateiktas vienas div su id=”main”.

// UŽDUOTIS: Sukurti jam (jo vidui) tokį markup naudojant JavaScipt:
let div = document.querySelector('#main');
// <h2> tag’as su tekstu;
let h2 = document.createElement('h2');
h2.textContent = "h2 tag’as su tekstu";
div.appendChild(h2);
// <p> tag’as su tekstu;
let p = document.createElement('p');
p.textContent = "p tag’as su tekstu";
div.appendChild(p);
// <ul> tag’as, kurio viduje yra vienas <li>;

let ul = document.createElement('ul');
document.body.appendChild(div);
div.appendChild(ul);
let li = document.createElement('li');
ul.appendChild(li);
li.textContent = "li tag’as su tekstu";
// <p> tag’as su tekstu.

console.log('-------------task2---------------');
// Sukurkite HTML dokumentą, kuris <body> dalyje turės tris žymas, t.y. <header>, <main>, <footer>. 

// <header> dalyje bus navigacijos meniu su 5 nuorodomis, kuris bus “Responsive” (mobilioje versjoje turi būti “toggler” mygtukas, kurį paspaudus atsiranda meniu).

// <main> dalyje bus trys <section>:

// Pirmas <section> turės pilno pločio ir aukčio “slider” foną, kuriame bus trys paveikslėliai, kurie keisis kas 2 sekundės;

// Antras <section> turės pilno pločio ir ne mažesnę nei 300px aukščio laikrodį (laikas rodomas kaip tekstas), kuriame bus matomos dabartinės valandos, minutės ir sekundės (atsinaujins realiu laiku); 
// Trečias <section> turės kontaktų formą, kurią užpildžius, po ja pasirodys žinutė, kurioje nurodoma, kad forma užpildyta sėkmingai.