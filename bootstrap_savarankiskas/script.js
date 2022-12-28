const myAlert = document.getElementById('btn-alert');
let alertText = 'Hello World!';
myAlert.addEventListener('click', () => { alert(`${alertText}`) });

let inputText = document.getElementById('input-text');
document.getElementById('btn-to-upper-case').addEventListener('click', () => {
    return inputText.value = inputText.value.toUpperCase();
})
document.getElementById('btn-to-lower-case').addEventListener('click', () => {
    return inputText.value = inputText.value.toLowerCase();
})
document.getElementById('btn-first-upper-case').addEventListener('click', () => {
    return inputText.value = inputText.value.charAt(0).toUpperCase() + inputText.value.slice(1);
})
document.getElementById('btn-first-lower-case').addEventListener('click', () => {
    return inputText.value = inputText.value.charAt(0).toLowerCase() + inputText.value.slice(1);
})

document.getElementById('btn-validation').addEventListener('click', () => {
    let email = document.querySelector('#validationEmail');
    let phone = document.querySelector('#validationPhone');
    return emailPhoneValidation(email, phone);
})
function emailValidation(email) {
    const emailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.value || !email.value.toLowerCase().match(emailFormat)) {
        return false
    }
    return true
}
function phoneValidation(phone) {
    const phoneFormat = /^[0-9]+$/;
    if (!phone.value || phone.value.length < 9 || !phone.value.match(phoneFormat)) {
        return false
    } else {
        return true
    }
}

function emailPhoneValidation(email, phone) {
    if (!emailValidation(email) && !phoneValidation(phone)) {
        return document.querySelectorAll('.validation').forEach(element => { element.classList.add("is-invalid") });
    } else if (!emailValidation(email) && !!phoneValidation(phone)) {
        return email.classList.add("is-invalid");
    } else if (!!emailValidation(email) && !phoneValidation(phone)) {
        return phone.classList.add("is-invalid");
    } else {
        return document.querySelectorAll('.validation').forEach(element => { element.classList.remove("is-invalid") });
    }
}

let inputToBlock = document.getElementById("input-block");
const blockInputButton = document.getElementById("btn-block");
const unblockInputButton = document.getElementById("btn-unblock");
blockInputButton.addEventListener("click", () => {
    inputToBlock.disabled = true;
});
unblockInputButton.addEventListener("click", () => {
    inputToBlock.disabled = false;
})

let image = document.getElementById("imgToChange");
image.addEventListener('mouseover', function () {
    image.src = "/images/0DElr0H.jpg"
})
image.addEventListener('mouseout', function () {
    image.src = "/images/PLDVxza.jpg"
})

let myFigure = document.getElementById("my-figure");
let borderList = document.getElementById("border-list");
[...borderList.children].forEach(element => {
    element.firstChild.addEventListener("click", () => {
        changeBorder(element.firstChild.value, myFigure);
    })
});
let colorsList = document.getElementById("colors-list");
[...colorsList.children].forEach(element => {

    element.firstChild.addEventListener("click", () => {
        changeColor(element.firstChild.value, myFigure);
    })
});
let cursorsList = document.getElementById("cursors-list");
[...cursorsList.children].forEach(element => {
    element.firstChild.addEventListener("click", () => {
        changeCursor(element.firstChild.value);
    })
});
let resetAllButton = document.getElementById("reset-all-button");
resetAllButton.addEventListener("click", () => {
    resetAllFormatting(myFigure);
});
function changeCursor(cursor) {
    document.querySelector("body").style.cursor = cursor;
}
function resetAllFormatting(element) {
    element.style.border = "";
    element.style.color = "black";
    document.querySelector("body").style.cursor = "auto";
}
function changeBorder(color, element) {
    element.style.border = "1px solid " + color;
}
function changeColor(color, element) {
    element.style.color = color;
}

