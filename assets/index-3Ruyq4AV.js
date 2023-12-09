(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function i(s){let o=0;const r=n=>{o=n,s.innerHTML=`count is ${o}`};s.addEventListener("click",()=>r(o+1)),r(0)}const u="models/logo-transparent-vp9-safari.mp4",d="models/logo-transparent-vp9-chrome.webm";document.querySelector("#app").innerHTML=`
  <div>
    <video class="image-3d" autoplay loop muted playsinline>
      <source src="${u}" type='video/mp4; codecs="hvc1"' />
      <source src="${d}" type="video/webm" />
    </video>
    <h1>Welcome to Mobile Version!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;i(document.querySelector("#counter"));
