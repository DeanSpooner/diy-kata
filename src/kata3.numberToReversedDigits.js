const numberToReversedDigits = number => {
    let numString = number.toString();
    let normalArray = numString.split("");
    let reversedArray = normalArray.reverse();
    let finalArray = [];

    for (let i = 0; i < reversedArray.length; i++) {
        let reversedElement = reversedArray[i];
        let reversedNum = parseInt(reversedElement);
        finalArray.push(reversedNum);
    }
    return finalArray;
};

module.exports = numberToReversedDigits;
