(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const s=""+new URL("logo-transparent-hevc-safari-fC2f_kUU.mp4",import.meta.url).href,u=""+new URL("logo-transparent-vp9-chrome-BFjHMjN_.webm",import.meta.url).href;function l(i){let r=0;const o=n=>{r=n,i.innerHTML=`count is ${r}`};i.addEventListener("click",()=>o(r+1)),o(0)}document.querySelector("#app").innerHTML=`
  <div>
    <video class="image-3d" autoplay loop muted playsinline>
      <source src="${s}" type='video/mp4; codecs="hvc1"' />
      <source src="${u}" type="video/webm" />
    </video>
    <h1>Welcome to Mobile Version!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;l(document.querySelector("#counter"));
