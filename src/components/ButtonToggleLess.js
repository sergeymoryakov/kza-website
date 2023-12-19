// NOTE: This custom element does not use shadow DOM,
// so it shares the same CSS with the rest of the page.

import "/src/components/ButtonToggleLess.css";

class ButtonToggleLess extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <button class="btn-toggle-less">
                <span class="button-text">less</span>
                <span class="toggle-switch"></span>
            </button>
        `;
    }
}

customElements.define("button-toggle-less", ButtonToggleLess);
