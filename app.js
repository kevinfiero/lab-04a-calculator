// import functions and grab DOM elements

import { calculate } from './clickHandlers.js';

const calcVal = document.getElementById('calculate');

// set event listeners to update state and DOM

calcVal.addEventListener('click', calculate);