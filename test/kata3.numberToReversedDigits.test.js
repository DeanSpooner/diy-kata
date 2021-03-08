const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  it("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(12345)).toEqual([5, 4, 3, 2, 1]);
    expect(numberToReversedDigits(4026)).toEqual([6, 2, 0, 4]);
    expect(numberToReversedDigits(55381)).toEqual([1, 8, 3, 5, 5]);
  });
});
