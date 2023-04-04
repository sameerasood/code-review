const SpellChecker = require("./spellChecker.js");

describe("class SpellChecker", () => {
  it("returns empty string", () => {
    const spellChecker = new SpellChecker("");
    expect(spellChecker.getResult()).toEqual("");
  });
});
