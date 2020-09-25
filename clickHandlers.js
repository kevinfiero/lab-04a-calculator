import { logic, resetValues } from "./mathUtils.js";

const firstVal = document.getElementById('first');
const secondVal = document.getElementById('second');
const operatorVal = document.getElementById('operator');
const outputVal = document.getElementById('output');


export function calculate() { 

    outputVal.textContent = logic();
    resetValues();
}
