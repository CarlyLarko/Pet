var Pet = function(name) {
  var obj = Object.create(Pet.prototype);
  obj.name = name;
  obj.age = 1;
  obj.hunger = 80;
  obj.thirst = 80;
  obj.happiness = 80;
  obj.sleep = 80;

  return obj;
};

Pet.prototype.generateAge = function() {
  // increase age by 1 every 24 hours
  this.age =
}