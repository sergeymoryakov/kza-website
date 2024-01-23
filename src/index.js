import "./styles/index.css";
import "./components/ToggleAnimationWhite.js";
import "./components/ButtonToggleLess.js";
import "./components/ButtonToggleMore.js";
import "./components/LinkToggleTouchWhite.js";
import "./components/LinkToggleTouchBlack.js";
import "./components/LinkIconTouchWhite.js";
import "./components/LinkHomeWhite.js";
import "./components/Card.js";

// import data for cards in services section
import { cardsData } from "./components/cardsData.js";

// initialize variables
const BODY_FIXED_CLASSNAME = "body-fixed";
const MENU_ANIMATION_ON_CLASSNAME = "dynamic";
const MENU_LINKS_HIDE_CLASSNAME = "hide";
const MENU_GETINTOUCH_HIDE_CLASSNAME = "hide";
const MENU_DROPDOWN_BUTTON_ACTIVE_CLASSNAME = "active";
const MENU_DROPDOWN_ACTIVE_CLASSNAME = "active";
const MODAL_WINDOW_ACTIVE_CLASSNAME = "modal-window-active";
const VISUAL_FADE_IN = "fade-in";
const VISUAL_FADE_OUT = "fade-out";

// initialize DOM nodes
const bodyNode = document.querySelector("body");
const cardsGrid = document.getElementById("cardsGrid");
const menuLinksNode = document.querySelector(".menu-top__links");
const menuToggleAnimationBtnNode = document.querySelector(
    ".toggle-animation-white"
);
const menuGetintouchNode = document.getElementById("menuBtnGetintouch");
const burgerButtonNode = document.querySelector(".menu-burger");
const dropdownNode = document.querySelector(".menu-dropdown-wrapper");
const dropdownTextNode = document.querySelector(".menu-dropdown__text");

// animation nodes
const imagesNode = document.querySelectorAll(".image-2d");
const videosNode = document.querySelectorAll(".image-3d");

// modal window nodes
const modalWindowNode = document.getElementById("modalWindow");
const modalOpenBtnNode = document.getElementById("modalOpenBtn");
const modalWindowContentNode = document.getElementById("modalWindowContent");
const modalCloseBtnNode = document.getElementById("modalCloseBtn");

// modal window
function togglePopup() {
    modalWindowNode.classList.toggle(MODAL_WINDOW_ACTIVE_CLASSNAME);
    bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
}

// dropdown menu section
function toggleDropdownMenu() {
    // Toggle the 'active' class on both the 'menu-burger'
    bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
    menuLinksNode.classList.toggle(MENU_LINKS_HIDE_CLASSNAME);
    menuGetintouchNode.classList.toggle(MENU_GETINTOUCH_HIDE_CLASSNAME);
    burgerButtonNode.classList.toggle(MENU_DROPDOWN_BUTTON_ACTIVE_CLASSNAME);
    dropdownNode.classList.toggle(MENU_DROPDOWN_ACTIVE_CLASSNAME);
}

// toggle animation
function toggleAnimationEffect(nodes, removeClass, addClass) {
    nodes.forEach((node) => {
        node.classList.remove(removeClass);
        node.classList.add(addClass);
    });
}

function toggleAnimation() {
    const isAnimationActive = menuToggleAnimationBtnNode.classList.contains(
        MENU_ANIMATION_ON_CLASSNAME
    );
    menuToggleAnimationBtnNode.classList.toggle(MENU_ANIMATION_ON_CLASSNAME);
    if (isAnimationActive) {
        toggleAnimationEffect(videosNode, VISUAL_FADE_IN, VISUAL_FADE_OUT);
        setTimeout(() => {
            toggleAnimationEffect(imagesNode, VISUAL_FADE_OUT, VISUAL_FADE_IN);
        }, 1000);
    } else {
        toggleAnimationEffect(imagesNode, VISUAL_FADE_IN, VISUAL_FADE_OUT);
        setTimeout(() => {
            toggleAnimationEffect(videosNode, VISUAL_FADE_OUT, VISUAL_FADE_IN);
        }, 1000);
    }
}

// render cards in services section
cardsData.forEach((card) => {
    const cardElement = document.createElement("card-container");
    cardElement.setAttribute("title", card.title);
    cardElement.setAttribute("icon", `icons/${card.icon}`);
    cardElement.setAttribute("image", `images/${card.image}`);
    cardElement.setAttribute("text", JSON.stringify(card.text));
    cardsGrid.appendChild(cardElement);
});

// Event Listener for Burger & Dropdown Menu
[burgerButtonNode, dropdownTextNode].forEach((node) => {
    node.addEventListener("click", toggleDropdownMenu);
});

// Event Listener for Toggle Animation
menuToggleAnimationBtnNode.addEventListener("click", toggleAnimation);

// Event Listeners for Modal Window
modalOpenBtnNode.addEventListener("click", togglePopup);
modalCloseBtnNode.addEventListener("click", togglePopup);
modalWindowNode.addEventListener("click", (event) => {
    const isClickOutsideContent = !event
        .composedPath()
        .includes(modalWindowContentNode);

    if (isClickOutsideContent) {
        togglePopup();
    }
});
