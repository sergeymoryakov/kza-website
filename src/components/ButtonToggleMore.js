// NOTE: This custom element does not use shadow DOM,
// so it shares the same CSS with the rest of the page.

import "/src/components/ButtonToggleMore.css";

class ButtonToggleMore extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <button class="btn-toggle-more">
                <span class="button-text">more</span>
                <span class="toggle-switch"></span>
            </button>
        `;
    }
}

customElements.define("button-toggle-more", ButtonToggleMore);
