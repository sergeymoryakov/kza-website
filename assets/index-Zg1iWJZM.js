(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();const a=document.createElement("template");a.innerHTML=`
    <link rel="stylesheet" href="./src/components/ButtonToggleLess.css">
    <button class="btn-toggle-less">
        <span class="button-text">less</span>
        <span class="toggle-switch"></span>
    </button>
`;class p extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(a.content.cloneNode(!0))}}customElements.define("button-toggle-less",p);const r=document.createElement("template");r.innerHTML=`
    <link rel="stylesheet" href="./src/components/ButtonToggleMore.css">
    <button class="btn-toggle-more">
        <span class="button-text">more</span>
        <span class="toggle-switch"></span>
    </button>
`;class m extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(r.content.cloneNode(!0))}}customElements.define("button-toggle-more",m);const i=document.createElement("template");i.innerHTML=`
            <link rel="stylesheet" href="src/components/LinkToggleTouchWhite.css">
            <a class="link-toggle-touch-white" href="#contacts">
                <span class="button-text">get in touch</span>
                <span class="toggle-switch"></span>
            </a>
            `;class g extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(i.content.cloneNode(!0))}}customElements.define("link-toggle-touch-white",g);const u=document.createElement("template");u.innerHTML=`
            <link rel="stylesheet" href="./src/components/LinkToggleTouchBlack.css">
            <a class="link-toggle-touch-black" href="#contacts">
                <span class="button-text">get in touch</span>
                <span class="toggle-switch"></span>
            </a>
            `;class f extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(u.content.cloneNode(!0))}}customElements.define("link-toggle-touch-black",f);const h=document.createElement("template");h.innerHTML=`
            <link rel="stylesheet" href="src/components/LinkIconTouchWhite.css">
            <a class="link-icon-touch-white" href="#contacts">
                <span class="button-text">get in touch</span>
                <span class="arrow-right"></span>
            </a>
            `;class w extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(h.content.cloneNode(!0))}}customElements.define("link-icon-touch-white",w);const d=document.createElement("template");d.innerHTML=`
            <link rel="stylesheet" href="src/components/LinkHomeWhite.css">
            <a class="link-home-white" href="#contacts">
                <span class="button-text">up to home</span>
            </a>
            `;class L extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(d.content.cloneNode(!0))}}customElements.define("link-home-white",L);function T(o){let t=0;const s=c=>{t=c,o.innerHTML=`count is ${t}`};o.addEventListener("click",()=>s(t+1)),s(0)}document.querySelector("#app").innerHTML=`
  <div>
    <h4 class="h4">Welcome to Test Counter:</h4>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;T(document.querySelector("#counter"));
