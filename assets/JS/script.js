// Display current day and date

var currentDayEl = $('#currentDay'); 
var currentDay = moment().format('dddd, MMMM Do');
currentDayEl.text(currentDay); 


