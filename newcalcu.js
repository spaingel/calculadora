let a
let b
let op
let result
let visor = document.querySelector("#screen")
let operArray = [];
let converted
let interrIgual = false

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
};

//Junta os numeros no ecra e converte num int limpado o array
function convToNumber(){
    converted = operArray.join("");
    converted = Number(converted)
    operArray = []
};

function clearScreen(){
    for (let r = visor.childNodes.length - 1; r >= 0; r--) {
        visor.removeChild(visor.childNodes[r])
    };
};

function addToScreen(numeral) {
    let numVisor = document.createElement('div');
    numVisor.classList.add("numScr")
    numVisor.textContent = numeral;
    visor.appendChild(numVisor);
};

// NUMBER QUERY SELECTORS
let uno = document.querySelector('#one');
uno.addEventListener('click', () => {
    if (operArray.length < 17 && interrIgual == false) {
    addToScreen(1)
    operArray.push(1)}
});

let dos = document.querySelector('#two');
dos.addEventListener('click', () => {
    if (operArray.length < 17 && interrIgual == false) { 
    addToScreen(2)
    operArray.push(2)}
});
let tres = document.querySelector('#three');
tres.addEventListener('click', () => {
    if (operArray.length < 17 && interrIgual == false) { 
        addToScreen(3)
        operArray.push(3)}
});

let cuatro = document.querySelector('#four');
cuatro.addEventListener('click', () => {
    if (operArray.length < 17 && interrIgual == false) { 
        addToScreen(4)
        operArray.push(4)}
});

let cinco = document.querySelector('#five');
cinco.addEventListener('click', () => {
    if (operArray.length < 17 && interrIgual == false) { 
        addToScreen(5)
        operArray.push(5)}
});

let seis = document.querySelector('#six');
seis.addEventListener('click', () => {
    if (operArray.length < 17 && interrIgual == false) { 
        addToScreen(6)
        operArray.push(6)}
});

let siete = document.querySelector('#seven');
siete.addEventListener('click', () => {
    if (operArray.length < 17 && interrIgual == false) { 
        addToScreen(7)
        operArray.push(7)}
});

let ocho = document.querySelector('#eight');
ocho.addEventListener('click', () => {
    if (operArray.length < 17 && interrIgual == false) { 
        addToScreen(8)
        operArray.push(8)}
});

let nueve = document.querySelector('#nine');
nueve.addEventListener('click', () => {
    if (operArray.length < 17 && interrIgual == false) { 
        addToScreen(9)
        operArray.push(9)}
});

let cero = document.querySelector('#zero');
cero.addEventListener('click', () => {
    if (operArray.length < 17 && interrIgual == false) { 
        addToScreen(0)
        operArray.push(0)}
});

// OPERATOR QUERY SELECTORS

let sumar = document.querySelector('#plus');
sumar.addEventListener('click', () => {
    interrIgual = false; op = "+";
    convToNumber(); clearScreen();
    if (typeof a == 'undefined') { a = converted }
    else {
        b = converted
        operate(op);
        a = result};
    addToScreen(" +")
});

let restar = document.querySelector('#minus');
restar.addEventListener('click', () => {
    interrIgual = false; op = "-";
    convToNumber(); clearScreen();
    if (typeof a == 'undefined') { a = converted }
    else {
        b = converted;
        operate(op);
        a = result;};
    addToScreen(" -")   
});

let multiplicar = document.querySelector('#multiply');
multiplicar.addEventListener('click', () => {
    interrIgual = false; op = "*";
    convToNumber(); clearScreen();
    if (typeof a == 'undefined') { a = converted }
    else {
        b = converted;
        operate(op);
        a = result;};
    addToScreen(" x")   
});

let dividir = document.querySelector('#divide');
dividir.addEventListener('click', () => {
    interrIgual = false; op = "/";
    convToNumber(); clearScreen();
    if (typeof a == 'undefined') { a = converted }
    else {
        b = converted;
        operate(op);
        a = result;};
    addToScreen(" /"); 
});

let igual = document.querySelector('#equal');
igual.addEventListener('click', () => {
    convToNumber(); clearScreen();
    b = converted;
    operate(op);
    addToScreen(result)
    a = result;
    op = 'undefined'
    interrIgual = true
});

let limpiar = document.querySelector('#clear');
limpiar.addEventListener('click', () => {
    clearScreen();
    a = 0
    b = 0
    op = 'undefined'
    result = 0
    operArray = [];
    converted = 0
    interrIgual = false
});

let volver = document.querySelector('#return');
volver.addEventListener('click', ()=> {
    let cleanLast = document.querySelector("#screen")
    cleanLast.removeChild(cleanLast.lastChild)
});