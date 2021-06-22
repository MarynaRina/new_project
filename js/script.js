window.addEventListener('DOMContentLoaded', () => {
    // eslint-disable-next-line strict
    'use strict';
    // timer
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

    // scroll
    const clickAndScroll = () => {
        const smoothLinks = document.querySelectorAll('a[href^="#"]');
        for (const smoothLink of smoothLinks) {
            smoothLink.addEventListener('click', e => {
                e.preventDefault();
                const id = smoothLink.getAttribute('href');

                document.querySelector(id).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        }
    };
    clickAndScroll();

    // menu
    const toggleMenu = () => {
        const handlerMenu = event => {
            const target = event.target;

            if (target.closest('.menu') || (!target.closest('menu') &&
				document.querySelector('menu').classList.contains('active-menu'))) {
                document.querySelector('menu').classList.toggle('active-menu');
            } else if (target.closest('menu') && target.closest('[href^="#"]')) {
                document.querySelector('menu').classList.toggle('active-menu');
            }
        };
        document.body.addEventListener('click', handlerMenu);
    };
    toggleMenu();

    // pop-up
    const togglePopUp = () => {
        const popUp = document.querySelector('.popup'),
            popUpBtn = document.querySelectorAll('.popup-btn'),
            popUpContent = document.querySelector('.popup-content'),

            popUpData = {
                count: -500,
                speed: 8,
                start: -500,
                end: 0
            };

        const showPopup = () => {
            if (popUpData.start > popUpData.end) {
                popUpData.count -= popUpData.speed;
            } else {
                popUpData.count += popUpData.speed;
            }
            popUpContent.style.transform = `translate(${popUpData.count}px)`;

            if (popUpData.start > popUpData.end ?
                popUpData.count > popUpData.end :
                popUpData.count < popUpData.end) {
                requestAnimationFrame(showPopup);
            }
        };
        popUpBtn.forEach(elem => {
            elem.addEventListener('click', () => {
                popUp.style.display = 'block';
                if (screen.width > 768) {
                    popUpData.count = popUpData.start;
                    requestAnimationFrame(showPopup);
                } else {
                    popUpData.start = 0;
                    popUpData.count = 0;
                }
            });
        });



        popUp.addEventListener('click', event => {
            let target = event.target;

            if (target.classList.contains('popup-close')) {
                popUp.style.display = 'none';
            } else {
                target = target.closest('.popup-content');
                if (!target) {
                    popUp.style.display = 'none';
                }
            }
        });

    };
    togglePopUp();

    // tabs
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = index => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };

        tabHeader.addEventListener('click', event => {
            let target = event.target;
            target = target.closest('.service-header-tab');
            if (target) {
                tab.forEach((item, i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    }
                });
            }
        });
    };
    tabs();

});





