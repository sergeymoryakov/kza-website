(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();class i extends HTMLElement{connectedCallback(){this.innerHTML=`
            <button class="btn-toggle-less">
                <span class="button-text">less</span>
                <span class="toggle-switch"></span>
            </button>
        `}}customElements.define("button-toggle-less",i);class a extends HTMLElement{connectedCallback(){this.innerHTML=`
            <button class="btn-toggle-more">
                <span class="button-text">more</span>
                <span class="toggle-switch"></span>
            </button>
        `}}customElements.define("button-toggle-more",a);class r extends HTMLElement{connectedCallback(){this.innerHTML=`
            <a class="link-toggle-touch-white" href="#contacts">
                <span class="button-text">get in touch</span>
                <span class="toggle-switch"></span>
            </a>
        `}}customElements.define("link-toggle-touch-white",r);class u extends HTMLElement{connectedCallback(){this.innerHTML=`
            <a class="link-toggle-touch-black" href="#contacts">
                <span class="button-text">get in touch</span>
                <span class="toggle-switch"></span>
            </a>
        `}}customElements.define("link-toggle-touch-black",u);class d extends HTMLElement{connectedCallback(){this.innerHTML=`
            <a class="link-icon-touch-white" href="#contacts">
                <span class="button-text">get in touch</span>
                <span class="arrow-right"></span>
            </a>
        `}}customElements.define("link-icon-touch-white",d);class h extends HTMLElement{connectedCallback(){this.innerHTML=`
            <a class="link-home-white" href="#contacts">
                <span class="button-text">up to home</span>
            </a>
        `}}customElements.define("link-home-white",h);function g(n){let s=0;const o=c=>{s=c,n.innerHTML=`count is ${s}`};n.addEventListener("click",()=>o(s+1)),o(0)}document.querySelector("#app").innerHTML=`
  <div>
    <h4 class="h4">Welcome to Test Counter:</h4>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;g(document.querySelector("#counter"));
