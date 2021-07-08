// eslint-disable-next-line strict
"use strict";
const togglePopUp = () => {
    const popUp = document.querySelector(".popup"),
        popUpBtn = document.querySelectorAll(".popup-btn"),
        popUpContent = document.querySelector(".popup-content"),
        popUpData = {
            count: -500,
            speed: 8,
            start: -500,
            end: 0,
        };

    const showPopup = () => {
        if (popUpData.start > popUpData.end) {
            popUpData.count -= popUpData.speed;
        } else {
            popUpData.count += popUpData.speed;
        }
        popUpContent.style.transform = `translate(${popUpData.count}px)`;

        if (
            popUpData.start > popUpData.end ?
                popUpData.count > popUpData.end :
                popUpData.count < popUpData.end
        ) {
            requestAnimationFrame(showPopup);
        }
    };
    popUpBtn.forEach(elem => {
        elem.addEventListener("click", () => {
            popUp.style.display = "block";
            if (screen.width > 768) {
                popUpData.count = popUpData.start;
                requestAnimationFrame(showPopup);
            } else {
                popUpData.start = 0;
                popUpData.count = 0;
            }
        });
    });

    popUp.addEventListener("click", event => {
        let target = event.target;
        if (target.classList.contains("popup-close")) {
            popUp.style.display = "none";
        } else {
            target = target.closest(".popup-content");
            if (!target) {
                popUp.style.display = "none";
                document.getElementById('form3').reset();
            }
        }
    });
};

export default togglePopUp;
