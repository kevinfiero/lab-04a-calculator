// import functions and grab DOM elements

const firstVal = document.getElementById('first');
const secondVal = document.getElementById('second');
const calcVal = document.getElementById('calculate');
const outputVal = document.getElementById('output');
const operatorVal = document.getElementById('operator');

// set event listeners to update state and DOM

calcVal.addEventListener('click', () => {  

    let result;
    const indexVal = operatorVal.options[operatorVal.selectedIndex].value;

 
    if (Number(indexVal) === 0) {

        result = Number(firstVal.value) + Number(secondVal.value);

    } else if (Number(indexVal) === 1) {

        result = Number(firstVal.value) - Number(secondVal.value);

    } else if (Number(indexVal) === 2) {

        result = Number(firstVal.value) * Number(secondVal.value);

    } else if (Number(indexVal) === 3) {

        result = Number(firstVal.value) / Number(secondVal.value);
    }


    if (isNaN(result) || firstVal.value === '' || secondVal.value === ''){
        outputVal.textContent = 'ERROR!';
    } else {
        outputVal.textContent = result;
    }
    firstVal.value = '';
    secondVal.value = '';
});