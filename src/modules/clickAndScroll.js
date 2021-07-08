// eslint-disable-next-line strict
"use strict";
const clickAndScroll = () => {
    const smoothLinks = document.querySelector('.scroll');

    smoothLinks.addEventListener("click", e => {
        e.preventDefault();
        const id = smoothLinks.getAttribute("href");

        document.querySelector(id).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });

};

export default clickAndScroll;
