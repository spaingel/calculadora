const array = [1,2];

const sum = (accumulator, currentValue) => accumulator + currentValue;
const subtract = (accumulator, currentValue) => accumulator - currentValue;
const multiply = (accumulator, currentValue) => accumulator * currentValue;
const divide = (accumulator, currentValue) => accumulator / currentValue;

console.log(array.reduce(sum));
console.log(array.reduce(subtract));
console.log(array.reduce(multiply));
console.log(array.reduce(divide));