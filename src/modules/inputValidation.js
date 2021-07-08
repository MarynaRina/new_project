/* eslint-disable no-useless-escape */
// eslint-disable-next-line strict
"use strict";
const inputValidation = () => {
    const calcElem = () => {
        const sumPlace = document.querySelectorAll("input.calc-item");
        sumPlace.forEach(input => {
            input.addEventListener("input", function() {
                this.value = this.value.replace(/[^\d]/g, "");
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

        const validPhone = elem =>  {
            elem.addEventListener('blur', event => {
                event.target.value = event.target.value.replace(/( \s+)(^\s*$)/gi, '');
                event.target.value = event.target.value.split(' ').filter(n => n).join(' ');
                event.target.value = event.target.value.replaceAll(event.target.value.match(/-+/), '-');
                event.target.value = event.target.value.replaceAll(event.target.value.match(/ +/), ' ');
            });

            elem.addEventListener('input', event => {
                event.target.value = event.target.value.replace(/[^+\d () -]/g, '');
            });
        };

        const validEmail = elem => {
            elem.addEventListener('blur', event => {
                event.target.value = event.target.value.replace(/( \s+)(^\s*$)/gi, '');
                event.target.value = event.target.value.split(' ').filter(n => n).join(' ');
                event.target.value = event.target.value.replaceAll(event.target.value.match(/-+/), '-');
                event.target.value = event.target.value.replaceAll(event.target.value.match(/ +/), ' ');
            });

            elem.addEventListener('input', event => {
                event.target.value = event.target.value.replace(/[^a-z@-_.!~*']/gi, '');
            });

        };

        const validName = elem => {
            elem.addEventListener('blur', event => {
                event.target.value = event.target.value.replace(/( \s+)(^\s*$)/gi, '');
                event.target.value = event.target.value.split(' ').filter(n => n).join(' ');
                event.target.value = event.target.value.replaceAll(event.target.value.match(/-+/), '-');
                event.target.value = event.target.value.replaceAll(event.target.value.match(/ +/), ' ');
                if (event.target.value) {
                    event.target.value = event.target.value.split(' ').map(e => e[0].toUpperCase() +
                    e.slice(1)).join(" ");
                } else {
                    return;
                }
            });

            elem.addEventListener('input', event => {
                event.target.value = event.target.value.replace(/[^а-яё -]/gi, '');
            });
        };

        //1
        mess.addEventListener('blur', event => {
            event.target.value = event.target.value.replace(/( \s+)(^\s*$)/gi, '');
            event.target.value = event.target.value.split(' ').filter(n => n).join(' ');
            event.target.value = event.target.value.replaceAll(event.target.value.match(/-+/), '-');
            event.target.value = event.target.value.replaceAll(event.target.value.match(/ +/), ' ');
        });

        mess.addEventListener('input', event => {
            event.target.value = event.target.value.replace(/[^а-яё -,.:;()!?"]/gi, '');
        });

        // const validLength = () => {
        //     const form = document.getElementById("form1"),
        //         formTwo = document.getElementById("form2"),
        //         formThree = document.getElementById("form3");

        //     const createDiv = document.createElement("div");
        //     const errorMessage = "Введите данные правильно";
        //     createDiv.style.cssText = "font-size: 2rem; color: red";

        //     form.addEventListener('submit', e => {
        //         if (name.value.length < 2 || email.value.length < 4 || phone.value.length < 6) {
        //             e.preventDefault();
        //             form.appendChild(createDiv);
        //             createDiv.textContent = errorMessage;
        //             return false;
        //         } else {
        //             e.preventDefault();
        //             return true;
        //         }
        //     });

        // };

        validName(name);
        validName(nameTwo);
        validName(nameThree);

        validEmail(email);
        validEmail(emailTwo);
        validEmail(emailThree);

        validPhone(phone);
        validPhone(phoneTwo);
        validPhone(phoneThree);
        // validLength();

    };
    form();
};

export default inputValidation;
