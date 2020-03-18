var getData = function(key) {
  // get key
  var retrieveData = localStorage.getItem(key);
  var json = JSON.parse(retrieveData);
  return json.value;
}



var chart = c3.generate ({
  bindto: '#chart',
  data: {
    columns: [
      ['hunger', getData('hunger')],
      ['thirst', getData('thirst')],
      ['sleep', getData('sleep')],
      ['happiness', getData('happiness')]
    ],
    type: 'gauge',
    onclick: function (d, i) { console.log("onclick", d, i); },
    onmouseover: function (d, i) { console.log("onmouseover", d, i); },
    onmouseout: function (d, i) { console.log("onmouseout", d, i); }
  },
  color: {
    pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'],
    threshold: {
        values: [30, 60, 90, 100]
    }
  },
  size: {
    height: 180
  }
});
chart.transform('gauge');