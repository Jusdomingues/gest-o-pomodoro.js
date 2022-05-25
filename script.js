const circleElement = document.querySelector('.circle');
const timeElement = document.querySelector('.time');
const timeModeElement = document.querySelector('.time-mode');
const turnElement = document.querySelector('.turns');
const controlButton = document.querySelector('.timer-control');
const resetButton = document.querySelector('.reset-button');

let isRunning,
    isBreakTime,
    workTime,
    breakTime, 
    longBreakTime,
    totalTurns,
    currentTurn,
    totalTime,
    timeRemaining,
    timer;

function startValues(){
    isRunning = false;
    isBreakTime = false;
    workTime = 25 * 60;
    breakTime = 5 * 60;
    longBreakTime = 15 * 60;
    totalTurns = 4;
    currentTurn = 1;
    totalTime = worktime;
    timeRemaining = totalTime;
    timer = null;


}