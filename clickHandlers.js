import { logic } from './mathUtils.js';

const outputVal = document.getElementById('output');
const firstVal = document.getElementById('first');
const secondVal = document.getElementById('second');
const operatorVal = document.getElementById('operator');

export function calculate() { 
    const indexVal = operatorVal.options[operatorVal.selectedIndex].value; //returns index value of the options box + = 0, - = 1, x =3, / = 4
    outputVal.textContent = logic(firstVal.value, secondVal.value, indexVal); // passes two values and the type of operation, returns result and logs to HTML element
    firstVal.value = ''; //clears out first text box value
    secondVal.value = ''; //clears out second text box value
}
