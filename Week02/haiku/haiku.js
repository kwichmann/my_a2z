function makeHaiku() {
    var seed = this.value();
    if (seed == "") {
      writeHaiku("Please enter a seed.")
      return null;
    }
    
    // Remove all spaces
    seed = join(split(seed, " "), "");
    
    // Start indices at -1, since they're increased before returning letter/word
    seedIndex = -1;
    sourceIndex = -1;
    
    var fLine = makeLine(5);
    if (fLine === null) {
      writeHaiku("Not able to make haiku from this seed.");
      return null;
    }
    
    var sLine = makeLine(7);
    if (sLine === null) {
      writeHaiku("Not able to make haiku from this seed.");
      return null;
    }
    
    var tLine = makeLine(5);
    if (tLine === null) {
      writeHaiku("Not able to make haiku from this seed.");
      return null;
    }
    
    writeHaiku(fLine + "<br/>" + sLine + "<br/>" + tLine);
    
    function makeLine(syl) {
      var haikuLine = "";
      var sylLeft = syl;
      var l, w, s, startIndex;
      var found;
      
      while (sylLeft != 0) {
        l = getLetter();
        found = false;
        startIndex = sourceIndex;
        while (!found) {
          w = getWord();
          if (sourceIndex == startIndex) {
            return null;
          }
          if (w.charAt(seedIndex) == l) {
            s = countSyllables(w);
            if (s <= sylLeft) {
              found = true;
              sylLeft -= s;
              haikuLine = haikuLine + w + " ";
            }
          }
        }
      }
      return haikuLine;
    }
    
    function getLetter() {
      seedIndex++;
      if (seedIndex == seed.length) {
        seedIndex = 0;
      }
      return seed.charAt(seedIndex);
    }
    
    function getWord() {
      sourceIndex++;
      if (sourceIndex == source.length) {
        sourceIndex = 0;
      }
      return source[sourceIndex];
    }
  }
