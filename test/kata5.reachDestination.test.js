const { reachDestination } = require("../src");

describe("reachDestination", () => {
  it("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toBe("I should be there in 4.5 hours.");
    expect(reachDestination(59, 6)).toBe("I should be there in 10 hours.");
    expect(reachDestination(23, 40)).toBe("I should be there in 0.5 hours.");
  });

  it("returns string with estimated time of arrival, using 'hour' for one hour", () => {
    expect(reachDestination(15, 16)).toBe("I should be there in 1 hour.");
    expect(reachDestination(22, 24)).toBe("I should be there in 1 hour.");
    expect(reachDestination(85, 81)).toBe("I should be there in 1 hour.");
  });
});
