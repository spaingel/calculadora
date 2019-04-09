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
    if (operArray.length < 18 && interrIgual == false) { 
    addToScreen(1)
    operArray.push(1)}
});

let dos = document.querySelector('#two');
dos.addEventListener('click', () => {
    if (operArray.length < 18 && interrIgual == false) { 
    addToScreen(2)
    operArray.push(2)}
});
let tres = document.querySelector('#three');
tres.addEventListener('click', () => {
    if (operArray.length < 18 && interrIgual == false) { 
        addToScreen(3)
        operArray.push(3)}
});

let cuatro = document.querySelector('#four');
cuatro.addEventListener('click', () => {
    if (operArray.length < 18 && interrIgual == false) { 
        addToScreen(4)
        operArray.push(4)}
});

let cinco = document.querySelector('#five');
cinco.addEventListener('click', () => {
    if (operArray.length < 18 && interrIgual == false) { 
        addToScreen(5)
        operArray.push(5)}
});

let seis = document.querySelector('#six');
seis.addEventListener('click', () => {
    if (operArray.length < 18 && interrIgual == false) { 
        addToScreen(6)
        operArray.push(6)}
});

let siete = document.querySelector('#seven');
siete.addEventListener('click', () => {
    if (operArray.length < 18 && interrIgual == false) { 
        addToScreen(7)
        operArray.push(7)}
});

let ocho = document.querySelector('#eight');
ocho.addEventListener('click', () => {
    if (operArray.length < 18 && interrIgual == false) { 
        addToScreen(8)
        operArray.push(8)}
});

let nueve = document.querySelector('#nine');
nueve.addEventListener('click', () => {
    if (operArray.length < 18 && interrIgual == false) { 
        addToScreen(9)
        operArray.push(9)}
});

let cero = document.querySelector('#zero');
cero.addEventListener('click', () => {
    if (operArray.length < 18 && interrIgual == false) { 
        addToScreen(0)
        operArray.push(0)}
});

// OPERATOR QUERY SELECTORS

let sumar = document.querySelector('#plus');
sumar.addEventListener('click', () => {
    interrIgual = false;
    op = "+";
    convToNumber(); // junta os numeros no ecra e converte num int limpado o array
    clearScreen();
    if (typeof a == 'undefined') { // testa se existe ja um operando. Senão coloca no operando A
        a = converted
    }
    else { // isto serve para fazer a matematica no caso de não ter premido no botão igual
        b = converted
        operate(op);
        a = result
        //b = 'undefined' 
    };
    addToScreen(a + "+")
/*console.log(a)
console.log(b)
console.log(converted)*/
    
});

let restar = document.querySelector('#minus');
restar.addEventListener('click', () => {
    interrIgual = false;
    op = "-";
    convToNumber();
    clearScreen();
    if (typeof a == 'undefined') { a = converted }
    else {
        b = converted;
        operate(op);
        a = result;
        b = 'undefined';
    };
    addToScreen(a + "-")   
});

let igual = document.querySelector('#equal');
igual.addEventListener('click', () => {
    convToNumber();
    clearScreen();
    b = converted;
    operate(op);
    addToScreen(result)
/*console.log(a)
console.log(b)
console.log(converted)
console.log(result);*/
    a = result;
    op = 'undefined'
    interrIgual = true
});