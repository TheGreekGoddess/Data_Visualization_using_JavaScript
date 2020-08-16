// Import and display data from data.js
var tableData = data;
console.log(tableData);

// YOUR CODE HERE!
// Call the function to load the webpage event in D3
d3.select(window).on("load", buildPage(data));

// Select the filter button
buttonFilter = d3.select("#filter-btn");

// Define the "Filter Table" button function using if and else
buttonFilter.on("click", function(){
    let filterArray = [];
    let tableData = data;
    let date = d3.select("#datetime");
    let city = d3.select("#city");
    let state = d3.select("#state");
    let country = d3.select("#country");
    let shape = d3.select("#shape");
    if(date.property("value").length > 0){
        filterArray.push(s => date.property("value") === s.datetime);
    }
    if(city.property("value").length > 0){
        filterArray.push(s => city.property("value") === s.city);
    }
    if(state.property("value").length > 0){
        filterArray.push(s => state.property("value") === s.state);
    }
    if(country.property("value").length > 0){
        filterArray.push(s => country.property("value") === s.country);
    }
    if(shape.property("value").length > 0){
        filterArray.push(s => shape.property("value") === s.shape);
    }
    filterArray.forEach(f => tableData = tableData.filter(f));
    // If the "Filter Table" button is clicked with 1 to 5 user inputs, display the resulting table
    if(filterArray.length > 0){
        console.log(tableData);
        buildPage(tableData);
    // If the "Filter Table" button is clicked without any inputs, display the entire page will all values
    }else{
        buildPage(data);
    }
});

// Define an input function to take various user inputs and publish the resulting table
function buildPage(input){
    document.getElementById("ufo-table").getElementsByTagName('tbody')[0].innerHTML = "";
    input.forEach((element,index)=>{

        // Peruse the dataset to filter all elements with id="ufo-table":
        let table = document.getElementById("ufo-table").getElementsByTagName('tbody')[0];
        let row = table.insertRow(index);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);
        let cell7 = row.insertCell(6);

        // Add HTML contents of the corresponding elements:
        cell1.innerHTML = element.datetime;
        cell2.innerHTML = element.city;
        cell3.innerHTML = element.state;
        cell4.innerHTML = element.country;
        cell5.innerHTML = element.shape;
        cell6.innerHTML = element.durationMinutes;
        cell7.innerHTML = element.comments;

        index++;
    });
}