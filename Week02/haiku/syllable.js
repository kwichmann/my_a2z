// Reworked syllable counter using regex

function countSyllables(word) {
  var vowelBlocks = word.match(/[aeiouy]+/ig);
  var syl = vowelBlocks.length;
  if (/es?$/i.test(word)) {
    syl -= 1;
  }
  if (/[^aeiouy]les?$/i.test(word)) {
    syl += 1; 
  }
  return syl;
}