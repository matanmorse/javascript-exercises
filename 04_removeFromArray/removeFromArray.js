const removeFromArray = function(array, ...elementsToRemove) {
    for (const element of elementsToRemove) {
        // check if array has the element and if it does remove it from the array using array.splice()
        if (array.includes(element)) {array.splice(array.indexOf(element), 1)};
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
