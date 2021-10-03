// from data.js
var tableData = data;

// YOUR CODE HERE!

// Selecting table body
var tbody = d3.select("tbody");
console.log()
function createtable(TableData, body){
    //console.log(TableData)
    TableData.forEach(function(ufo){
        var row = body.append("tr");
        Object.values(ufo).forEach(function(value){
            row.append("td").text(value);
        });
    });
    return TableData;
};

// Printing table
createtable(tableData, tbody);


// Selecting Button and Form
var form = d3.select("#form");

// Creating event handlers
form.on("change", runEnter);

// Filter Function for Date
function filter_by_date(fil_data){
    // Selecting user input
    var inputElement = d3.select("#datetime");
    var inputDate = inputElement.property("value");

    // Creating new filtered data based on input if given
    if(inputDate){
        var filteredData = fil_data.filter(ufo => ufo.datetime === inputDate);
        return filteredData
    }
    // if no input given return data in original form
    return fil_data   
};

// Filter Function for City
function filter_by_city(fil_data){
    var inputElement = d3.select("#city");
    var inputCity = inputElement.property("value");

    // Creating new filtered data based on input if given
    if(inputCity){
        var filteredData = fil_data.filter(ufo => ufo.city === inputCity.toLowerCase());
        return filteredData
    }
    // if no input given return data in original form
    return fil_data    
};

// Filter Function for State
function filter_by_state(fil_data){
    var inputElement = d3.select("#state");
    var inputState = inputElement.property("value");

    // Creating new filtered data based on input if given
    if (inputState){
        var filteredData = fil_data.filter(ufo => ufo.state === inputState.toLowerCase());
        return filteredData
    }
    // if no input given return data in original form
    return fil_data    
};

// Filter Function for Country
function filter_by_country(fil_data){
    var inputElement = d3.select("#country");
    var inputCountry = inputElement.property("value");

    // Creating new filtered data based on input if given
    if (inputCountry){    
        var filteredData = fil_data.filter(ufo => ufo.country === inputCountry.toLowerCase());
        return filteredData
    }
    // if no input given return data in original form
    return fil_data    
};

// Filter Function for Shape
function filter_by_shape(fil_data){
    var inputElement = d3.select("#shape");
    var inputShape = inputElement.property("value");

    // Creating new filtered data based on input if given
    if(inputShape){
        var filteredData = fil_data.filter(ufo => ufo.shape === inputShape.toLowerCase());
        return filteredData
    }
    // if no input given return data in original form
    return fil_data    
};

// creating run enter function
function runEnter() {

    // Removing all data from table
    d3.select("tbody").remove();

    // Preventing page from refresh
    d3.event.preventDefault();

    // Crearting new tbody for data 
    var table = d3.select("#ufo-table");
    var t_body = table.append("tbody");
        
    // Calling function to filtered data if input given by user
    var filtered_table = filter_by_date(tableData);
    filtered_table = filter_by_country(filtered_table);
    filtered_table = filter_by_city(filtered_table);
    filtered_table = filter_by_shape(filtered_table);
    filtered_table = filter_by_state(filtered_table);

    // Printing final table based on user input
    createtable(filtered_table, t_body);
    
};
