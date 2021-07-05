// eslint-disable-next-line strict
"use strict";
const sendForm = () => {
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
    createMessage("form1");
    createMessage("form2");
    createMessage("form3");
};

export default sendForm;
