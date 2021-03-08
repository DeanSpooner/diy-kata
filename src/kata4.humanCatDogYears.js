const humanCatDogYears = number => {
    let array = [];
    let catYears;
    let dogYears;

    array.push(number);

    if (number === 1) {
        catYears = 15;
        array.push(catYears);
        dogYears = 15;
        array.push(dogYears);
    } else if (number === 2) {
        catYears = 24;
        array.push(catYears);
        dogYears = 24;
        array.push(dogYears);
    } else {
        catYears = (24 + (4 * (number - 2)));
        array.push(catYears);
        dogYears = (24 + (5 * (number - 2)));
        array.push(dogYears);
    };

    return array;

};


module.exports = humanCatDogYears;
