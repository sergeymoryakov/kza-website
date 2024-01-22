// NOTE: This custom element does not use shadow DOM,
// so it shares the same CSS with the rest of the page.

import "/src/components/ToggleAnimationWhite.css";

class ToggleAnimationWhite extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <button class="toggle-animation-white">
                <span class="button-text">Animation</span>
                <span class="toggle-switch"></span>
            </button>
        `;
    }
}

customElements.define("toggle-animation-white", ToggleAnimationWhite);
