// eslint-disable-next-line strict
"use strict";
const toggleMenu = () => {
    const handlerMenu = event => {
        const target = event.target;

        if (
            target.closest(".menu") ||
      (!target.closest("menu") &&
        document.querySelector("menu").classList.contains("active-menu"))
        ) {
            document.querySelector("menu").classList.toggle("active-menu");
        } else if (target.closest("menu") && target.closest('[href^="#"]')) {
            document.querySelector("menu").classList.toggle("active-menu");
        }
    };
    document.body.addEventListener("click", handlerMenu);
};

export default toggleMenu;
