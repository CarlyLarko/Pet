var hungerFunc = function() {
  if (window.localStorage['hunger'] === undefined) {
    return 80;
  } else if (window.localStorage['hunger'] !== undefined) {
    return JSON.parse(window.localStorage['hunger'])['value']
    // - JSON.parse(window.localStorage['hunger'])['lastUpdated'];
  }
  // if (window.localStorage['lastUpdated'] !== undefined) {
  //   return JSON.parse(window.localStorage['hunger'])['lastUpdated'];
  // }
}

var thirstFunc = function() {
  if (window.localStorage['thirst'] === undefined) {
    return 80;
  } else if (window.localStorage['thirst'] !== undefined) {
    return JSON.parse(window.localStorage['thirst'])['value'];
  }
}

var happinessFunc = function() {
  if (window.localStorage['happiness'] === undefined) {
    return 80;
  } else if (window.localStorage['happiness'] !== undefined) {
    return JSON.parse(window.localStorage['happiness'])['value'];
  }
}

var sleepFunc = function() {
  if (window.localStorage['sleep'] === undefined) {
    return 80;
  } else if (window.localStorage['sleep'] !== undefined) {
    return JSON.parse(window.localStorage['sleep'])['value'];
  }
}

var Pet = function(name) {
  var obj = Object.create(Pet.prototype);
  obj.name = name;
  obj.age = 1;
  obj.hunger = hungerFunc();
  obj.thirst = thirstFunc();
  obj.happiness = happinessFunc();
  obj.sleep = sleepFunc();

  return obj;
};

var d = new Date();
// when feed btn is clicked, adds 5 to hunger
Pet.prototype.feed = function(food) {
  if (this.hunger + food <= 100) {
    this.hunger += food;
  }
}

// Pet.prototype.decayFeed = function(decay) {
//   if (this.hunger - decay > 0 ) {
//     this.hunger -= decay;
//   };
// }

var newPet = Pet('Ginger');