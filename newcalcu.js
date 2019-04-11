let a
let b
let op
let result
let visor = document.querySelector("#screen")
let operArray = [];
let converted
let interrIgual = false
let dotCheck = false

function operate(op) {
    b = converted
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
            if (b == 0) {
            result = "Za Warudo!!!"
            interrIgual = true
            break;}
            else {
            result = a/b;
            result = Math.round(result * 10)/10
        break;
    }}
};

//Junta os numeros no ecrã e converte num int limpado o array
function convToNumber(){
    converted = operArray.join("");
    converted = Number(converted)
    operArray = []
};
//Remove os divs do ecrã
function clearScreen(){
    for (let r = visor.childNodes.length - 1; r >= 0; r--) {
        visor.removeChild(visor.childNodes[r])
    };
};
//Adiciona números no ecrã
function addToScreen(numeral) {
    let numVisor = document.createElement('div');
    numVisor.classList.add("numScr")
    numVisor.textContent = numeral;
    visor.appendChild(numVisor);
};


// NUMBER QUERY SELECTORS
let uno = document.querySelector('#one');
uno.addEventListener('click', () => {
    if (interrIgual == true) {
        limpar()}
    if (operArray.length < 15 && interrIgual == false) {
    addToScreen(1)
    operArray.push(1)}
});

let dos = document.querySelector('#two');
dos.addEventListener('click', () => {
    if (interrIgual == true) {
        limpar()}
    if (operArray.length < 15 && interrIgual == false) { 
    addToScreen(2)
    operArray.push(2)}
});
let tres = document.querySelector('#three');
tres.addEventListener('click', () => {
    if (interrIgual == true) {
        limpar()}
    if (operArray.length < 15 && interrIgual == false) { 
        addToScreen(3)
        operArray.push(3)}
});

let cuatro = document.querySelector('#four');
cuatro.addEventListener('click', () => {
    if (interrIgual == true) {
        limpar()}
    if (operArray.length < 15 && interrIgual == false) { 
        addToScreen(4)
        operArray.push(4)}
});

let cinco = document.querySelector('#five');
cinco.addEventListener('click', () => {
    if (interrIgual == true) {
        limpar()}
    if (operArray.length < 15 && interrIgual == false) { 
        addToScreen(5)
        operArray.push(5)}
});

let seis = document.querySelector('#six');
seis.addEventListener('click', () => {
    if (interrIgual == true) {
        limpar()}
    if (operArray.length < 15 && interrIgual == false) { 
        addToScreen(6)
        operArray.push(6)}
});

let siete = document.querySelector('#seven');
siete.addEventListener('click', () => {
    if (interrIgual == true) {
        limpar()}
    if (operArray.length < 15 && interrIgual == false) { 
        addToScreen(7)
        operArray.push(7)}
});

let ocho = document.querySelector('#eight');
ocho.addEventListener('click', () => {
    if (interrIgual == true) {
        limpar()}
    if (operArray.length < 15 && interrIgual == false) { 
        addToScreen(8)
        operArray.push(8)}
});

let nueve = document.querySelector('#nine');
nueve.addEventListener('click', () => {
    if (interrIgual == true) {
        limpar()}
    if (operArray.length < 15 && interrIgual == false) { 
        addToScreen(9)
        operArray.push(9)}
});

let cero = document.querySelector('#zero');
cero.addEventListener('click', () => {
    if (interrIgual == true) {
        limpar()}
    if (operArray.length < 15 && interrIgual == false) { 
        addToScreen(0)
        operArray.push(0)}
});

let ponto = document.querySelector('#dot');
ponto.addEventListener('click', () => {
    if (operArray.length == 0 || dotCheck == true) {
        console.log("Errororor")
    }
    else {
    dotCheck = true
    addToScreen(".")
    operArray.push(".")}
});

// OPERATOR QUERY SELECTORS
let sumar = document.querySelector('#plus');
sumar.addEventListener('click', () => {
    if(operArray.length > 0 || interrIgual == true && a != "Za Warudo!!!"){
    dotCheck = false;
    interrIgual = false;
    convToNumber(); clearScreen();
    if (typeof a == 'undefined') { a = converted;  op = "+" }
    else {
        operate(op);
        a = result
        op = "+"
        b = undefined};
    addToScreen(a)
    addToScreen(" +")}
    else {console.log("ERROR")}
});

let restar = document.querySelector('#minus');
restar.addEventListener('click', () => {
    if(operArray.length > 0 || interrIgual == true && a != "Za Warudo!!!"){
    dotCheck = false;
    interrIgual = false;
    convToNumber(); clearScreen();
    if (typeof a == 'undefined') { a = converted; op = "-" }
    else {
        operate(op);
        a = result;
        op = "-"
        b = undefined};
    addToScreen(a)
    addToScreen(" -")}
    else {console.log("ERROR")} 
});

let multiplicar = document.querySelector('#multiply');
multiplicar.addEventListener('click', () => {
    if(operArray.length > 0 || interrIgual == true && a != "Za Warudo!!!"){
    dotCheck = false;
    interrIgual = false;
    convToNumber(); clearScreen();
    if (typeof a == 'undefined') { a = converted; op = "*"; }
    else {
        operate(op);
        a = result;
        op = "*"
        b = undefined};
    addToScreen(a)
    addToScreen(" x")}
    else {console.log("ERROR")}  
});

let dividir = document.querySelector('#divide');
dividir.addEventListener('click', () => {
    if(operArray.length > 0 || interrIgual == true && a != "Za Warudo!!!"){
    dotCheck = false;
    interrIgual = false;
    convToNumber(); clearScreen();
    if (typeof a == 'undefined') { a = converted; op = "/";}
    else {
        operate(op)
        a = result;
        op = "/"
        b = undefined};
    addToScreen(a)
    addToScreen(" /")}
    else {console.log("ERROR")} 
});

let igual = document.querySelector('#equal');
igual.addEventListener('click', () => {
    if (typeof a == 'undefined') {console.log("error dude")}
    else {
    convToNumber(); clearScreen();
    b = converted;
    operate(op);
    addToScreen(result)
    a = result;
    op = undefined
    interrIgual = true
    dotCheck = false}
});

//CLEAR BUTTON
let limpiar = document.querySelector('#clear');
limpiar.addEventListener('click', limpar); 

function limpar(){
    clearScreen();
    a = undefined
    b = undefined
    op = undefined
    result = undefined
    operArray = [];
    converted = undefined
    interrIgual = false
};
//RETURN BUTTON
let volver = document.querySelector('#return');
volver.addEventListener('click', () => {
    let cleanLast = document.querySelector("#screen")
    let cleanLastSecond = cleanLast.lastChild
    if ((cleanLastSecond.textContent == " +"|| " -" || " *" || " /") && (operArray.length == 0)) {
        console.log("oppsError")
    }
    else {
    cleanLast.removeChild(cleanLast.lastChild)
    operArray.splice(-1, 1);
    }
});