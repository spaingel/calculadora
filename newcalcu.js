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