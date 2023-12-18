const template = document.createElement("template");
template.innerHTML = `
            <link rel="stylesheet" href="./src/components/LinkToggleTouchWhite.css">
            <a class="link-toggle-touch-white" href="#contacts">
                <span class="button-text">get in touch</span>
                <span class="toggle-switch"></span>
            </a>
            `;

class LinkToggleTouchWhite extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(template.content.cloneNode(true));
    }
}

customElements.define("link-toggle-touch-white", LinkToggleTouchWhite);
