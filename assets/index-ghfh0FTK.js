(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();class h extends HTMLElement{connectedCallback(){this.innerHTML=`
            <button class="btn-toggle-less">
                <span class="button-text">less</span>
                <span class="toggle-switch"></span>
            </button>
        `}}customElements.define("button-toggle-less",h);class d extends HTMLElement{connectedCallback(){this.innerHTML=`
            <button class="btn-toggle-more">
                <span class="button-text">more</span>
                <span class="toggle-switch"></span>
            </button>
        `}}customElements.define("button-toggle-more",d);const a=document.createElement("template");a.innerHTML=`
            <link rel="stylesheet" href="src/components/LinkToggleTouchWhite.css">
            <a class="link-toggle-touch-white" href="#contacts">
                <span class="button-text">get in touch</span>
                <span class="toggle-switch"></span>
            </a>
            `;class p extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(a.content.cloneNode(!0))}}customElements.define("link-toggle-touch-white",p);const r=document.createElement("template");r.innerHTML=`
            <link rel="stylesheet" href="./src/components/LinkToggleTouchBlack.css">
            <a class="link-toggle-touch-black" href="#contacts">
                <span class="button-text">get in touch</span>
                <span class="toggle-switch"></span>
            </a>
            `;class m extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(r.content.cloneNode(!0))}}customElements.define("link-toggle-touch-black",m);const i=document.createElement("template");i.innerHTML=`
            <link rel="stylesheet" href="src/components/LinkIconTouchWhite.css">
            <a class="link-icon-touch-white" href="#contacts">
                <span class="button-text">get in touch</span>
                <span class="arrow-right"></span>
            </a>
            `;class g extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(i.content.cloneNode(!0))}}customElements.define("link-icon-touch-white",g);const u=document.createElement("template");u.innerHTML=`
            <link rel="stylesheet" href="src/components/LinkHomeWhite.css">
            <a class="link-home-white" href="#contacts">
                <span class="button-text">up to home</span>
            </a>
            `;class f extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(u.content.cloneNode(!0))}}customElements.define("link-home-white",f);function L(s){let t=0;const o=c=>{t=c,s.innerHTML=`count is ${t}`};s.addEventListener("click",()=>o(t+1)),o(0)}document.querySelector("#app").innerHTML=`
  <div>
    <h4 class="h4">Welcome to Test Counter:</h4>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;L(document.querySelector("#counter"));
