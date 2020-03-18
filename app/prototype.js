var storage = function(key) {
  if (window.localStorage[key] === undefined) {
    return 80;
  } else if (window.localStorage[key] !== undefined) {
    return JSON.parse(window.localStorage[key])['value'];
  }
}

var enterName;

var enterNameFunc = function(name,key) {
  if (window.localStorage[key] === undefined) {
    enterName = window.prompt('Please name your pet');
    // if user clicked cancel or hit ok without inputting text; set default name to Ginger
    if (enterName === null || enterName === '') {
        enterName = "Ginger";
    }
    return enterName;
  } else if (window.localStorage[key] !== undefined) {
    return JSON.parse(window.localStorage[key])['value'];
  }
}


var Pet = function(name) {
  var obj = Object.create(Pet.prototype);
  obj.name = enterNameFunc(name,'petName');
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

Pet.prototype.snooze = function(z) {
  if (this.sleep + z <= 100) {
    this.sleep += z;
  }
}

var newPet = Pet(enterName);