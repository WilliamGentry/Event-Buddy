function pasteSelection() {

           chrome.tabs.executeScript( {
  code: "window.getSelection().toString();"
}, function(selection) {
    var text = document.getElementById('text'); 
    text.innerHTML = selection[0];;
    console.log(selection[0]);

var sherlocked = Sherlock.parse(selection[0]);
 
// Basic properties
var title = sherlocked.eventTitle;    // 'Homework 5 due'
var startDate = sherlocked.startDate; // Date object pointing to next monday at 3pm
var endDate = sherlocked.endDate;     // null in this case, since no duration was given
var isAllDay = sherlocked.isAllDay;   // false, since a time is included with the event
 
// Example of an additional custom property added by Watson
var validated = sherlocked.validated; // true
console.log(title,startDate,endDate,isAllDay)
});
 
}

pasteSelection(); 





