var storage = function(key) {
  if (window.localStorage[key] === undefined) {
    return 80;
  } else if (window.localStorage[key] !== undefined) {
    return JSON.parse(window.localStorage[key])['value']
  }
}

var Pet = function(name) {
  var obj = Object.create(Pet.prototype);
  obj.name = name;
  obj.age = 1;
  obj.hunger = storage('hunger');
  obj.thirst = storage('thirst');
  obj.happiness = storage('happiness');
  obj.sleep = storage('sleep');

  return obj;
};

var d = new Date();
// when feed btn is clicked, adds 5 to hunger
Pet.prototype.feed = function(food) {
  if (this.hunger + food <= 100) {
    this.hunger += food;
  }
}

Pet.prototype.water = function(drink) {
  if (this.thirst + drink <= 100) {
    this.thirst += drink;
  }
}

Pet.prototype.play = function(fun) {
  if (this.happiness + fun <= 100) {
    this.happiness += fun;
  }
}

var newPet = Pet('Ginger');