import "./styles/index.css";
const LOGO_3D_SAFARI = "models/logo-transparent-vp9-safari.mp4";
const LOGO_3D_CHROME = "models/logo-transparent-vp9-chrome.webm";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
    <video class="image-3d" autoplay loop muted playsinline>
      <source src="${LOGO_3D_SAFARI}" type='video/mp4; codecs="hvc1"' />
      <source src="${LOGO_3D_CHROME}" type="video/webm" />
    </video>
    <h1>Welcome to Mobile Version!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;

setupCounter(document.querySelector("#counter"));
