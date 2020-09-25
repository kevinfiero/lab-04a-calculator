import { logic, resetValues } from './mathUtils.js';

const outputVal = document.getElementById('output');


export function calculate() { 

    outputVal.textContent = logic();
    resetValues();
}
