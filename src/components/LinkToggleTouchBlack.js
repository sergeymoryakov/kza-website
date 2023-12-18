const template = document.createElement("template");
template.innerHTML = `
            <link rel="stylesheet" href="./src/components/LinkToggleTouchBlack.css">
            <a class="link-toggle-touch-black" href="#contacts">
                <span class="button-text">get in touch</span>
                <span class="toggle-switch"></span>
            </a>
            `;

class LinkToggleTouchBlack extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(template.content.cloneNode(true));
    }
}

customElements.define("link-toggle-touch-black", LinkToggleTouchBlack);
