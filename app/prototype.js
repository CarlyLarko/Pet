// on page refresh, if key is not defined, default value is 80
var storage = function(key) {
  if (window.localStorage[key] === undefined) {
    return 80;
    // else, value the value in local storage
  } else if (window.localStorage[key] !== undefined) {
    return JSON.parse(window.localStorage[key])['value'];
  }
}

var enterName;

var enterNameFunc = function(name,key) {
  if (window.localStorage[key] === undefined) {
    enterName = window.prompt('Please name your pet');
    // if user clicks cancel or text was not inputted; set default name to Ginger
    if (enterName === null || enterName === '') {
        enterName = "Abby";
    }
    return enterName;
  } else if (window.localStorage[key] !== undefined) {
    return JSON.parse(window.localStorage[key])['value'];
  }
}

// on page refresh, if key is not defined, default age is 0;
var ageStorage = function(key) {
  if (window.localStorage[key] === undefined) {
    return 0;
  } else if (window.localStorage[key] !== undefined) {
    return JSON.parse(window.localStorage[key])['value'];
  }
}

var Pet = function(name) {
  var obj = Object.create(Pet.prototype);
  obj.name = enterNameFunc(name,'petName');
  obj.age = ageStorage('petAge');
  obj.hunger = storage('hunger');
  obj.thirst = storage('thirst');
  obj.happiness = storage('happiness');
  obj.sleep = storage('sleep');

  return obj;
};

// when feed btn is clicked, adds 5 to hunger
Pet.prototype.feed = function(food) {
  if (this.hunger + food <= 100) {
    this.hunger += food;
  }
}
// when water btn is clicked, adds 5 to water
Pet.prototype.water = function(drink) {
  if (this.thirst + drink <= 100) {
    this.thirst += drink;
  }
}
// when play btn is clicked, adds 5 to happiness
Pet.prototype.play = function(fun) {
  if (this.happiness + fun <= 100) {
    this.happiness += fun;
  }
}
// when sleep btn is clicked, adds 5 to sleep
Pet.prototype.snooze = function(z) {
  if (this.sleep + z <= 100) {
    this.sleep += z;
  }
}

var newPet = Pet(enterName);