// Display current day and date

var currentDayEl = $('#currentDay'); 
var currentDay = moment().format('dddd, MMMM Do');
currentDayEl.text(currentDay); 


//create function to save task
function saveTask(hour, task) {
    localStorage.setItem(hour, task);
}




