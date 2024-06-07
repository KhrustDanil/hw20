const calc = prompt('Оберіть одну з дій: add, sub, mult, div.');
const num1 = +prompt('Введіть перше число.');
const num2 = +prompt('Введіть друге число.');
const checkNum = !isNaN(num1) && !isNaN(num2);

if (calc === "add" && checkNum) {
    document.write(`${num1} + ${num2} = ${num1 + num2}`);
} else if (calc === "sub" && checkNum) {
    document.write(`${num1} - ${num2} = ${num1 - num2}`);
} else if (calc === "mult" && checkNum) {
    document.write(`${num1} * ${num2} = ${num1 * num2}`);
} else if (calc === "div" && checkNum) {
    document.write(`${num1} / ${num2} = ${num1 / num2}`);
} else {
    document.write('ERROR! Try again!')
}

