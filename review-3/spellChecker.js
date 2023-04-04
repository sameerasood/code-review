class SpellChecker {
  constructor(string) {
    this.string = string;
    this.dictionary = ["This", "is", "a", "string", "of", "words"];
  }

  getResult() {
    if (this.dictionary.join(",").includes(this.string)) {
      return this.string;
    } else return `~${this.string}~`;
  }
}

module.exports = SpellChecker;

const spellChecker = new SpellChecker("a");
spellChecker.getResult();
