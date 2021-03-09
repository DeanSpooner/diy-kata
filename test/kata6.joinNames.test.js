const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames([{
      name: "Bart"
    },
    {
      name: "Lisa"
    },
    {
      name: "Maggie"
    }])).toEqual('Bart, Lisa & Maggie');
    expect(joinNames([{
      name: "Homer"
    },
    {
      name: "Marge"
    }])).toEqual('Homer & Marge');
    expect(joinNames([{
      name: "Dean"
    },
    {
      name: "Calvin"
    },
    {
      name: "Chris"
    },
    {
      name: "Dave"
    },
    {
      name: "Sam"
    }
    ])).toEqual('Dean, Calvin, Chris, Dave & Sam');
  });

});
