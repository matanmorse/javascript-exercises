const findTheOldest = function( people ) {
    const oldestPerson = people.reduce( (oldest, person) => {
        const oldestAge = findAge(oldest);
        const personAge = findAge(person);

        if (personAge > oldestAge ) return oldest = person;
        else return oldest = oldest;
    }, people[0] )
    return oldestPerson;
};

function findAge ( person ) {
    if ( !person.yearOfDeath ) return (new Date).getFullYear() - person.yearOfBirth;
    return person.yearOfDeath - person.yearOfBirth;
}


// Do not edit below this line
module.exports = findTheOldest;
