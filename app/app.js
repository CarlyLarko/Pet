$(document).ready(function() {
  // hunger object
  var hungerData = {'lastUpdated': new Date().getHours(), 'value': newPet.hunger};
  // thirst object
  var thirstData = {'lastUpdated': new Date().getHours(), 'value': newPet.thirst};
  // happiness object
  var happinessData = {'lastUpdated': new Date().getHours(), 'value': newPet.happiness};
  // sleep object
  var sleepData = {'lastUpdated': new Date().getHours(), 'value': newPet.sleep};
  // name object
  var nameData = {'value': newPet.name};
  // age object
  var ageData = {'lastUpdated': new Date().getHours(), 'value': newPet.age};

  // On page load/refresh, see if key is false
  var isKeyDefined = function(key,obj) {
    if (!localStorage.getItem(key)) {
    // set key value pair
    localStorage.setItem(key, JSON.stringify(obj));
    }
  }

  isKeyDefined('hunger',hungerData);
  isKeyDefined('thirst',thirstData);
  isKeyDefined('happiness',happinessData);
  isKeyDefined('sleep',sleepData);
  isKeyDefined('petName',nameData);
  isKeyDefined('petAge',ageData);



  var valueFunc = function(string) {
    // get key hunger's value
    var retrieveValue = localStorage.getItem(string);
    // parses JSON string, constructs object
    var json = JSON.parse(retrieveValue);
    // set obj.value to updated hunger
    json.value =  newPet[string];
    // reset lastUpdated to 0 when btn is clicked;
    json.lastUpdated = new Date().getHours();
    // reset obj.value to new hunger value
    localStorage.setItem(string, JSON.stringify(json));
  }

  var decayStatus = function(key) {
  var diff;
  // get hunger values
  var retrievelastUpdatedValue = window.localStorage.getItem(key);
  // parse hunger values
  jsonLastUpdated = JSON.parse(retrievelastUpdatedValue);
  // determine make mins
    if (jsonLastUpdated.lastUpdated >= new Date().getHours()) {
    // Should decay every hour, from when key value was created
      diff = jsonLastUpdated.lastUpdated - new Date().getHours();
    // decay hunger value by diff var
    jsonLastUpdated.value -= diff;
    } else if (jsonLastUpdated.lastUpdated < new Date().getHours()) {
      // produce - number
      diff = jsonLastUpdated.lastUpdated - new Date().getHours();
      jsonLastUpdated.value += diff;
    }
    // so does not capture time from last feed
    localStorage.setItem(key, JSON.stringify(jsonLastUpdated));
  }

  decayStatus('hunger');
  decayStatus('thirst');
  decayStatus('happiness');
  decayStatus('sleep');


  // update newPet hunger on feed btn click
  $('.feed-btn').on("click", function(event) {
   // updates newPet's hunger
    newPet.feed(5);
    valueFunc('hunger');
  });
  // update newPet thirst on thirst btn click
  $('.thirst-btn').on("click", function(event) {
    newPet.water(5);
    valueFunc('thirst');
  });
  // update newPet happiness on btn click
  $('.play-btn').on("click",function(event) {
    newPet.play(5);
    valueFunc('happiness');
  });
  // update newPet sleep on btn click
  $('.sleep-btn').on("click",function(event) {
    newPet.snooze(5);
    valueFunc('sleep');
  });
});