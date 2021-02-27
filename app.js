// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // returnamos el valor
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a Yens
    let valueInYen = valueInDollar * (127.9/1.2);
    // returnamos el valor
    return valueInYen;
}


const fromYenToPound = function(valueInYen){
    // convertimos el valor a Pounds
    let valueInPounds = valueInYen * (0.8/127.9);
    // returnamos el valor
    return valueInPounds;
}


//fromDollarToYen using nested functions
/*const fromDollarToYen = function(valueInEuro){
    // convertimos el valor a yens
    let valueInYen = fromEuroToDollar(valueInEuro) * (1/1.2*127.9);
    // returnamos el valor
    return valueInYen;
}*/



// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(7,3)

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };