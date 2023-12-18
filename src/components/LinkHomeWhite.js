const template = document.createElement("template");
template.innerHTML = `
            <link rel="stylesheet" href="src/components/LinkHomeWhite.css">
            <a class="link-home-white" href="#contacts">
                <span class="button-text">up to home</span>
            </a>
            `;

class LinkHomeWhite extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(template.content.cloneNode(true));
    }
}

customElements.define("link-home-white", LinkHomeWhite);
