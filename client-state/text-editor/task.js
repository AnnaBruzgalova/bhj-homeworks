'use strict';
const textAria = document.querySelector('#editor');
const clearButton = document.querySelector('#clearButton');
textAria.addEventListener('keyup', () => {
    addLocalstorage(textAria.value);
})

clearButton.addEventListener('click', clearLocalStorage);
checkLocalstorage();

function checkLocalstorage() {
    const data = localStorage.editor;
    if (data) {
        textAria.value = data
    } else {
        localStorage.editor = '';
    }
}

function addLocalstorage(value) {
    localStorage.editor = textAria.value;
}


function clearLocalStorage() {
    localStorage.editor = '';
    textAria.value = '';
}