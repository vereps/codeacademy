// Sukurkite HTML dokumentą, kuris <body> dalyje turės tris žymas, t.y. <header>, <main>, <footer>. 
// let body = document.querySelector('body');

// let divHeader = document.createElement('div');
// divHeader.setAttribute("id", "header");
// body.appendChild(divHeader);

// let divMain = document.createElement('div');
// divMain.setAttribute("id", "main");
// body.appendChild(divMain);

// let divFooter = document.createElement('div');
// divFooter.setAttribute("id", "footer");
// body.appendChild(divFooter);

// <header> dalyje bus navigacijos meniu su 5 nuorodomis, kuris bus “Responsive” (mobilioje versjoje turi būti “toggler” mygtukas, kurį paspaudus atsiranda meniu).
function myFunction() {
    var x = document.getElementById("header");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
// let ulHeader = document.createElement('ul');
// divHeader.appendChild(ulHeader);
// let lilHeader1 = document.createElement('li');
// ulHeader.appendChild(lilHeader1);
// link1 = document.createElement('a');
// link1.setAttribute('class', 'link');
// link1.setAttribute('href', '#');
// link1.textContent = "meniu 1";
// lilHeader1.appendChild(link1);
// let lilHeader2 = document.createElement('li');
// ulHeader.appendChild(lilHeader2);
// link2 = document.createElement('a');
// link2.setAttribute('class', 'link');
// link2.setAttribute('href', '#');
// link2.textContent = "meniu 2";
// lilHeader2.appendChild(link2);
// let lilHeader3 = document.createElement('li');
// ulHeader.appendChild(lilHeader3);
// link3 = document.createElement('a');
// link3.setAttribute('class', 'link');
// link3.setAttribute('href', '#');
// link3.textContent = "meniu 3";
// lilHeader3.appendChild(link3);
// let lilHeader4 = document.createElement('li');
// ulHeader.appendChild(lilHeader4);
// link4 = document.createElement('a');
// link4.setAttribute('class', 'link');
// link4.setAttribute('href', '#');
// link4.textContent = "meniu 4";
// lilHeader4.appendChild(link4);
// let lilHeader5 = document.createElement('li');
// ulHeader.appendChild(lilHeader5);
// link5 = document.createElement('a');
// link5.setAttribute('class', 'link');
// link5.setAttribute('href', '#');
// link5.textContent = "meniu 5";
// lilHeader5.appendChild(link5);
// <main> dalyje bus trys <section>:

// Pirmas <section> turės pilno pločio ir aukčio “slider” foną, kuriame bus trys paveikslėliai, kurie keisis kas 2 sekundės;

// Antras <section> turės pilno pločio ir ne mažesnę nei 300px aukščio laikrodį (laikas rodomas kaip tekstas), kuriame bus matomos dabartinės valandos, minutės ir sekundės (atsinaujins realiu laiku); 

// Trečias <section> turės kontaktų formą, kurią užpildžius, po ja pasirodys žinutė, kurioje nurodoma, kad forma užpildyta sėkmingai.
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
