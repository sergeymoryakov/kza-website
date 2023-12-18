const template = document.createElement("template");
template.innerHTML = `
            <link rel="stylesheet" href="/src/components/ButtonToggleMore.css">
            <button class="btn-toggle-more">
                <span class="button-text">more</span>
                <span class="toggle-switch"></span>
            </button>
            `;

class ButtonToggleMore extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(template.content.cloneNode(true));
    }
}

customElements.define("button-toggle-more", ButtonToggleMore);
