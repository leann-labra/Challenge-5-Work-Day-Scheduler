//PLANNING AHEAD SO I DONT GET CONFUSED//
//use moment() to add time at top in jumbotron
//add time blocks through jquery
//3 columns for time, input, and button
//append all DOM elements
//9 rows for 9am-5pm
//color code time blocks: past(grey), current(red), future(green)
//do I use moment to color code?...overthinking?
//have current time be equal, lesser or more than the moment value through conditional statements
//set attribute according to time
//functionality:
//want user inputs to schedule appts throughout the day
//user hits save button to store text in input
//use local storage

//---GLOBAL VARIABLES---//
//timestamp variable, will adjust to just include month, day
var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, MMMM Do"));

var presentHour = moment().hour();
//object array of times linked to moment to trigger color coding if statements later
var hours = [
  moment().hour(9).format("hA"),
  moment().hour(10).format("hA"),
  moment().hour(11).format("hA"),
  moment().hour(12).format("hA"),
  moment().hour(13).format("hA"),
  moment().hour(14).format("hA"),
  moment().hour(15).format("hA"),
  moment().hour(16).format("hA"),
  moment().hour(17).format("hA"),
];

//targets element that will hold the user input
var containerEl = $(".container");

//---FUNCTION---//
//function to render the hours list, timeblocks for each hour
//<div class="row time-block">
//<li class=hour list-grou>
//<input class=description>
//<button class=saveBtn>
//---FUNCTION THAT WILL DYNAMICALLY CREATE THE DOM ELEMENTS REQUIRED---//
function renderHours() {
  //create element for timeBlocks using for loop to link hours to each div
  for (var i = 0; i < hours.length; i++) {
    console.log(containerEl);
    //creating a div to arrange elements
    var timeBlockEl = $("<div>");
    //---.row hinted in css, used bootstrap for list style
    timeBlockEl.addClass("row time-block");
    timeBlockEl.attr({
      id: "row-" + (i + 9),
    });
    // console.log(timeBlockEl);
    //----------list of hours---------//
    //| col-1 |       col-10        | col-1 |
    var timeBlockHour = $("<p>");
    timeBlockHour.addClass("col-1 hours");
    timeBlockHour.text(hours[i]);
    timeBlockHour.attr({
      id: i + 9,
    });
    //--------event inputs----------//
    // console.log(timeBlockHour);

    var eventInput = $("<input>");
    eventInput.addClass("col-10 description");
    eventInput.attr({
      id: "event-" + (i + 9),
      type: "text",
    });
    // console.log(eventInput);
    var saved = localStorage.getItem(hours[i]);
    console.log(saved)
    eventInput.val(saved);
    

    var saveBtnEl = $("<button>");
    saveBtnEl.on("click", function(e) {
        // console.log(e);
        var key = e.target.parentElement.children[0].textContent;
        var textSave = e.target.parentElement.children[1].value;
        saveInputs(key, textSave)
    });
    saveBtnEl.addClass("col-1 saveBtn");
    saveBtnEl.attr({
      id: "save-button-" + (i + 9),
      type: "button",
    });
    //almost forgot the icon
    var lockSave = $("<i>");
    lockSave.addClass("fa-solid fa-thumbtack");
    saveBtnEl.append(lockSave);
    //--sorry i wanted a thumbtack instead

    timeBlockEl.append(timeBlockHour, eventInput, saveBtnEl);
    containerEl.append(timeBlockEl);
  }
  eventInputs();
}

function eventInputs() {
  var currentTime = moment().hour();
  // console.log(currentTime);

  //----CONDITIONAL STATEMENTS THAT COLORCODE EVENTS-----//
  //loop over rows, to check times
  var rows = $(".row");
  for (var i = 0; i < rows.length; i++) {
    
    var timeBlockHour = parseInt(rows[i].id.split("-")[1]);

    // console.log(currentTime);
    if (currentTime > timeBlockHour) {
      rows[i].classList += " past";
    }
    if (currentTime == timeBlockHour) {
      rows[i].classList += (".present");
    }
    if (currentTime < timeBlockHour) {
      rows[i].addClass(".future");
    }
  }
  //set different color attributes here according to the time change
}

function saveInputs(key, text) {
    
    console.log(key, text);
    localStorage.setItem(key, text);
    
}
saveInputs();
renderHours();
