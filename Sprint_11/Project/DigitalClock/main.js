setInterval(currentTime, 1000);


function currentTime() {
    let time = new Date();
    let dayDisplay = time.getDay();
    let hours = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();
    let month = time.getMonth();
    let year = time.getFullYear();
    let date = time.getDate();

    let am_pm = "AM";

    if (hours === 12) {
        am_pm = "PM";
    }

    if (hours > 12) {
        hours -= 12;
        am_pm = "PM";
    }
    if (hours === 0) {
        hours = 12;
        am_pm = "AM";
    }

    hours = hours < 10 ? `0${hours}` : hours;
    mins = mins < 10 ? `0${mins}` : mins;
    secs = secs < 10 ? `0${secs}` : secs;

    let currentTime = `${hours} : ${mins} : ${secs}  ${am_pm}`;

    const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sunday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    let currentDay = week[dayDisplay];
    let currentMonth = months[month];

    let currentDate =`${currentDay}, ${date}th of ${currentMonth} ${year}`;

    const clock = document.getElementById("time");

    const dayIntro = document.getElementById("dayDisplay");

    clock.innerHTML = currentTime;

    dayIntro.innerHTML = currentDate;
}

currentTime();