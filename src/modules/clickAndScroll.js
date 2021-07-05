// eslint-disable-next-line strict
"use strict";
const clickAndScroll = () => {
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    for (const smoothLink of smoothLinks) {
        smoothLink.addEventListener("click", e => {
            e.preventDefault();
            const id = smoothLink.getAttribute("href");

            document.querySelector(id).scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        });
    }
};

export default clickAndScroll;
