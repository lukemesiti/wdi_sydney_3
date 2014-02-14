var rate = 1.84;
var dollar = 100;
var dollarToPound = dollar * rate;
console.log("$" + dollar + " is £" + dollarToPound.toFixed(2));

var pound = 100;
var poundToDollar = pound / rate;
console.log("£" + pound + " is $" + poundToDollar.toFixed(2));


function currencyConverter(rate, dollar1) {
    var converted = rate * dollar1;
    console.log(dollar1 + " is " + converted.toFixed(2));
}

currencyConverter(1.84, 100); // aud to pound
currencyConverter(0.93, 100); // aud to nz