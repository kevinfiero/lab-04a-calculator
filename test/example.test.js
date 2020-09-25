// IMPORT MODULES under test here:

import { logic } from '../mathUtils.js';

const test = QUnit.test;

test('add 3 + 10 = 13', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    
    const firstVal = 3;
    const secondVal = 10;
    const indexVal = 0; //signifies addition operation index
    const expectedVal = 13;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = logic(firstVal, secondVal, indexVal);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(result, expectedVal);
});

test('subtract 10 - 3 = 7', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    
    const firstVal = 10;
    const secondVal = 3;
    const indexVal = 1; //signifies subtraction operation index
    const expectedVal = 7;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = logic(firstVal, secondVal, indexVal);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(result, expectedVal);
});

test('multiply 10 * 3 = 30', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    
    const firstVal = 10;
    const secondVal = 3;
    const indexVal = 2; //signifies multiply operation index
    const expectedVal = 30;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = logic(firstVal, secondVal, indexVal);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(result, expectedVal);
});

test('divide 15 / 3 = 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    
    const firstVal = 15;
    const secondVal = 3;
    const indexVal = 3; //signifies divide operation index
    const expectedVal = 5;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = logic(firstVal, secondVal, indexVal);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(result, expectedVal);
});

test('error handling strings', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    
    const firstVal = 'p';
    const secondVal = 'q';
    const indexVal = 0; //signifies addition operation index
    const expectedVal = "ERROR";

    //Act 
    // Call the function you're testing and set the result to a const
    const result = logic(firstVal, secondVal, indexVal);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(result, expectedVal);
});