function displayTime(){
    let time = new Date();
    let hours = String(time.getHours()).padStart(2, '0');
    let minutes = String(time.getMinutes()).padStart(2, '0');
    let seconds = String(time.getSeconds()).padStart(2, '0');
    document.getElementById('NowTime').innerHTML = hours+':'+minutes+':'+seconds;
}

displayTime();
setInterval(displayTime, 1000);

// Script by https://stickode.tistory.com/230

let timerId;
let time = 0;
const stopwatch = document.getElementById("stopwatch");
let  hour, min, sec;

function printTime() {
    time++;
    stopwatch.innerText = getTimeFormatString();
}

function startClock() {
    printTime();
    stopClock();
    timerId = setTimeout(startClock, 1000);
}

function stopClock() {
    if (timerId != null) {
        clearTimeout(timerId);
    }
}

function resetClock() {
    stopClock()
    stopwatch.innerText = "00:00:00";
    time = 0;
}

function getTimeFormatString() {
    hour = parseInt(String(time / (60 * 60)));
    min = parseInt(String((time - (hour * 60 * 60)) / 60));
    sec = time % 60;

    return String(hour).padStart(2, '0') + ":" + String(min).padStart(2, '0') + ":" + String(sec).padStart(2, '0');
}