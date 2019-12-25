let num1;
let num2;

let result = document.querySelector('.result');

const buttons = document.querySelectorAll('.number');
buttons.forEach(function(item) {
    item.addEventListener('click', function () {
        result.innerText += this.innerText;
      });
});

const clear = document.querySelector('.clear');
clear.addEventListener('click', function () {
    result.innerText = '';
    num1 = null;
    num2 = null;
});

const add = document.querySelector('.add');
add.addEventListener('click', function () {
    if (isNaN(num1)) {
        num1 = parseInt(result.innerText, 10);
    } else {
        num1 += parseInt(result.innerText, 10);
        console.log('Add else: ' + num1);
    }
    result.innerText = '';
});

const equals = document.querySelector('.equals');
equals.addEventListener('click', function () {
    num2 = parseInt(result.innerText, 10);
    result.innerText = '';
    result.innerText = num1 + num2;
    num1 = parseInt(result.innerText, 10);
    num2 = null;
    console.log('Equals: ' + num1);
});