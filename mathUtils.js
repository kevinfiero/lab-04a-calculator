const firstVal = document.getElementById('first');
const secondVal = document.getElementById('second');
const operatorVal = document.getElementById('operator');

export function logic() {

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
    
    if (isNaN(result) || firstVal.value === '' || secondVal.value === '') {
        result = 'ERROR';
    }
    return result;
}

export function resetValues() {
    firstVal.value = '';
    secondVal.value = '';
}
