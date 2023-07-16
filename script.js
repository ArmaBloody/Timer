const hour = document.querySelector(".hour")
const minute = document.querySelector(".minute")
const second = document.querySelector(".second")
const millisecond = document.querySelector(".millisecond")
const startbtn = document.querySelector(".start")
const pausebtn = document.querySelector(".pause")
const stopbtn = document.querySelector('.stop')

let interval;
let milliseconds = 10;
let seconds = 0;
let minutes = 0;
let hours = 0;

const startTimer = () => {
    milliseconds++;
    millisecond.innerHTML = milliseconds;
    if (milliseconds > 99) {
        seconds++;
        second.innerHTML = '0' + seconds;
        milliseconds = 0;
    }
    if (seconds > 9) {
        second.innerHTML = seconds;
    }

    if (seconds > 59) {
        minutes++;
        minute.innerHTML = '0' + minutes;
        seconds = 0;
        second.innerHTML = '0' + seconds;
    }
    if (minutes > 9) {
        minute.innerHTML = minutes;
    }
    if (minutes > 59) {
        hours++;
        hour.innerHTML = '0' + hours;
        minutes = 0;
        minute.innerHTML = '0' + minutes;
    }
    if (hours > 9) {
        hour.innerHTML = hours
    }
}

startbtn.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})
pausebtn.addEventListener('click', () => {
    clearInterval(interval)
})
stopbtn.addEventListener('click', () => {
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

    millisecond.innerHTML = '00'
    second.innerHTML = '00'
    minute.innerHTML = '00'
    hour.innerHTML = '00'

})
