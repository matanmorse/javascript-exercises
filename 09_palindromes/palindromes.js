const palindromes = function ( string ) {
    const stringNoPunct = string.split('')
                        .filter(char => char !== "!" && char !== "?" && char !== "." && char !== " " && char !== ",")
                        .map( char => char.toLowerCase() )
                        .join('');
    const reversed = stringNoPunct.split('').reverse().join('')
    return reversed === stringNoPunct;
};

// Do not edit below this line
module.exports = palindromes;

palindromes('racecar!')
