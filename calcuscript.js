const array = [1,2];
let opt

const sum = (accumulator, currentValue) => accumulator + currentValue;
const subtract = (accumulator, currentValue) => accumulator - currentValue;
const multiply = (accumulator, currentValue) => accumulator * currentValue;
const divide = (accumulator, currentValue) => accumulator / currentValue;

console.log(array.reduce(sum));
console.log(array.reduce(subtract));
console.log(array.reduce(multiply));
console.log(array.reduce(divide));

function addToScreen(opt) {
let screenBox = document.querySelector('#screen')
let numeroScr = document.createElement('p');
numeroScr.textContent = opt
screenBox.appendChild(numeroScr);
}

let uno = document.querySelector('#one');
uno.addEventListener('click', () => {
    addToScreen([1]);
})