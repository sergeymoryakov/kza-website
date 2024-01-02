import "./styles/index.css";
import "./components/ButtonToggleLess.js";
import "./components/ButtonToggleMore.js";
import "./components/LinkToggleTouchWhite.js";
import "./components/LinkToggleTouchBlack.js";
import "./components/LinkIconTouchWhite.js";
import "./components/LinkHomeWhite.js";
import "./components/Card.js";
import { cardsData } from "./components/cardsData.js";

import { setupCounter } from "./counter.js";

const BODY_FIXED_CLASSNAME = "body-fixed";
const MENU_LINKS_HIDE_CLASSNAME = "hide";
const MENU_GETINTOUCH_HIDE_CLASSNAME = "hide";
const MENU_DROPDOWN_BUTTON_ACTIVE_CLASSNAME = "active";
const MENU_DROPDOWN_ACTIVE_CLASSNAME = "active";

const bodyNode = document.querySelector("body");
const cardsGrid = document.getElementById("cardsGrid");
const menuLinksNode = document.querySelector(".menu-top__links");
const menuGetintouchNode = document.getElementById("menuBtnGetintouch");
const burgerButtonNode = document.querySelector(".menu-burger");
const dropdownNode = document.querySelector(".menu-dropdown-wrapper");
const dropdownTextNode = document.querySelector(".menu-dropdown__text");

// functions
function toggleDropdownMenu() {
    // Toggle the 'active' class on both the 'menu-burger'
    bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
    menuLinksNode.classList.toggle(MENU_LINKS_HIDE_CLASSNAME);
    menuGetintouchNode.classList.toggle(MENU_GETINTOUCH_HIDE_CLASSNAME);
    burgerButtonNode.classList.toggle(MENU_DROPDOWN_BUTTON_ACTIVE_CLASSNAME);
    dropdownNode.classList.toggle(MENU_DROPDOWN_ACTIVE_CLASSNAME);
}

// Event Listener for Burger Menu
burgerButtonNode.addEventListener("click", function () {
    toggleDropdownMenu();
});

// Event Listener for Dropdown Menu
dropdownTextNode.addEventListener("click", function () {
    toggleDropdownMenu();
});

// for TBS only - remove in PROD
console.log(cardsData);

cardsData.forEach((card) => {
    const cardElement = document.createElement("card-container");
    cardElement.setAttribute("title", card.title);
    cardElement.setAttribute("icon", `icons/${card.icon}`);
    cardElement.setAttribute("image", `images/${card.image}`);
    cardElement.setAttribute("text", JSON.stringify(card.text));
    cardsGrid.appendChild(cardElement);
});

// document.querySelector("#app").innerHTML = `
//   <div>
//     <h4 class="h4">Welcome to Test Counter:</h4>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//   </div>
// `;

// setupCounter(document.querySelector("#counter"));

// TEST: Button Toggle
// document.querySelector(".toggle-button").addEventListener("click", function () {
//     this.classList.toggle("on");
// });
