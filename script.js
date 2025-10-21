const targetDate = new Date("December 31, 2027 23:59:59").getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const daysCircle = document.querySelector("#days-circle circle:last-child");
const hoursCircle = document.querySelector("#hours-circle circle:last-child");
const minutesCircle = document.querySelector("#minutes-circle circle:last-child");
const secondsCircle = document.querySelector("#seconds-circle circle:last-child");

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        clearInterval(interval);
        document.querySelector(".countdown-wrapper").innerHTML = "<h1>Countdown Ended!</h1>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.innerText = days.toString().padStart(2, "0");
    hoursEl.innerText = hours.toString().padStart(2, "0");
    minutesEl.innerText = minutes.toString().padStart(2, "0");
    secondsEl.innerText = seconds.toString().padStart(2, "0");

    // Animate circles
    const daysDash = 440 - (440 * days) / 365;
    const hoursDash = 440 - (440 * hours) / 24;
    const minutesDash = 440 - (440 * minutes) / 60;
    const secondsDash = 440 - (440 * seconds) / 60;

    daysCircle.style.strokeDashoffset = daysDash;
    hoursCircle.style.strokeDashoffset = hoursDash;
    minutesCircle.style.strokeDashoffset = minutesDash;
    secondsCircle.style.strokeDashoffset = secondsDash;
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();
