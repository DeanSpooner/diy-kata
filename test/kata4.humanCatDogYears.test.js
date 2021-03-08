const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
    it("returns an array with human age in years, cat years and dog years", () => {
        expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
        expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
        expect(humanCatDogYears(2)).toEqual([2, 24, 24]);
        expect(humanCatDogYears(15)).toEqual([15, 76, 89]);
    });
});