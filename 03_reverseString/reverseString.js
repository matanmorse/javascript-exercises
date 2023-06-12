const reverseString = function(string) {
    // make a new array same size as word
    var strlen = string.length;
    var newStringArray = new Array(strlen)

    // iterate over every character and reverse its position in the new array
    string.split('').forEach((char, index) => {
        newStringArray[strlen - index] = char;
    });

    var newString = newStringArray.join('');
    return newString
};
// Do not edit below this line
module.exports = reverseString;

