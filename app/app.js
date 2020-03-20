$(document).ready(function() {
  // hunger object
  var hungerData = {'lastUpdated': new Date().getMinutes(), 'value': newPet.hunger};
  // thirst object
  var thirstData = {'lastUpdated': new Date().getMinutes(), 'value': newPet.thirst};
  // happiness object
  var happinessData = {'lastUpdated': new Date().getMinutes(), 'value': newPet.happiness};
  // sleep object
  var sleepData = {'lastUpdated': new Date().getMinutes(), 'value': newPet.sleep};
  // name object
  var nameData = {'value': newPet.name};
  // age object
  var ageData = {'lastUpdated': new Date().getMinutes(), 'value': newPet.age};

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
  isKeyDefined('petAge',ageData);
  // isKeyDefined('avatar',avatarData);
  isKeyDefined('petName',nameData);

  // used for setData
  var getData = function(key) {
    var retrieveData = localStorage.getItem(key);
    var json = JSON.parse(retrieveData);
    return json.value;
  }

  var dataSet = [
    ['hunger', getData('hunger')],
    ['thirst', getData('thirst')],
    ['sleep', getData('sleep')],
    ['happiness', getData('happiness')],
  ];


  var chart = c3.generate ({
    bindto: '#chart',
    data: {
    type: 'gauge',
      columns:
         [['hunger', getData('hunger')]],
    },
    gauge: {
      "fullCircle": true,
      "label": {
        "show": false
      }
    },
    color: {
      pattern:['orange']
    }
  });
  // chart.transform('gauge');
  var chart = c3.generate ({
    bindto: '#chart1',
    data: {
    type: 'gauge',
      columns:[['thirst', getData('thirst')]],
    },
    gauge: {
      "fullCircle": true,
      "label": {
        "show": false
      }
    },
    color: {
      pattern:['rgb(81, 191, 235)']
    }
  });

  var chart = c3.generate ({
    bindto: '#chart2',
    data: {
    type: 'gauge',
      columns:[['sleep', getData('sleep')]],
    },
    gauge: {
      "fullCircle": true,
      "label": {
        "show": false
      }
    },
    color: {
      pattern:['darkblue']
    }
  });

  var chart = c3.generate ({
    bindto: '#chart3',
    data: {
    type: 'gauge',
      columns:[['happiness', getData('happiness')]],
    },
    gauge: {
      "fullCircle": true,
      "label": {
        "show": false
      }
    },
    // color: {
    //   pattern:['yellow']
    // }
  });

  var render = function() {
    chart.load({columns:dataSet});
    location.reload();
  };

  // // clears localStorage and resets pet if any hunger,thirst,happiness or sleep reach 0
  var clearAndReset = function(key) {
    var retrievepetName = localStorage.getItem('petName');
    var jsonPetName = JSON.parse(retrievepetName);
    var retrieveValue = localStorage.getItem(key);
    var json = JSON.parse(retrieveValue);
    if (json.value <= 0) {
      alert(`Oh no! ${jsonPetName.value} passed away due to not being taken care of`);
      document.getElementById('grown-Pet').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/White_dot.svg/1200px-White_dot.svg.png"
      window.localStorage.clear();
      location.reload();
    }
  }

  clearAndReset('hunger');
  clearAndReset('thirst');
  clearAndReset('happiness');
  clearAndReset('sleep');


  var valueFunc = function(string) {
    // get key hunger's value
    var retrieveValue = localStorage.getItem(string);
    // parses JSON string, constructs object
    var json = JSON.parse(retrieveValue);
    // set obj.value to updated value
    json.value =  newPet[string];
    // reset lastUpdated to 0 when btn is clicked;
    json.lastUpdated = new Date().getMinutes();
    // reset obj.value to new value
    localStorage.setItem(string, JSON.stringify(json));
  }

  var decayStatus = function(key) {
  var diff;
  // get hunger values
  var retrievelastUpdatedValue = window.localStorage.getItem(key);
  // parse hunger values
  jsonLastUpdated = JSON.parse(retrievelastUpdatedValue);
  // determine make mins
    if (jsonLastUpdated.lastUpdated >= new Date().getMinutes()) {
    // Should decay every hour, from when key value was created
      diff = jsonLastUpdated.lastUpdated - new Date().getMinutes();
    // decay hunger value by diff var
    jsonLastUpdated.value -= diff;
    } else if (jsonLastUpdated.lastUpdated < new Date().getMinutes()) {
      // produce - number
      diff = jsonLastUpdated.lastUpdated - new Date().getMinutes();
      jsonLastUpdated.value += diff;
    }
    // so does not capture time from last feed
    localStorage.setItem(key, JSON.stringify(jsonLastUpdated));
  }

  decayStatus('hunger');
  decayStatus('thirst');
  decayStatus('happiness');
  decayStatus('sleep');
  // decayStatus('petAge');


  // update newPet hunger on feed btn click
  $('.feed-btn').on("click", function(event) {
   // updates newPet's hunger
    newPet.feed(5);
    valueFunc('hunger');
    render();
  });
  // update newPet thirst on thirst btn click
  $('.thirst-btn').on("click", function(event) {
    newPet.water(5);
    valueFunc('thirst');
    render();
  });
  // update newPet happiness on btn click
  $('.play-btn').on("click",function(event) {
    newPet.play(5);
    valueFunc('happiness');
    render();
  });
  // update newPet sleep on btn click
  $('.sleep-btn').on("click",function(event) {
    newPet.snooze(5);
    valueFunc('sleep');
    render();
  });

  // Elements on page

  $('.heading').html(getData('petName')).addClass('petName');
});