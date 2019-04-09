let a
let b
let op
let result
let visor = document.querySelector("#screen")
let operArray = [];

function operate(op) {
    switch (op) {
        case "+":
        result = a+b;
        break;
        case "-":
        result = a-b;
        break;
        case "*":
        result = a*b;
        break;
        case "/":
        result = a/b;
        break;
    }
    console.log(result);
}

function addToScreen(numeral) {
    let numVisor = document.createElement('div');
    numVisor.classList.add("numScr")
    numVisor.textContent = numeral;
    visor.appendChild(numVisor);
}

// NUMBER QUERY SELECTORS
let uno = document.querySelector('#one');
uno.addEventListener('click', () => {
    if (operArray.length < 18) { 
    addToScreen(1)
    operArray.push(1)}
});

let dos = document.querySelector('#two');
dos.addEventListener('click', () => {
    if (operArray.length < 18) { 
    addToScreen(2)
    operArray.push(2)}
});
let tres = document.querySelector('#three');
tres.addEventListener('click', () => {
    if (operArray.length < 18) { 
        addToScreen(3)
        operArray.push(3)}
});

let cuatro = document.querySelector('#four');
cuatro.addEventListener('click', () => {
    if (operArray.length < 18) { 
        addToScreen(4)
        operArray.push(4)}
});

let cinco = document.querySelector('#five');
cinco.addEventListener('click', () => {
    if (operArray.length < 18) { 
        addToScreen(5)
        operArray.push(5)}
});

let seis = document.querySelector('#six');
seis.addEventListener('click', () => {
    if (operArray.length < 18) { 
        addToScreen(6)
        operArray.push(6)}
});

let siete = document.querySelector('#seven');
siete.addEventListener('click', () => {
    if (operArray.length < 18) { 
        addToScreen(7)
        operArray.push(7)}
});

let ocho = document.querySelector('#eight');
ocho.addEventListener('click', () => {
    if (operArray.length < 18) { 
        addToScreen(8)
        operArray.push(8)}
});

let nueve = document.querySelector('#nine');
nueve.addEventListener('click', () => {
    if (operArray.length < 18) { 
        addToScreen(9)
        operArray.push(9)}
});

let cero = document.querySelector('#zero');
cero.addEventListener('click', () => {
    if (operArray.length < 18) { 
        addToScreen(0)
        operArray.push(0)}
});
