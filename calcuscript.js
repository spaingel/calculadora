let array = [1,2]
let opt
let firstArray = []
let operateArray = []
let firstOperand
let latestOperation
let screenBox
let result

const sum = (accumulator, currentValue) => accumulator + currentValue;
const subtract = (accumulator, currentValue) => accumulator - currentValue;
const multiply = (accumulator, currentValue) => accumulator * currentValue;
const divide = (accumulator, currentValue) => accumulator / currentValue;

console.log(array.reduce(sum));
console.log(array.reduce(subtract));
console.log(array.reduce(multiply));
console.log(array.reduce(divide));

function addToScreen(opt) {
screenBox = document.querySelector('#screen')
let numeroScr = document.createElement('div');
numeroScr.classList.add("numScr")
numeroScr.textContent = opt;
screenBox.appendChild(numeroScr);
}

//Button Query Selectors

let uno = document.querySelector('#one');
uno.addEventListener('click', () => {
    if(firstArray.length < 18){
    addToScreen([1]);
    opt = 1;
    firstArray.push(opt)
    console.log(firstArray)}
    else {
        console.log("max array size")
    }
})
let dos = document.querySelector('#two');
dos.addEventListener('click', () => {
    if(firstArray.length < 18){
    addToScreen([2]);
    opt = 2;
    firstArray.push(opt)
    console.log(firstArray)}
    else {
        console.log("max array size")
    }
})
let tres = document.querySelector('#three');
tres.addEventListener('click', () => {
    if(firstArray.length < 18){
    addToScreen([3]);
    opt = 3;
    firstArray.push(opt)
    console.log(firstArray)}
    else {
        console.log("max array size")
    }
})
let cuatro = document.querySelector('#four');
cuatro.addEventListener('click', () => {
    if(firstArray.length < 18){
    addToScreen([4]);
    opt = 4;
    firstArray.push(opt)
    console.log(firstArray)}
    else {
        console.log("max array size")
    }
})
let cinco = document.querySelector('#five');
cinco.addEventListener('click', () => {
    if(firstArray.length < 18){
    addToScreen([5]);
    opt = 5;
    firstArray.push(opt)
    console.log(firstArray)}
    else {
        console.log("max array size")
    }
})
let seis = document.querySelector('#six');
seis.addEventListener('click', () => {
    if(firstArray.length < 18){
    addToScreen([6]);
    opt = 6;
    firstArray.push(opt)
    console.log(firstArray)}
    else {
        console.log("max array size")
    }
})
let siete = document.querySelector('#seven');
siete.addEventListener('click', () => {
    if(firstArray.length < 18){
    addToScreen([7]);
    opt = 7;
    firstArray.push(opt)
    console.log(firstArray)}
    else {
        console.log("max array size")
    }
})
let ocho = document.querySelector('#eight');
ocho.addEventListener('click', () => {
    if(firstArray.length < 18){
    addToScreen([8]);
    opt = 8;
    firstArray.push(opt)
    console.log(firstArray)}
    else {
        console.log("max array size")
    }
})
let nueve = document.querySelector('#nine');
nueve.addEventListener('click', () => {
    if(firstArray.length < 18){
    addToScreen([9]);
    opt = 9;
    firstArray.push(opt)
    console.log(firstArray)}
    else {
        console.log("max array size")
    }
})
let cero = document.querySelector('#zero');
cero.addEventListener('click', () => {
    if(firstArray.length < 18){
    addToScreen([0]);
    opt = 0;
    firstArray.push(opt)
    console.log(firstArray)}
    else {
        console.log("max array size")
    }
})

// Operator Query Selectors

let sumar = document.querySelector('#plus');
sumar.addEventListener('click', () => {
    firstOperand = firstArray.join("");
    latestOperation = "+"
    firstArray = []
    operateArray.push(firstOperand)
    for (let r = screenBox.childNodes.length - 1; r >= 0; r--) {
        screenBox.removeChild(screenBox.childNodes[r])
    };
    operateArray = operateArray.map(Number);
    addToScreen("+ ");
    if (operateArray.length > 1) {
       result = operateArray.reduce(sum);
    operateArray = [];
    operateArray.push(result);
}
    console.log(firstOperand)
    console.log(operateArray)
})

let operate = document.querySelector('#equal')
operate.addEventListener('click', () => {
    firstOperand = firstArray.join("");
    firstArray = []
    operateArray.push(firstOperand)
    operateArray = operateArray.map(Number);
    console.log(operateArray.reduce(sum));
})