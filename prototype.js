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

var d = new Date();
// when feed btn is clicked, adds 5 to hunger
Pet.prototype.feed = function(food) {
  if (this.hunger + food <= 100) {
    this.hunger += food;
  }
}

var newPet = Pet('Ginger');