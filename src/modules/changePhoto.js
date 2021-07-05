// eslint-disable-next-line strict
"use strict";
const changePhoto = () => {
    const img = document.querySelectorAll(".command__photo");

    img.forEach(element => {
        element.addEventListener("mouseenter", event => {
            const src = event.target.src;

            event.target.src = event.target.dataset.img;
            event.target.dataset.img = src;
        });

        element.addEventListener("mouseleave", event => {
            const src = event.target.src;

            event.target.src = event.target.dataset.img;
            event.target.dataset.img = src;
        });
    });
};

export default changePhoto;
