//variables list per function 

var hoursListEl = $('#hours');
console.log(hoursListEl);
//function for rendering list of hours
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
for (var i=0; i < hours.length; i++) {
    //creating hours list element
    var hourslist = $('<li');
    //adding bootstrap class to list el
    hourslist.addClass('list-group list-group-flush');
    //assigning atttribute to hours
    hourslist.attr('data-time', hours[i]);
    //appending list of hours to timelistEl
    hoursListEl.append(hourslist);
}
}

