import "./styles/index.css";
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
const MENU_LINKS_HIDE_CLASSNAME = "hide";
const MENU_GETINTOUCH_HIDE_CLASSNAME = "hide";
const MENU_DROPDOWN_BUTTON_ACTIVE_CLASSNAME = "active";
const MENU_DROPDOWN_ACTIVE_CLASSNAME = "active";
const MODAL_WINDOW_ACTIVE_CLASSNAME = "modal-window-active";

const bodyNode = document.querySelector("body");
const cardsGrid = document.getElementById("cardsGrid");
const menuLinksNode = document.querySelector(".menu-top__links");
const menuGetintouchNode = document.getElementById("menuBtnGetintouch");
const burgerButtonNode = document.querySelector(".menu-burger");
const dropdownNode = document.querySelector(".menu-dropdown-wrapper");
const dropdownTextNode = document.querySelector(".menu-dropdown__text");

// modal window section
const modalWindowNode = document.getElementById("modalWindow");
const modalOpenBtnNode = document.getElementById("modalOpenBtn");
const modalWindowContentNode = document.getElementById("modalWindowContent");
const modalCloseBtnNode = document.getElementById("modalCloseBtn");

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

function loadVideoIfFastConnection() {
    const connection =
        navigator.connection ||
        navigator.mozConnection ||
        navigator.webkitConnection;
    if (connection && connection.effectiveType.includes("4g")) {
        // load video
        const aircraftHTML = `
                    <video class="image-3d" autoplay loop muted playsinline>
                        <source
                            src="models/aircraft-hevc-safari.mp4"
                            type='video/mp4; codecs="hvc1"'
                            alt="3D Aircraft"
                        />
                        <source
                            src="models/aircraft-vp9-chrome.webm"
                            type="video/webm"
                            alt="3D Aircraft"
                        />
                    </video>
        `;
        const logoHTML = `
                    <video autoplay loop muted playsinline>
                        <source
                            src="models/logo-transparent-hevc-safari.mp4"
                            type='video/mp4; codecs="hvc1"'
                            alt="3D Logo"
                        />
                        <source
                            src="models/logo-transparent-vp9-chrome.webm"
                            type="video/webm"
                        />
                    </video>
        `;
        const engineHTML = `
                    <video class="image-3d" autoplay loop muted playsinline>
                        <source
                            src="models/engine-hevc-safari.mp4"
                            type='video/mp4; codecs="hvc1"'
                            alt="3D Engine"
                        />
                        <source
                            src="models/engine-vp9-chrome.webm"
                            type="video/webm"
                        />
                    </video>
        `;
        document.querySelector(".aircraft-3d").innerHTML = aircraftHTML;
        document.querySelector(".logo-3d").innerHTML = logoHTML;
        document.querySelector(".engine-3d").innerHTML = engineHTML;
    } else {
        // load image
        const aircraftHTML = `
                        <img
                            src="images/aircraft_s.png"
                            alt="3D Aircraft"
                            srcset="
                                images/aircraft_s.png  300w,
                                images/aircraft_m.png  600w,
                                images/aircraft_l.png 1440w
                            "
                            sizes="(max-width: 300px) 300px, (max-width: 600px) 600px, 1440px"
                        />
        `;
        const logoHTML = `
                        <img
                            src="logos/kza_logo_m.png"
                            alt="3D Logo"
                            srcset="
                                logos/kza_logo_m.png  600w,
                                logos/kza_logo_l.png 1440w
                            "
                            sizes="(max-width: 600px) 600px, 1440px"
                        />
        `;
        const engineHTML = `
                        <img
                            src="images/engine_s.png"
                            alt="3D Engine"
                            srcset="
                                images/engine_s.png  300w,
                                images/engine_m.png  600w,
                                images/engine_l.png 1440w
                            "
                            sizes="(max-width: 300px) 300px, (max-width: 600px) 600px, 1440px"
                        />
        `;
        document.querySelector(".aircraft-3d").innerHTML = aircraftHTML;
        document.querySelector(".logo-3d").innerHTML = logoHTML;
        document.querySelector(".engine-3d").innerHTML = engineHTML;
    }
}

window.addEventListener("load", loadVideoIfFastConnection);

function togglePopup() {
    modalWindowNode.classList.toggle(MODAL_WINDOW_ACTIVE_CLASSNAME);
    bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
}
// end modal window

// dropdown menu section
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

// render cards in services section
cardsData.forEach((card) => {
    const cardElement = document.createElement("card-container");
    cardElement.setAttribute("title", card.title);
    cardElement.setAttribute("icon", `icons/${card.icon}`);
    cardElement.setAttribute("image", `images/${card.image}`);
    cardElement.setAttribute("text", JSON.stringify(card.text));
    cardsGrid.appendChild(cardElement);
});
