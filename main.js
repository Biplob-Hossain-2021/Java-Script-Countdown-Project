// get element form html;
var year = document.getElementById('year');
var day = document.getElementById('day');
var hour = document.getElementById('hour');
var minute = document.getElementById('minute');
var second = document.getElementById('second');

// get the next and current year;


var currentYear = new Date() .getFullYear();
var nextyear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// create Function;
function countTimer(){
    var currentTime = new Date();
    var diff = nextyear - currentTime;
    var d = Math.floor(diff/1000 / 60 / 60 / 24);
    var h = Math.floor(diff/1000 / 60 / 60 ) % 24;
    var m = Math.floor(diff/1000 / 60 ) % 60;
    var s = Math.floor(diff/1000 ) % 60;


    // Write in Html;
    second.innerHTML = s < 10 ? '0' + s : s;
    minute.innerHTML = m < 10 ? '0' + m : m;
    hour.innerHTML = h < 10 ? '0' + h : h;
    day.innerHTML = d < 10 ? '0' + d : d;
    
}
// Brower update
setInterval(countTimer,1000)
countTimer();
// print the yere in html;


year.innerHTML = nextyear.getFullYear();

