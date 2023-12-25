// NOTE: This custom element does not use shadow DOM,
// so it shares the same CSS with the rest of the page.

import "/src/components/Card.css";

class Card extends HTMLElement {
    static get observedAttributes() {
        return ["title", "icon", "image", "text"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "title":
                this._title = newValue;
                break;
            case "icon":
                this._icon = newValue;
                break;
            case "image":
                this._image = newValue;
                break;
            case "text":
                this._text = JSON.parse(newValue);
                break;
        }
    }

    connectedCallback() {
        this.classList.add("card-container");
        this.innerHTML = `
                    <div
                        class="card"
                        onclick="this.classList.toggle('flipped')"
                    >
                        <div class="card-front"
                            style="background-image: url('${this._image}');"
                        >
                            <div class="card-front__top-grid">
                                <h4 class="h4">${this._title}</h4>
                                <img
                                    class="card-icon"
                                    src="${this._icon}"
                                    alt=""
                                />
                            </div>
                            <button-toggle-more></button-toggle-more>
                        </div>
                        <div class="card-back">
                            <div class="card-back__top-grid">
                                <h4 class="h4 ft-light">
                                    ${this._title}
                                </h4>
                                <img
                                    class="card-icon"
                                    src="${this._icon}"
                                    alt=""
                                />
                            </div>

                            <div class="card-back__bottom-flex">
                                <div class="card-button-wrapper">
                                    <button-toggle-less></button-toggle-less>
                                </div>
                                <div class="card-items">
                                    ${this._text
                                        .map(
                                            (_text) =>
                                                `<p class="p-body ft-light">${_text}</p>`
                                        )
                                        .join("")}
                                </div>
                            </div>
                        </div>
                    </div>
        `;
    }
}

customElements.define("card-container", Card);
