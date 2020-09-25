// IMPORT MODULES under test here:

import { logic } from '../mathUtils.js';

// import { example } from '../example.js';

const test = QUnit.test;

test('add 3 + 10 = 13', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    
    
    const firstVal = Number(3);
    const secondVal = Number(10);
    const indexVal = Number(0); //signifies addition operation index
    const expectedVal = Number(13);

    
    //Act 
    // Call the function you're testing and set the result to a const
    const result = logic(firstVal, secondVal, indexVal);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(result, expectedVal);
});
