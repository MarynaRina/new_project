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


    // меню
    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };
        btnMenu.addEventListener('click', handlerMenu);
        closeBtn.addEventListener('click', handlerMenu);
        menuItems.forEach(elem => elem.addEventListener('click', handlerMenu));
    };
    toggleMenu();

    // pop-up



    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupClose = document.querySelector('.popup-close'),
            popupContent = document.querySelector('.popup-content'),

            popupData = {
                count: -500,
                speed: 8,
                start: -500,
                end: 0
            };

        const showPopup = () => {
            if (popupData.start > popupData.end) {
                popupData.count -= popupData.speed;
            } else {
                popupData.count += popupData.speed;
            }
            popupContent.style.transform = `translate(${popupData.count}px)`;

            if (popupData.start > popupData.end ?
                popupData.count > popupData.end :
                popupData.count < popupData.end) {
                requestAnimationFrame(showPopup);
            }
        };
        popupBtn.forEach(elem => {
            elem.addEventListener('click', () => {
                popup.style.display = 'block';
                if (screen.width > 768) {
                    popupData.count = popupData.start;
                    requestAnimationFrame(showPopup);
                } else {
                    popupData.start = 0;
                    popupData.count = 0;
                }
            });
        });
        popupClose.addEventListener('click', () => {
            popup.style.display = 'none';
        });

    };
    togglePopUp();
});

