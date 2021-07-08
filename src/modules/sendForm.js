// eslint-disable-next-line strict
"use strict";

const sendForm = () => {

    const validForm = () => {
        const name = document.getElementById('form1-name'),
            email = document.getElementById('form1-email'),
            phone = document.getElementById('form1-phone'),
            nameTwo = document.getElementById('form2-name'),
            emailTwo = document.getElementById('form2-email'),
            phoneTwo = document.getElementById('form2-phone'),
            nameThree = document.getElementById('form3-name'),
            emailThree = document.getElementById('form3-email'),
            phoneThree = document.getElementById('form3-phone');


        const form = document.getElementById("form1"),
            formTwo = document.getElementById("form2"),
            formThree = document.getElementById("form3");

        const createDiv = document.createElement("div");
        const errorMessage = "Введите данные правильно";
        createDiv.style.cssText = "font-size: 2rem; color: red";

        form.addEventListener('submit', e => {
            if (name.value.length < 2 || email.value.length < 4 || phone.value.length < 6) {
                e.preventDefault();
                form.appendChild(createDiv);
                createDiv.textContent = errorMessage;
                return false;
            } else {
                e.preventDefault();
                return true;
            }
        });

        formTwo.addEventListener('submit', e => {
            if (nameTwo.value.length < 2 || emailTwo.value.length < 4 || phoneTwo.value.length < 6) {
                e.preventDefault();
                formTwo.appendChild(createDiv);
                createDiv.textContent = errorMessage;
                return false;
            } else {
                e.preventDefault();
                return true;
            }
        });

        formThree.addEventListener('submit', e => {
            if (nameThree.value.length < 2 || emailThree.value.length < 4 || phoneThree.value.length < 6) {
                e.preventDefault();
                formThree.appendChild(createDiv);
                createDiv.textContent = errorMessage;
                return false;
            } else {
                e.preventDefault();
                return true;
            }
        });
    };

    const errorMessage = "Что то пошло не так...",
        loadMessage = "Загрузка...",
        successMessage = "Спасибо! Мы с вами свяжемся!";

    const postData = body =>
        fetch("./server.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

    const createMessage = elemForm => {
        const form = document.getElementById(elemForm);

        const statusMessage = document.createElement("div");
        statusMessage.style.cssText = "font-size: 2rem; color: #fff";

        form.addEventListener("submit", event => {
            const formData = new FormData(form);
            const body = {};

            event.preventDefault();
            form.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;

            formData.forEach((val, key) => {
                body[key] = val;
            });

            postData(body)
                .then(response => {
                    if (response.status !== 200) {
                        throw new Error("status network not 200");
                    }
                    statusMessage.textContent = successMessage;
                    document.getElementById(elemForm).reset();
                })
                .catch(error => {
                    console.error(error);
                    statusMessage.textContent = errorMessage;
                });
        });
    };

    validForm();
    createMessage("form1");
    createMessage("form2");
    createMessage("form3");
};

export default sendForm;
