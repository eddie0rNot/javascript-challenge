function defTable(){  

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log from data.js
console.log(data);

// Step 5: Use d3 to update each cell's text with
// weather report values (weekday, date, high, low)
 data.forEach(function(ufoSighting) {
   console.log(ufoSighting);
   var row = tbody.append("tr");
   Object.entries(ufoSighting).forEach(function([key, value]) {
     console.log(key, value);
// Append a cell to the row for each value
// in the weather report object
     var cell = row.append("td");
     cell.html(value);
   });
 });
};
 // Select the form

// Complete the event handler function for the form
function runEnter(){
    var sightings = data;

    var form = d3.select("#dateInput");
    var button = d3.select("#filter-btn");
  
  // Create event handlers 
    button.on("click", runEnter);
    form.on("submit", runEnter);
  
  // Select the input element and get the raw HTML node
    var inputElement = d3.select("#dateInput");

  // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(sightings);

    var tbody = d3.select("tbody");

    var filteredData = data.filter(sighting => sighting.datetime === inputValue);
  
    console.log(filteredData);

    filteredData.forEach(function(filteredData) {
      console.log(filteredData);
      var row = tbody.append("tr");
      Object.entries(filteredData).forEach(function([key, inputValue]) {
        console.log(key, inputValue);
  // Append a cell to the row for each value
  // in the weather report object
        var cell = row.append("td");
        cell.html(inputValue);
    });
  });
};
 

