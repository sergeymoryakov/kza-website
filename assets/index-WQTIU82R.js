(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();const l=document.createElement("template");l.innerHTML=`
            <link rel="stylesheet" href="./src/components/ButtonToggleLess.css">
            <button class="btn-toggle-less">
                <span class="button-text">less</span>
                <span class="toggle-switch"></span>
            </button>
            `;class p extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(l.content.cloneNode(!0))}}customElements.define("button-toggle-less",p);const a=document.createElement("template");a.innerHTML=`
            <link rel="stylesheet" href="./src/components/ButtonToggleMore.css">
            <button class="btn-toggle-more">
                <span class="button-text">more</span>
                <span class="toggle-switch"></span>
            </button>
            `;class m extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(a.content.cloneNode(!0))}}customElements.define("button-toggle-more",m);const r=document.createElement("template");r.innerHTML=`
            <link rel="stylesheet" href="./src/components/LinkToggleTouchWhite.css">
            <a class="link-toggle-touch-white" href="#contacts">
                <span class="button-text">get in touch</span>
                <span class="toggle-switch"></span>
            </a>
            `;class g extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(r.content.cloneNode(!0))}}customElements.define("link-toggle-touch-white",g);const i=document.createElement("template");i.innerHTML=`
            <link rel="stylesheet" href="./src/components/LinkToggleTouchBlack.css">
            <a class="link-toggle-touch-black" href="#contacts">
                <span class="button-text">get in touch</span>
                <span class="toggle-switch"></span>
            </a>
            `;class f extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(i.content.cloneNode(!0))}}customElements.define("link-toggle-touch-black",f);const h=document.createElement("template");h.innerHTML=`
            <link rel="stylesheet" href="./src/components/LinkIconTouchWhite.css">
            <a class="link-icon-touch-white" href="#contacts">
                <span class="button-text">get in touch</span>
                <span class="arrow-right"></span>
            </a>
            `;class w extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(h.content.cloneNode(!0))}}customElements.define("link-icon-touch-white",w);const u=document.createElement("template");u.innerHTML=`
            <link rel="stylesheet" href="./src/components/LinkHomeWhite.css">
            <a class="link-home-white" href="#contacts">
                <span class="button-text">up to home</span>
            </a>
            `;class L extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(u.content.cloneNode(!0))}}customElements.define("link-home-white",L);
