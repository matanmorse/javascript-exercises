const sumAll = function(num1, num2) {
    let sum = 0;
    // validate types and values
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || num1 < 0 || num2 < 0) {
        return 'ERROR'
    }

    // arrange numbers in correct order
    if (num1 < num2) {
        var smallerNumber = num1;
        var biggerNumber = num2;
    }
    else if (num1 > num2) {
        var biggerNumber = num1;
        var smallerNumber = num2;
    }
    // if numbers are equal the sum of the numbers between them is twice the numbers
    else {
        return num1 + num2;
    }

    // sum numbers
    for (let i = smallerNumber; i <= biggerNumber; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
