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

    //slider-dots
    const addDot = () => {
        const portfolioItem = document.querySelectorAll('.portfolio-item'),
            portfolioDots = document.querySelector('.portfolio-dots');

        portfolioItem.forEach(() => {
            const dot = document.createElement('li');
            dot.classList.add('dot');
            portfolioDots.appendChild(dot);
        });
        portfolioDots.children[0].classList.add('dot-active');
    };
    addDot();

    // slider
    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            btn = document.querySelectorAll('.portfolio-btn'),
            dot = document.querySelectorAll('.dot'),
            slider = document.querySelector('.portfolio-content');

        let currentSlide = 0,
            interval;

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        const startSlide = (time = 2000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', event => {
            event.preventDefault();

            const target = event.target;

            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }

            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }

            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }

            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');

        });

        slider.addEventListener('mouseover', event => {
            if (event.target.matches('.portfolio-btn') ||
            event.target.matches('.dot')) {
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', event => {
            if (event.target.matches('.portfolio-btn') ||
            event.target.matches('.dot')) {
                startSlide();
            }
        });
        startSlide(1500);
    };
    slider();

    // change photo
    const commandPhoto = () => {
        const img = document.querySelectorAll('.command__photo');

        img.forEach(element => {
            element.addEventListener('mouseenter', event => {
                const src = event.target.src;

                event.target.src = event.target.dataset.img;
                event.target.dataset.img = src;
            });

            element.addEventListener('mouseleave', event => {
                const src = event.target.src;

                event.target.src = event.target.dataset.img;
                event.target.dataset.img = src;
            });
        });

    };
    commandPhoto();

    // validation
    const inputValidation = () => {
        const calcElem = () => {
            const sumPlace = document.querySelectorAll('.calc-item');
            sumPlace.forEach(input => {
                input.addEventListener('input', function() {
                    this.value = this.value.replace(/[^\d]/g, '');
                });
            });
        };
        calcElem();

        const form = () => {
            const mess = document.querySelector('.mess'),
                name = document.getElementById('form1-name'),
                email = document.getElementById('form1-email'),
                phone = document.getElementById('form1-phone'),
                nameTwo = document.getElementById('form2-name'),
                emailTwo = document.getElementById('form2-email'),
                phoneTwo = document.getElementById('form2-phone'),
                nameThree = document.getElementById('form3-name'),
                emailThree = document.getElementById('form3-email'),
                phoneThree = document.getElementById('form3-phone');

            //1
            mess.addEventListener('blur', event => {
                event.target.value = event.target.value.replace(/([^а-яё -])/gi, '');
                event.target.value = event.target.value.replace(/( \s+)(^\s*$)/gi, '');
                event.target.value = event.target.value.split(' ').filter(n => n).join(' ');
                event.target.value = event.target.value.replaceAll(event.target.value.match(/-+/), '-');
                event.target.value = event.target.value.replaceAll(event.target.value.match(/ +/), ' ');
            });

            name.addEventListener('blur', event => {
                event.target.value = event.target.value.replace(/[^а-яё -]/gi, '');
                event.target.value = event.target.value.replace(/( \s+)(^\s*$)/gi, '');
                event.target.value = event.target.value.split(' ').filter(n => n).join(' ');
                event.target.value = event.target.value.split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join(" ");
                event.target.value = event.target.value.replaceAll(event.target.value.match(/-+/), '-');
                event.target.value = event.target.value.replaceAll(event.target.value.match(/ +/), ' ');
            });


            email.addEventListener('blur', event => {
                event.target.value = event.target.value.replace(/[^a-z@-_.!~*']/gi, '');
                event.target.value = event.target.value.replace(/( \s+)(^\s*$)/gi, '');
                event.target.value = event.target.value.split(' ').filter(n => n).join(' ');
                event.target.value = event.target.value.replaceAll(event.target.value.match(/-+/), '-');
                event.target.value = event.target.value.replaceAll(event.target.value.match(/ +/), ' ');
            });

            phone.addEventListener('blur', event => {
                event.target.value = event.target.value.replace(/([^0-9 () -])/gi, '');
                event.target.value = event.target.value.replace(/( \s+)(^\s*$)/gi, '');
                event.target.value = event.target.value.split(' ').filter(n => n).join(' ');
                event.target.value = event.target.value.replaceAll(event.target.value.match(/-+/), '-');
                event.target.value = event.target.value.replaceAll(event.target.value.match(/ +/), ' ');
            });

            // 2
            nameTwo.addEventListener('blur', event => {
                event.target.value = event.target.value.replace(/[^а-яё -]/gi, '');
                event.target.value = event.target.value.replace(/( \s+)(^\s*$)/gi, '');
                event.target.value = event.target.value.split(' ').filter(n => n).join(' ');
                event.target.value = event.target.value.split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join(" ");
                event.target.value = event.target.value.replaceAll(event.target.value.match(/-+/), '-');
                event.target.value = event.target.value.replaceAll(event.target.value.match(/ +/), ' ');
            });


            emailTwo.addEventListener('blur', event => {
                event.target.value = event.target.value.replace(/[^a-z@-_.!~*']/gi, '');
                event.target.value = event.target.value.replace(/( \s+)(^\s*$)/gi, '');
                event.target.value = event.target.value.split(' ').filter(n => n).join(' ');
                event.target.value = event.target.value.replaceAll(event.target.value.match(/-+/), '-');
                event.target.value = event.target.value.replaceAll(event.target.value.match(/ +/), ' ');
            });

            phoneTwo.addEventListener('blur', event => {
                event.target.value = event.target.value.replace(/([^0-9 () -])/gi, '');
                event.target.value = event.target.value.replace(/( \s+)(^\s*$)/gi, '');
                event.target.value = event.target.value.split(' ').filter(n => n).join(' ');
                event.target.value = event.target.value.replaceAll(event.target.value.match(/-+/), '-');
                event.target.value = event.target.value.replaceAll(event.target.value.match(/ +/), ' ');
            });

            //3
            nameThree.addEventListener('blur', event => {
                event.target.value = event.target.value.replace(/[^а-яё -]/gi, '');
                event.target.value = event.target.value.replace(/( \s+)(^\s*$)/gi, '');
                event.target.value = event.target.value.split(' ').filter(n => n).join(' ');
                event.target.value = event.target.value.split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join(" ");
                event.target.value = event.target.value.replaceAll(event.target.value.match(/-+/), '-');
                event.target.value = event.target.value.replaceAll(event.target.value.match(/ +/), ' ');
            });


            emailThree.addEventListener('blur', event => {
                event.target.value = event.target.value.replace(/[^a-z@-_.!~*']/gi, '');
                event.target.value = event.target.value.replace(/( \s+)(^\s*$)/gi, '');
                event.target.value = event.target.value.split(' ').filter(n => n).join(' ');
                event.target.value = event.target.value.replaceAll(event.target.value.match(/-+/), '-');
                event.target.value = event.target.value.replaceAll(event.target.value.match(/ +/), ' ');
            });

            phoneThree.addEventListener('blur', event => {
                event.target.value = event.target.value.replace(/([^0-9 () -])/gi, '');
                event.target.value = event.target.value.replace(/( \s+)(^\s*$)/gi, '');
                event.target.value = event.target.value.split(' ').filter(n => n).join(' ');
                event.target.value = event.target.value.replaceAll(event.target.value.match(/-+/), '-');
                event.target.value = event.target.value.replaceAll(event.target.value.match(/ +/), ' ');
            });
        };
        form();
    };
    inputValidation();
});





