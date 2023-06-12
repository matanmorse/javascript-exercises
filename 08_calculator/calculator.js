const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(x) {
  return x.reduce( (total, number) => total += number, 0 )
};

const multiply = function(x) {
  return x.reduce( (total, number) => total *= number, 1)
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(x) {
  if (x === 1 || x === 0 ) {
    return 1;
  }
  else {
    return x * factorial(x - 1)
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
