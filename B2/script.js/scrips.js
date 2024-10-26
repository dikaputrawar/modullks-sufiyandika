let timer;
let time = 0;
let isRunning = false;

const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
const timeDisplay = document.getElementById('time');

function updateDisplay() {
    const minutes = String(Math.floor(time / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');
    timeDisplay.textContent = `${minutes}:${seconds}`;
}

startBtn.addEventListener('click', () => {
    if (!isRunning) {
        timer = setInterval(() => {
            time++;
            updateDisplay();
        }, 1000);
        isRunning = true;
    }
});

stopBtn.addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
});

resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    time = 0;
    updateDisplay();
    isRunning = false;
});

updateDisplay();
