const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;

  beforeEach(function () {
    park = new Park('Jurassic', 100);
    dinosaur1 = new Dinosaur('T-Rex', 'carnivore', 25);
    dinosaur2 = new Dinosaur('Diplodicus', 'herbivore', 200);
    dinosaur3 = new Dinosaur('Stegasuraus', 'omnivore', 8);
    dinosaur4 = new Dinosaur('T-rex', 'carnivore', 40);

  })

  it('should have a name',function(){
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic");
  });


  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 100);
  });

  it('should have a collection of dinosaurs', function(){
     const actual = park.collectionOfDinosaurs;
     assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur1);
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 1)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.removeDinosaur(dinosaur2);
    const banana = park.numberOfDinosaurs();
    assert.strictEqual(banana, 1)
  });

  it('should be able to remove dinosaur differently', function(){
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur1);
    park.removeDinosaur2Try(dinosaur3);
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual,1)

  })
    


  it('should be able to find the dinosaur that attracts the most visitors', function(){

    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur1);
    actual = park.findMostPopularDino();
    assert.strictEqual(actual, dinosaur2);
  
  });

  it('should be able to find all dinosaurs of a particular species', function(){

    park.addDinosaur(dinosaur1); 
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4); 
  actual = park.findDinosOfSpecies(dinosaur1);
  assert.deepStrictEqual(actual, [dinosaur1, dinosaur4])
  });






  it('should be able to calculate the total number of visitors per day', function(){
    park.addDinosaur(dinosaur1); 
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);  
    actual = park.visitorsPerDay();
    assert.strictEqual(actual, 273);
  });









  it('should be able to calculate the total number of visitors per year'), function(){

  };

  it('should be able to calculate total revenue for one year', function (){

  });

});
