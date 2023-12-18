(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const r=document.createElement("template");r.innerHTML=`
            <link rel="stylesheet" href="./src/components/ButtonToggleLess.css">
            <button class="btn-toggle-less">
                <span class="button-text">less</span>
                <span class="toggle-switch"></span>
            </button>
            `;class d extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(r.content.cloneNode(!0))}}customElements.define("button-toggle-less",d);const a=document.createElement("template");a.innerHTML=`
            <link rel="stylesheet" href="./src/components/ButtonToggleMore.css">
            <button class="btn-toggle-more">
                <span class="button-text">more</span>
                <span class="toggle-switch"></span>
            </button>
            `;class p extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(a.content.cloneNode(!0))}}customElements.define("button-toggle-more",p);const i=document.createElement("template");i.innerHTML=`
            <link rel="stylesheet" href="./src/components/LinkToggleTouchWhite.css">
            <a class="link-toggle-touch-white" href="#contacts">
                <span class="button-text">get in touch</span>
                <span class="toggle-switch"></span>
            </a>
            `;class h extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(i.content.cloneNode(!0))}}customElements.define("link-toggle-touch-white",h);const u=document.createElement("template");u.innerHTML=`
            <link rel="stylesheet" href="./src/components/LinkToggleTouchBlack.css">
            <a class="link-toggle-touch-black" href="#contacts">
                <span class="button-text">get in touch</span>
                <span class="toggle-switch"></span>
            </a>
            `;class m extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(u.content.cloneNode(!0))}}customElements.define("link-toggle-touch-black",m);function g(s){let t=0;const n=c=>{t=c,s.innerHTML=`count is ${t}`};s.addEventListener("click",()=>n(t+1)),n(0)}document.querySelector("#app").innerHTML=`
  <div>
    <h4 class="h4">Welcome to Test Counter:</h4>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;g(document.querySelector("#counter"));
