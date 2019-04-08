let a = 1
let b = 2
let op
let result

function operate() {
op = prompt("operação?");
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
}
operate();
console.log(result)