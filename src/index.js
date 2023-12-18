import "./styles/index.css";
import "./components/ButtonToggleLess.js";
import "./components/ButtonToggleMore.js";
import "./components/LinkToggleTouchWhite.js";
import "./components/LinkToggleTouchBlack.js";
import "./components/LinkIconTouchWhite.js";
import "./components/LinkHomeWhite.js";

import { setupCounter } from "./counter.js";

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
