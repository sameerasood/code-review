### Requirements -

Company builds word processor. User wants to build a new feature - spellchecker.

typeof input = string
if the string spelling is wrong - the output should give the highlighted string back.

dictionary = "This", "is", "a", "string", "of", "words"

Input: "words" Output: "words"
Input: "wrds" Output: "~wrds~"

### Example tests:

      INPUT          | OUTPUT

1. empty string "" | ""

2. single letter "a" | "a"

3. word "words" | "words"
4. incorrect "wrds" | "~wrds~"

### Edge cases

1. Check words in a sentence "This is an apple"
2. checks the type of input - string or not.
