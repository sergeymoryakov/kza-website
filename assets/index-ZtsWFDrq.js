(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const l=document.createElement("template");l.innerHTML=`
    <link rel="stylesheet" href="./src/components/ButtonToggleLess.css">
    <button class="btn-toggle-less">
        <span class="button-text">less</span>
        <span class="toggle-switch"></span>
    </button>
`;class p extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(l.content.cloneNode(!0))}}customElements.define("button-toggle-less",p);const a=document.createElement("template");a.innerHTML=`
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
`;class m extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(a.content.cloneNode(!0))}}customElements.define("button-toggle-more",m);const i=document.createElement("template");i.innerHTML=`
            <link rel="stylesheet" href="src/components/LinkToggleTouchWhite.css">
            <a class="link-toggle-touch-white" href="#contacts">
                <span class="button-text">get in touch</span>
                <span class="toggle-switch"></span>
            </a>
            `;class g extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(i.content.cloneNode(!0))}}customElements.define("link-toggle-touch-white",g);const d=document.createElement("template");d.innerHTML=`
            <link rel="stylesheet" href="./src/components/LinkToggleTouchBlack.css">
            <a class="link-toggle-touch-black" href="#contacts">
                <span class="button-text">get in touch</span>
                <span class="toggle-switch"></span>
            </a>
            `;class f extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(d.content.cloneNode(!0))}}customElements.define("link-toggle-touch-black",f);const u=document.createElement("template");u.innerHTML=`
            <link rel="stylesheet" href="src/components/LinkIconTouchWhite.css">
            <a class="link-icon-touch-white" href="#contacts">
                <span class="button-text">get in touch</span>
                <span class="arrow-right"></span>
            </a>
            `;class b extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(u.content.cloneNode(!0))}}customElements.define("link-icon-touch-white",b);const h=document.createElement("template");h.innerHTML=`
            <link rel="stylesheet" href="src/components/LinkHomeWhite.css">
            <a class="link-home-white" href="#contacts">
                <span class="button-text">up to home</span>
            </a>
            `;class w extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(h.content.cloneNode(!0))}}customElements.define("link-home-white",w);function x(n){let t=0;const s=r=>{t=r,n.innerHTML=`count is ${t}`};n.addEventListener("click",()=>s(t+1)),s(0)}document.querySelector("#app").innerHTML=`
  <div>
    <h4 class="h4">Welcome to Test Counter:</h4>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;x(document.querySelector("#counter"));
