// eslint-disable-next-line strict
"use strict";
const sliderDots = () => {
    const portfolioItem = document.querySelectorAll(".portfolio-item"),
        portfolioDots = document.querySelector(".portfolio-dots");

    portfolioItem.forEach(() => {
        const dot = document.createElement("li");
        dot.classList.add("dot");
        portfolioDots.appendChild(dot);
    });
    portfolioDots.children[0].classList.add("dot-active");
};

export default sliderDots;
