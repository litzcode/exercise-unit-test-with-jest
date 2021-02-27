// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});


test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(dollars);
})

test("One dollar should be 105.833 yens", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const yens = fromDollarToYen(1)

    // dollar should be 105.833 yens
    const expected = 1 * 127.9/1.2; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(yens);
})

test("One yen should be 0.00625 pounds, then 1000 yen should be 6.25", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const pounds = fromYenToPound(10)

    // pounds should be 0.00625 
    const expected = 10 * 0.8/127.9; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(pounds);
})


//test from dollarToYen using nested functions
/*test("One dollar should be 106.58 yen", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const yens = fromDollarToYen(fromEuroToDollar(3.5));

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1/1.2*127.9)
    const expected = fromEuroToDollar(3.5) * (1/1.2*127.9); 
    
    // this is the comparison for the unit test
    expect(expected).toBe(yens);
})*/