const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
 it("returns 'Yes' when a boolean passes as true", () => {
    expect(booleanToWord(true)).toBe("Yes");
    expect(booleanToWord(2 * 2 === 4)).toBe("Yes");
    expect(booleanToWord(9 < 10)).toBe("Yes");
  });

  it("returns 'No' when a boolean passes as false", () => {
    expect(booleanToWord(false)).toBe("No");
    expect(booleanToWord(2 * 2 === 5)).toBe("No");
    expect(booleanToWord(9 > 10)).toBe("No");
  });
});
