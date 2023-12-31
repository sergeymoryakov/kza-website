// NOTE: This custom element does not use shadow DOM,
// so it shares the same CSS with the rest of the page.

import "/src/components/LinkToggleTouchWhite.css";

class LinkToggleTouchWhite extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <a class="link-toggle-touch-white" href="#getintouch">
                <span class="button-text">get in touch</span>
                <span class="toggle-switch"></span>
            </a>
        `;
    }
}

customElements.define("link-toggle-touch-white", LinkToggleTouchWhite);
