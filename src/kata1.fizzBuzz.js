const fizzBuzz = number => {
    const canDivideBy3 = (number % 3) === 0;
    const canDivideBy5 = (number % 5) === 0;
    const canDivideBy15 = (number % 15) === 0;

    if (canDivideBy15) {
        return 'FizzBuzz';
    }
    if (canDivideBy5) {
        return 'Buzz';
    }
    if (canDivideBy3) {
        return 'Fizz';
    }
    return number;
};

module.exports = fizzBuzz;
