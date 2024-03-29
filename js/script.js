window.addEventListener('DOMContentLoaded', () => {
    // eslint-disable-next-line strict
    'use strict';
    // Timer
    const countTimer = deadline => {
        const timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');
        let idInterval = 0;

        function getTimeRemaining() {
            const dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000;
            let seconds = 0,
                minutes = 0,
                hours = 0;
            if (timeRemaining > 0) {
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);
            }
            return { timeRemaining, hours, minutes, seconds };
        }

        const zeroElem = elem => {
            if (String(elem).length === 1) { return '0' + elem; } else { return String(elem); }
        };

        const updateClock = () => {
            const timer = getTimeRemaining();
            timerHours.textContent = zeroElem(timer.hours);
            timerMinutes.textContent = zeroElem(timer.minutes);
            timerSeconds.textContent = zeroElem(timer.seconds);

            if (timer.timeRemaining < 0) {
                clearInterval(idInterval);
            }
        };
        updateClock();
        idInterval = setInterval(updateClock, 1000);
    };
    countTimer('19 june 2021');
});

