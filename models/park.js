const Park = function(name, ticketPrice){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collectionOfDinosaurs = []
};


Park.prototype.numberOfDinosaurs = function(){
    return this.collectionOfDinosaurs.length;
};

Park.prototype.addDinosaur = function(dinosaur){
    return this.collectionOfDinosaurs.push(dinosaur)
};

Park.prototype.removeDinosaur = function(dinosaur){
    return this.collectionOfDinosaurs.pop(dinosaur)
};


Park.prototype.removeDinosaur2Try = function(gtfDinosaur){
    for (let dinosaur of this.collectionOfDinosaurs){
        if (dinosaur === gtfDinosaur) {
            this.collectionOfDinosaurs.splice(this.collectionOfDinosaurs.indexOf(dinosaur), 2)

        }
    }

};

Park.prototype.findMostPopularDino = function(dinosaur){
    let topDinosaur = this.collectionOfDinosaurs[0];
    for (let dinosaur of this.collectionOfDinosaurs){
        if(dinosaur.guestsAttractedPerDay > topDinosaur.guestsAttractedPerDay)
            topDinosaur = dinosaur
            return dinosaur;    
        }
        
    };


Park.prototype.findDinosOfSpecies = function(dinosaurSpecies){
    let banana = []
    for (let dinosaur of this.collectionOfDinosaurs){
    if(dinosaur.species === dinosaurSpecies){
    banana.push(dinosaur)};
    };
    return banana
};


Park.prototype.visitorsPerDay = function(){
    let total = 0;
    for (let dinosaur of this.collectionOfDinosaurs){
        total += dinosaur.guestsAttractedPerDay;
    
    };
    return total;
};





module.exports = Park;