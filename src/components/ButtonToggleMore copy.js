const template = document.createElement("template");
template.innerHTML = `
    <style>
        .btn-toggle-more {
            background-color: var(--clr-royal-blue);
            border: none;
            border-radius: 48px;
            color: var(--clr-white);
            padding: 12px 16px;
            /* font-size: 1rem; */
            cursor: pointer;
            position: relative;
            outline: none;
            /* overflow: hidden; To ensure the border doesn't extend outside the button's rounded corners */
            display: flex;
            /* flex-direction: row;
            justify-content: space-between; */
            align-items: center;
        }

        .btn-toggle-more .button-text {
            margin-right: 40px; /* Space for the toggle */
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 500;
            line-height: 1rem;
            text-transform: uppercase;
        }

        .btn-toggle-more::after {
            content: "";
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            width: 38px;
            height: 24px;
            border: 2px solid var(--clr-white);
            border-radius: 24px;
            box-sizing: border-box;
        }

        .btn-toggle-more .toggle-switch {
            width: 24px;
            height: 24px;
            background-color: var(--clr-white);
            border-radius: 50%;
            position: absolute;
            right: 24px;
            top: 50%;
            transform: translateY(-50%);
            transition: background-color 0.3s, transform 0.3s;
            /* z-index: 1; Make sure the switch appears above the border */
        }

        .btn-toggle-more:hover {
            background-color: var(--clr-fire-red);
        }

        .btn-toggle-more:hover .toggle-switch {
            background-color: var(--clr-white);
            transform: translate(14px, -50%);
        }
    </style>
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

// <link rel="stylesheet" href="./src/components/ButtonToggleMore.css">
// <style>
//     @import url('components/ButtonToggleLess.css');
// </style>
