

export function logic(firstVal, secondVal, indexVal) {

    let result;

    if (Number(indexVal) === 0) {

        result = Number(firstVal) + Number(secondVal);
        
    } else if (Number(indexVal) === 1) {
    
        result = Number(firstVal) - Number(secondVal);
    
    } else if (Number(indexVal) === 2) {
    
        result = Number(firstVal) * Number(secondVal);
    
    } else if (Number(indexVal) === 3) {
    
        result = Number(firstVal) / Number(secondVal);
    }

    if (isNaN(result) || firstVal === '' || secondVal === '') {
        result = 'ERROR';
    }
    return result;
}

export function resetValues(firstVal,secondVal) {
    
    firstVal.value = '';
    secondVal.value = '';
}
