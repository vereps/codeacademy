// EXTERNAL API
const JSONPLACEHOLDER_URI = 'https://jsonplaceholder.typicode.com/posts';

// *** Variables ***
//-- buttons
const btnGetTextFile = document.getElementById('btn1');
const btnGetUser = document.getElementById('btn2');
const btnGetUsers = document.getElementById('btn3');
const btnGetPosts = document.getElementById('btn4');
const btnSendPost = document.getElementById('btn5');
//-- output
const textOutput = document.querySelector('#text');
const userOutput = document.querySelector('#user');
const usersOutput = document.querySelector('#users');
const postsOutput = document.querySelector('#posts');

// *** Functions ***
//OLD Version AJAX (XMLHttpRequest())
//-- Load Text File Information
function loadTextFileXHR() {
  return;
}

//-- Load User Information
function loadUserXHR() {
  return;
}

//-- Load Users information
function loadUsersXHR() {
  return;
}

//-- Load Users information
function loadPostsXHR() {
  return;
}

//NEW VERSION AJAX (fetch())
// -- Getting data
function loadPostsFETCH() {
  return;
}

// -- Sending data
function sendPostFETCH() {
  return;
}
// *** Events ***
btnGetTextFile.addEventListener('click', loadTextFileXHR);
btnGetUser.addEventListener('click', loadUserXHR);
btnGetUsers.addEventListener('click', loadUsersXHR);
btnGetPosts.addEventListener('click', loadPostsXHR);
btnGetPosts.addEventListener('click', loadPostsFETCH);
btnSendPost.addEventListener('click', sendPostFETCH);

/*
    readyState Values:
    0: request not initialized
    1: server connection established
    2: request received
    3: processing request
    4: request finished and response is ready
    More: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

    HTTP Statuses
    200: "OK"
    403: "Forbidden"
    404: "Not Found"
    More: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
*/

// let arr = []+1+2;
// console.log(arr);

// let a = 1;
// let b = { toString() {return '1'} };
// let c = 1;
// console.log(a + b + c);

// let arr = [];
// arr[1] = 1;
// arr[3] = 33;
// console.log(arr);

// let a = [ "a", "b" ]
// console.log(a);

// for (let i=0; i<10; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 1000);
// }

// let obj = {
//   '0': 1,
//   0: 2
// };
// console.log(obj['0'] + obj[0]);

// function User() {}
// User.prototype = {admin: false};
// let user = new User();
// User.prototype = {admin: true};
// console.log(user.admin);

// let f = function g() {
//   return 23;
// };
// console.log(typeof g());

// let x = 5;
// console.log(x++);

// console.log(20e-1['toString'](2));