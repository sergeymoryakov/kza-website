const template = document.createElement("template");
template.innerHTML = `
            <link rel="stylesheet" href="./components/LinkIconTouchWhite.css">
            <a class="link-icon-touch-white" href="#contacts">
                <span class="button-text">get in touch</span>
                <span class="arrow-right"></span>
            </a>
            `;

class LinkIconTouchWhite extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(template.content.cloneNode(true));
    }
}

customElements.define("link-icon-touch-white", LinkIconTouchWhite);
