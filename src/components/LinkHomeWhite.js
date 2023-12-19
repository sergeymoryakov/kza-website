// NOTE: This custom element does not use shadow DOM,
// so it shares the same CSS with the rest of the page.

import "/src/components/LinkHomeWhite.css";

class LinkHomeWhite extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <a class="link-home-white" href="#contacts">
                <span class="button-text">up to home</span>
            </a>
        `;
    }
}

customElements.define("link-home-white", LinkHomeWhite);
