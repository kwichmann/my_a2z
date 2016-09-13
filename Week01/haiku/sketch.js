var atmom;
var source;

function preload() {
  atmom = loadStrings("atmom.txt");
  
}

function setup() {
  noCanvas();
  
  source = makeWords(atmom);
  
  var seedP = select("#seed");
  var seedIn = createInput("rainbow");
  seedIn.parent(seedP);
  seedIn.changed(makeHaiku);
  
  var haikuP = select("#haiku");
  haikuP.innerText = "test";
  
}

function makeWords(corpus) {
  var delimiters = '.,:;?! !@#$%^&*()]+—'
  return splitTokens(join(corpus, ""), delimiters);
}

function writeHaiku(haiku) {
   var haikuP = select("#haiku");
   haikuP.elt.innerHTML = haiku;
}