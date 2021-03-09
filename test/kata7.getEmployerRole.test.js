const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {
  it("returns the employee's role in the company", () => {
    const employees = [{
      name: "Dean",
      role: "Primary school teacher"
    },
    {
      name: "Calvin",
      role: "Animator"
    },
    {
      name: "Chris",
      role: "Accountant"
    },
    {
      name: "Dave",
      role: "Caretaker"
    },
    {
      name: "Sam",
      role: "Payroll assistant"

    }];
    expect(getEmployerRole("Dean", employees)).toEqual("Primary school teacher");
    expect(getEmployerRole("Calvin", employees)).toEqual("Animator");
    expect(getEmployerRole("Chris", employees)).toEqual("Accountant");
    expect(getEmployerRole("Dave", employees)).toEqual("Caretaker");
    expect(getEmployerRole("Sam", employees)).toEqual("Payroll assistant");
  });
  it("returns 'Does not work here!' if name does not match with any names in array", () => {
    const employees = [{
      name: "Dean",
      role: "Primary school teacher"
    },
    {
      name: "Calvin",
      role: "Animator"
    },
    {
      name: "Chris",
      role: "Accountant"
    },
    {
      name: "Dave",
      role: "Caretaker"
    },
    {
      name: "Sam",
      role: "Payroll assistant"

    }];
    expect(getEmployerRole("Ellie", employees)).toEqual("Does not work here!");
    expect(getEmployerRole("Alex", employees)).toEqual("Does not work here!");
    expect(getEmployerRole("Matt", employees)).toEqual("Does not work here!");
  });
});
