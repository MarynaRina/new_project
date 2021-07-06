// eslint-disable-next-line strict
"use strict";

import countTimer from './modules/countTimer';
import clickAndScroll from "./modules/clickAndScroll";
import toggleMenu from "./modules/toggleMenu";
import togglePopUp from "./modules/togglePopUp";
import tabs from "./modules/tabs";
import sliderDots from "./modules/sliderDots";
import slider from "./modules/slider";
import changePhoto from "./modules/changePhoto";
import inputValidation from "./modules/inputValidation";
import calc from "./modules/calc";
import sendForm from "./modules/sendForm";

// timer
countTimer("9 July 2021");

// scroll
clickAndScroll();

// menu
toggleMenu();

// pop-up
togglePopUp();

// tabs
tabs();

//slider-dots
sliderDots();

// slider
slider();

// change photo
changePhoto();

// validation
inputValidation();

//calculator
calc(100);

// send-ajax-form
sendForm();
