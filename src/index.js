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

const cardsGrid = document.getElementById("cardsGrid");

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

document.querySelector("#app").innerHTML = `
  <div>
    <h4 class="h4">Welcome to Test Counter:</h4>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;

setupCounter(document.querySelector("#counter"));

// TEST: Button Toggle
// document.querySelector(".toggle-button").addEventListener("click", function () {
//     this.classList.toggle("on");
// });
