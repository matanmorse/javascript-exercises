const leapYears = function(year) {
    const fourDivisible = Number.isInteger(year / 4)
    const hundredDivisible = Number.isInteger(year / 100) 
    const fourHundredDivisible = Number.isInteger(year / 400) 

    if (!fourDivisible) {
        return false;
    }
    if (hundredDivisible) {
        if (!fourHundredDivisible) {
            return false;
        }
        else return true;
    }
    // if the function has not returned yet it is a leap year
    return true;
};

// Do not edit below this line
module.exports = leapYears;
