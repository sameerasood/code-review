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
    const spellChecker = new SpellChecker("words");
    expect(spellChecker.getResult()).toEqual("words");
  });

  it("returns four letter string", () => {
    const spellChecker = new SpellChecker("wrds");
    expect(spellChecker.getResult()).toEqual("~wrds~");
  });

  it("gives an error input is not a string", () => {
    const spellChecker = new SpellChecker(123);
    expect(spellChecker.getResult()).toThrow("Enter a string");
  });
});
