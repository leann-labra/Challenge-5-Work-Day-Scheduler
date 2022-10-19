//timestamp variable, will adjust to just include month, day
var currentDay = moment();
$('#currentDay').text(currentDay.format('LLLL'));

//hours not defined? maybe jquery is not linked
var hoursListEl = $('#hours');
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
//event list variables
var eventListEl = $('eventList');

//function to render the hours list
function renderHours() {
    //moment time frame here? 
    for (var i = 0; i < hours.length; i++) {
        //creatint hours list element
        var hoursList = $('<li>');
        //adding class to style from bootcamp to newly created list El
        hoursList.addClass('list-group list-group-flush');
        // //setting data attributes to hours
        // hoursList.attr("text", hours[i]);
        //rendering text for each list
        hoursList.text(hours[i]);
        //appending list to hours list element on html
        hoursListEl.append(hoursList);

        // hoursListEl.show();
    };
    console.log(hoursList);
    console.log(hoursListEl);
};
       

function eventInputs() {
    //is input group defined? 
    hoursListEl.append(input-group);

    //include moment here that will change time 

    //set different color attributes here according to the time change
};


function storeInputInfo() {
    //input storage
};

