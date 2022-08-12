const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js');

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });
});

it("should return true if the word APPLEPIES is present", function() {
  const result = wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'A', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'P', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'P', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'L', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'P', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'I', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'E', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'S', 'A', 'L'],
  ], 'APPLEPIES');

  assert.isTrue(result);
});

it("should return true if the word PUPPY is present", function() {
  const result = wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'A', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'P', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'P', 'A', 'L'],
    ['H', 'P', 'J', 'T', 'E', 'L', 'R', 'G'],
    ['W', 'U', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'P', 'R', 'E', 'N', 'P', 'Y', 'B'],
    ['U', 'P', 'T', 'W', 'A', 'I', 'A', 'I'],
    ['O', 'Y', 'C', 'A', 'K', 'E', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'S', 'A', 'L'],
  ], 'APPLEPIES');

  assert.isTrue(result);
});