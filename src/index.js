import "./styles/index.css";
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

document.querySelector(".toggle-button").addEventListener("click", function () {
    this.classList.toggle("on");
});
