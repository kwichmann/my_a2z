function setup() {
  noCanvas();
  var calcLIX = select('#calcLIX');
  calcLIX.mousePressed(calculate);
}

function calculate() {
  var getText = select('#getText');
  var t = getText.value();
  
  var a = calcA(t);
  if (a == 0) {
    putLIX("The text must contain at least one word.");
    putRead("");
    return null;
  }
  
  var b = calcB(t);
  if (b == 0) {
    putLIX("The text must contain at least one period or other sentence separator.");
    putRead("");
    return null;
  }
  
  var c = calcC(t);

  var lix = a / b + c * 100 / a;
  lix = floor(lix + 0.5);
  putLIX("The LIX score of the text is " + lix + ".");

  if (lix >= 55) {
    putRead("Difficulty: Very hard.");
    return null;
  }
  
  if (lix >= 45) {
    putRead("Difficulty: Hard.");
    return null;
  }
  
  if (lix >= 35) {
    putRead("Difficulty: Average.");
    return null;
  }
  
  if (lix >= 25) {
    putRead("Difficulty: Easy.");
    return null;
  }
  
  putRead("Difficulty: Very easy.");
}

// Count the number of words in text.
function calcA(t) {
  var m = t.match(/[æøå\w]+/g);
  if (m === null) {
    return 0;
  } else {
    return m.length;
  }
}

// Count the number of periods and other symbols signifying a new sentence.
function calcB(t) {
  var m = t.match(/[.:;!?]+/g);
  if (m === null) {
    return 0;
  } else {
    return m.length;
  }
}

// Count the number of long words, i.e. words with 6 letters or more.
function calcC(t) {
  var m = t.match(/[æøå\w]{6}[æøå\w]*\b/g);
  if (m === null) {
    return 0;
  } else {
    return m.length;
  }
}

function putLIX(message) {
  var lix = select('#LIX');
  lix.html(message);
}

function putRead(message) {
  var readability = select('#readability');
  readability.html(message);
}