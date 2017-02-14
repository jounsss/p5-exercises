function Entity(target){
    this.genes = [];
    this.fitness = 0;

    for(var i = 0 ; i < target.length ; i++ ){
      this.genes[i] = randomChar();
      if(target[i] == this.genes[i]){
        this.fitness++;
      }
    }

    function randomChar(){
      var character = floor(random(64,122));
      if(character == 64) character = 32;
      return String.fromCharCode(character);
    }

    this.mutateGenes = function(mutationRate){
      for(var i = 0 ; i < this.genes.length ; i++ ){
        if(mutationRate < random(1)){
          this.genes[i] = randomChar();
        }
      }
    }
}
