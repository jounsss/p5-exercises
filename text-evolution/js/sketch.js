var target = "target string";
var generation = [];
var population_size = 10;
var mutationRate = "0.01";

var allPhrases;

function setup() {
  createGeneration();

  allPhrases = createP("All phrases:");
  allPhrases.position(200,10);
  allPhrases.class("all");
}

function draw() {
  background(150);
  allPhrases.html("All phrases: <br />" + getGenes());
  mutateGeneration();
}

function getGenes(){
  var allGenes = "";
  for (var i = 0 ; i < generation.length ; i++){
    allGenes += generation[i].genes.join("") + ", fitness=" + generation[i].fitness +  "<br />";
  }
  return allGenes;
}

function createGeneration(){
  for (var i = 0 ; i < population_size ; i++){
    generation[i] = new Entity(target);
  }
}

function mutateGeneration(){
  for (var i = 0 ; i < population_size ; i++){
    generation[i].mutateGenes(mutationRate);
  }
}
