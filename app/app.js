var valueFunc = function(string) {
  // get key hunger's value
  var retrieveValue = localStorage.getItem(string);
  // parses JSON string, constructs object
  var json = JSON.parse(retrieveValue);
  // set obj.value to updated hunger
  json.value =  newPet[string];
  // reset lastUpdated to 0 when btn is clicked;
  json.lastUpdated = new Date().getMinutes();
  // reset obj.value to new hunger value
  localStorage.setItem(string, JSON.stringify(json));
}

$(document).ready(function() {
  // hunger object
  var hungerData = {'lastUpdated': new Date().getMinutes(), 'value': newPet.hunger};
  // On page load/refresh, see if hunger key is false
  if(!localStorage.getItem('hunger')) {
    // set key value pair
    localStorage.setItem('hunger', JSON.stringify(hungerData));
  }

  // calc time difference from page refresh and decays hunger
  var decayHunger = function() {
  // get hunger values
  var retrievelastUpdatedValue = window.localStorage.getItem('hunger');
  // parse hunger values
  jsonLastUpdated = JSON.parse(retrievelastUpdatedValue );
  // Should decay every hour, from when key value was created
  var diff = jsonLastUpdated.lastUpdated - new Date().getMinutes();
  // decay hunger value by diff var
    jsonLastUpdated.value += diff;
  // so does not capture time from last feed
  localStorage.setItem('hunger', JSON.stringify(jsonLastUpdated));
  }

  decayHunger();

  // update newPet hunger on feed btn click
  $('.feed-btn').on("click", function(event) {
   // updates newPet's hunger
    newPet.feed(5);
    valueFunc('hunger');
  });
});