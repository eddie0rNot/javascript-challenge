// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
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
     cell.text(value);
   });
 });