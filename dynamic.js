//timestamp variable, will adjust to just include month, day
var currentDay = moment();
$('#currentDay').text(currentDay.format('LLLL'));

// var present = moment();

//hours not defined? maybe jquery is not linked
var eventListEl = document.querySelector(".eventList");
var hoursListEl = document.querySelector("#hours");

//event list variables
var eventListEl = $('eventList');

//function to render the hours list
function renderHours() {
    var hours = [
        '9am',
        '10am',
        '11am',
        '12pm',
        '1pm',
        '2pm',
        '3pm',
        '4pm',
        '5pm',
    ]
    //moment time frame here? 
    for (var i = 0; i < hours.length; i++) {
        //create list of hours
        var hoursList = $("<li>");
        //assing style to list
        hoursList.addClass('list-group list-group-flush');
        // // //setting data attributes to hours
        // hoursList.attr('data-time', hours[i]);
        // //rendering text for each list
        hoursList.text(hours[i]);
        // //appending list to hours list element on html
        hoursListEl.append(hoursList);
        // hours.ListEl.show(); 
        // // hoursListEl.show();
    }
};

renderHours();

function eventInputs() {
    //is input group defined? 
    hoursListEl.append(eventListEl);

    //include moment here that will change time 

    //set different color attributes here according to the time change
};


function storeInputInfo() {
    //input storage
};

