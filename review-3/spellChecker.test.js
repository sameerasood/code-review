const SpellChecker = require("./spellChecker.js");

describe("class SpellChecker", () => {
  it("returns empty string", () => {
    const spellChecker = new SpellChecker("");
    expect(spellChecker.getResult()).toEqual("");
  });

  it("returns one letter string", () => {
    const spellChecker = new SpellChecker("a");
    expect(spellChecker.getResult()).toEqual("a");
  });

  it("returns four letter string", () => {
    const spellChecker = new SpellChecker("word");
    expect(spellChecker.getResult()).toEqual("word");
  });
});
