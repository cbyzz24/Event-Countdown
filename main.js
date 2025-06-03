const daysEl = document.getElementById("dayCount");
const hoursEl = document.getElementById("hourCount");
const minutesEl = document.getElementById("minuteCount");
const secondsEl = document.getElementById("secondCount");

function displayCountdown(){
    let currentDay = new Date();
    let eventDay = new Date("August 29, 2025 00:00:00");
    let gap = eventDay - currentDay;
    daysEl.value = Math.floor((gap/(1000 * 60 * 60 * 24)));
    hoursEl.value = Math.floor((gap/(1000 * 60 * 60))%24);
    minutesEl.value = Math.floor((gap/(1000 * 60))%60);
    secondsEl.value = Math.floor((gap/(1000))%60);

}
setInterval(displayCountdown, 1000);
displayCountdown();