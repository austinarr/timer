const timeDisplay = document.getElementById('time-display')
const startButton = document.getElementById('button-start')
const stopButton = document.getElementById('button-stop')
const resetButton = document.getElementById('button-reset')
let ms = 0;
let seconds = 0;
let minutes = 0;

function addTime() {
    ms++;
    if (ms >= 60) {
        ms = 0;
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
    }
    timeDisplay.innerHTML = `${minutes}:${seconds}:${ms}`
};

startButton.addEventListener("click", button => {
    start();
})

stopButton.addEventListener("click", button => {
    stop();
})

resetButton.addEventListener("click", button => {
    reset();
})

let interval = '';

function start () {
    interval = setInterval(() => {
        addTime();
    }, 100);
}

function stop () {
    clearInterval(interval)
}

function reset () {
    clearInterval(interval)
    interval = 0;
    ms = 0;
    seconds = 0;
    hours = 0;
    timeDisplay.innerHTML = "00:00:00"
}