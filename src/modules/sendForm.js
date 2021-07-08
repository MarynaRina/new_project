// eslint-disable-next-line strict
"use strict";

const sendForm = () => {

    const validForm = currentForm => {
        const name = currentForm.querySelector('.form-name'),
            email = currentForm.querySelector('.form-email'),
            phone = currentForm.querySelector('.form-phone');
        const errors = [];
        if (name.value.length < 2) {
            errors.push('Имя должно быть больше 2 символов');
        } else if (email.value.length < 4) {
            errors.push('Неправильно введен email');
        } else if (phone.value.length < 6 || phone.value.length > 13) {
            errors.push('Телефон может быть не короче 6 и не больше 13 символов');
        }
        return errors;
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
        form.appendChild(statusMessage);
        form.addEventListener("submit", event => {
            event.preventDefault();
            const errors = validForm(form);
            if (errors.length === 0) {
                const formData = new FormData(form);
                const body = {};
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
            } else {
                statusMessage.textContent = errors[0];
                setTimeout(() => {
                    statusMessage.textContent = '';
                }, 3000);
            }
        });
    };
    createMessage("form1");
    createMessage("form2");
    createMessage("form3");
};

export default sendForm;
