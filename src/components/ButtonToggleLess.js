const template = document.createElement("template");
template.innerHTML = `
            <link rel="stylesheet" href="./src/components/ButtonToggleLess.css">
            <button class="btn-toggle-less">
                <span class="button-text">less</span>
                <span class="toggle-switch"></span>
            </button>
            `;

class ButtonToggleLess extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(template.content.cloneNode(true));
    }
}

customElements.define("button-toggle-less", ButtonToggleLess);
