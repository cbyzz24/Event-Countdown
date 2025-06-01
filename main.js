
function updateTimeCount(){
    let currentDate = Date.parse(new Date());
    let eventDate = Date.parse(new Date("August, 29 2025 00:00:00"));
    let timeGap = eventDate - currentDate;
    const dayEl = document.getElementById("dayCount");
    const hourEl = document.getElementById("hourCount");
    const minuteEl = document.getElementById("minuteCount");
    const secondEl = document.getElementById("secondCount");

    dayEl.value = Math.floor(timeGap / (1000 * 60 * 60 * 24));
    hourEl.value = Math.floor(timeGap / (1000 * 60 * 60)%24);
    minuteEl.value = Math.floor(timeGap / (1000 * 60) % 60);
    secondEl.value = Math.floor(timeGap / (1000) % 60);
}

setInterval(updateTimeCount, 1000);
