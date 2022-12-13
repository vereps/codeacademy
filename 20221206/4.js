console.log('---------task1------------');
// Turite HTML dokumentą, kuriame yra pateiktas vienas div su id=”main”.

// UŽDUOTIS: Sukurti jam (jo vidui) tokį markup naudojant JavaScipt:
let div = document.querySelector('#main');
// <h2> tag’as su tekstu;
let h2 = document.createElement('h2');
h2.innerHTML = "h2 tag’as su tekstu";
div.appendChild(h2) + "\n";
console.log(h2);
// <p> tag’as su tekstu;
let p = document.createElement('p');
p.innerHTML = "p tag’as su tekstu";
div.appendChild(p) + "\n";
console.log(p);
// <ul> tag’as, kurio viduje yra vienas <li>;

var test = document.createElement('section');
test.setAttribute('id', 'test');
var ul = document.createElement('ul');
document.body.appendChild(test);
test.appendChild(ul);
var li = document.createElement('li');
ul.appendChild(li);
li.innerHTML = "li tag’as su tekstu";
console.log(li);
// <p> tag’as su tekstu.
