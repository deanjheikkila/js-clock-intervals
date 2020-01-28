//var degrees = 0;
var hourDegrees = 0;
var minDegrees = 0;
var secDegrees = 0;
var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");
var now = new Date();


// console.log(now.getMinutes()/60*360);
// console.log(now.getHours()/12*360);

let secondRotation = function(secToDegree) {
    return (secToDegree / 60 * 360);
}
let minuteRotation = function(minToDegree) {
    return (minToDegree / 60 / 60 * 360)
}
let hourRotation = function(hourToDegree) {
    return (hourToDegree / 60 / 60 / 12 * 360);
}

let initHour = (now.getHours()/12*360);
let initMin = secondRotation(now.getMinutes());
let initSec = secondRotation(now.getSeconds());

minute.style.transform = "rotate(" +(initMin) + "deg)";
second.style.transform = "rotate(" +(initSec) + "deg)";
hour.style.transform = "rotate(" +(initHour) + "deg)";

setInterval(function(){
    // console.log("TICK!");
    hour.style.transform = "rotate(" + (hourRotation(hourDegrees) + initHour) + "deg)";
    hourDegrees++;
    minute.style.transform = "rotate(" + (minuteRotation(minDegrees) + initMin) + "deg)";
    minDegrees++;
    second.style.transform = "rotate(" + (secondRotation(secDegrees) + initSec) + "deg)";
    secDegrees++;
    console.log(minDegrees);
 }, 1000);

