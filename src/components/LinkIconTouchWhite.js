// NOTE: This custom element does not use shadow DOM,
// so it shares the same CSS with the rest of the page.

import "/src/components/LinkIconTouchWhite.css";

class LinkIconTouchWhite extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <a class="link-icon-touch-white" href="#getintouch">
                <span class="button-text">get in touch</span>
                <span class="arrow-right"></span>
            </a>
        `;
    }
}

customElements.define("link-icon-touch-white", LinkIconTouchWhite);
