const fibonacci = function( count ) {
    if ( count < 0 ) return "OOPS";
    count = Number(count);
    if ( count === 1 ) return 1;
    if ( count === 0 ) return 0;
    return fibonacci( count - 1 ) + fibonacci(count - 2)
};

// Do not edit below this line
module.exports = fibonacci;

