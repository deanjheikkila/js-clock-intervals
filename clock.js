//var degrees = 0;
var secDegrees = 0;
var minDegrees = 0;
var hourDegrees = 0;
var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");



let secondRotation = function(secToDegree) {
    return (secToDegree / 60 * 360);
}
let minuteRotation = function(minToDegree) {
    return (minToDegree / 60 / 60 * 360)
}
let hourRotation = function(hourToDegree) {
    return (hourToDegree / 60 / 60 / 12 * 360);
}


setInterval(function(){
    // console.log("TICK!");
    hour.style.transform = "rotate(" + hourRotation(hourDegrees) + "deg)";
    hourDegrees++;
    minute.style.transform = "rotate(" + minuteRotation(minDegrees) + "deg)";
    minDegrees++;
    second.style.transform = "rotate(" + secondRotation(secDegrees) + "deg)";
    secDegrees++;
 }, 1000);

