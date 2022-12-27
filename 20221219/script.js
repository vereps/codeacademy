console.log('veikia');
// Parašykite funkciją getPosts, kuri gražina Promise, kuriame yra išgaunami post'ai iš https://jsonplaceholder.typicode.com/posts panaudojant vieną iš galimų AJAX būdų: XMLHttpRequest, fetch, jQuery, axios. Užsibaigus Promise atvaizduokite gautus duomenys HTML lentelėje.

// function getPosts() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             document.getElementById("demo").innerHTML = this.responseText;
//         }
//     };
//     xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
//     xhttp.send();
// }
let url = 'https://jsonplaceholder.typicode.com/posts';
let url1= 'https://jsonplaceholder.typicode.com/users';

function getPostsViaFetch() {
    return fetch(url)
    .then(response => response.json())
    // .then((data) => {console.log(data);});
}
function getUsersViaFetch() {
    return fetch(url1)
    .then(response => response.json())
    // .then((data) => {console.log(data);});
}

const postsTbody = document.querySelector('#posts > tbody');

function createTdWithText(text) {
    const td = document.createElement('td');
    const textNode = document.createTextNode(text);
    
    td.appendChild(textNode);

    return td;
}

getPostsViaFetch().then(data => {
    for (let post of data) {
        const tr = document.createElement('tr');
        postsTbody.appendChild(tr);

        tr.appendChild(createTdWithText(post.id));
        tr.appendChild(createTdWithText(post.title));
        tr.appendChild(createTdWithText(post.body));
        tr.appendChild(createTdWithText(post.username));
        tr.appendChild(createTdWithText(post.userId));
    }
});

// Papildikite prieš tai darytą užduotį: panaudojant gautą userId parodykite vartotojo vardą šalia "post" informacijos.