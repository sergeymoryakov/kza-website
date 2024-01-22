(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();class L extends HTMLElement{connectedCallback(){this.innerHTML=`
            <button class="btn-toggle-less">
                <span class="button-text">less</span>
                <span class="toggle-switch"></span>
            </button>
        `}}customElements.define("button-toggle-less",L);class k extends HTMLElement{connectedCallback(){this.innerHTML=`
            <button class="btn-toggle-more">
                <span class="button-text">more</span>
                <span class="toggle-switch"></span>
            </button>
        `}}customElements.define("button-toggle-more",k);class w extends HTMLElement{connectedCallback(){this.innerHTML=`
            <a class="link-toggle-touch-white" href="#getintouch">
                <span class="button-text">get in touch</span>
                <span class="toggle-switch"></span>
            </a>
        `}}customElements.define("link-toggle-touch-white",w);class x extends HTMLElement{connectedCallback(){this.innerHTML=`
            <a class="link-toggle-touch-black" href="#getintouch">
                <span class="button-text">get in touch</span>
                <span class="toggle-switch"></span>
            </a>
        `}}customElements.define("link-toggle-touch-black",x);class _ extends HTMLElement{connectedCallback(){this.innerHTML=`
            <a class="link-icon-touch-white" href="#getintouch">
                <span class="button-text">get in touch</span>
                <span class="arrow-right"></span>
            </a>
        `}}customElements.define("link-icon-touch-white",_);class C extends HTMLElement{connectedCallback(){this.innerHTML=`
            <a class="link-home-white" href="#header">
                <span class="button-text">up to home</span>
            </a>
        `}}customElements.define("link-home-white",C);class M extends HTMLElement{static get observedAttributes(){return["title","icon","image","text"]}attributeChangedCallback(o,d,s){switch(o){case"title":this._title=s;break;case"icon":this._icon=s;break;case"image":this._image=s;break;case"text":this._text=JSON.parse(s);break}}connectedCallback(){this.classList.add("card-container"),this.innerHTML=`
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
                                    ${this._text.map(o=>`<p class="p-body ft-light">${o}</p>`).join("")}
                                </div>
                            </div>
                        </div>
                    </div>
        `}}customElements.define("card-container",M);const N=[{id:1,title:"Research, Identification, and Prospecting",icon:"3-copter.svg",image:"1-card.png",text:["Our team specializes in developing and executing targeted marketing, mailing, and direct contact campaigns focused on new sales prospects.","We help you envision and strategically plan your market approach, considering long-term perspectives and product line development."]},{id:2,title:"Customer Relationship Management",icon:"1-earth.svg",image:"2-card.png",text:["We maintain a meticulous database of prospecting activities, customer contacts, and sales opportunities.","Our system ensures seamless access and handoff of accounts to the responsible Regional Sales Directors (RSDs) based on the sales territory and timing."]},{id:3,title:"Effective Communication",icon:"4-communication.svg",image:"3-card.png",text:["Our team engages in cold-calling, prepares and sends materials requested via hotline calls and web inquiries, and diligently follows up with prospects.","We coordinate these activities with the customer's authorized representative to optimize sales efforts."]},{id:4,title:"Engaging Presentations",icon:"2-presentation.svg",image:"4-card.png",text:["We arrange, prepare, and conduct compelling product presentations that captivate your audience.","Our expertise extends to the preparation and review of marketing materials, proposals, pre-sale agreements, and related documentation before prospect presentations."]},{id:5,title:"Facility and Factory Visits",icon:"5-facility.svg",image:"5-card.png",text:["We offer support for facility and factory visits, ensuring a seamless experience for your potential customers."]},{id:6,title:"In-depth Product Knowledge",icon:"6-product.svg",image:"6-card.png",text:["Our team develops a comprehensive working knowledge of your product's features and benefits, encompassing various areas, including design, construction, systems architecture, performance, and operating costs"]},{id:7,title:"Competitor Analysis",icon:"7-competitor.svg",image:"7-card.png",text:["We analyze competitor products thoroughly, allowing us to effectively communicate your product's strengths and advantages relative to prospect needs."]},{id:8,title:"Market Intelligence",icon:"8-market_int.svg",image:"8-card.png",text:["We assist in obtaining and reporting intelligence on your competitors' activities, including sales, pricing, availability, marketing strategies, and new product development."]},{id:9,title:"Timely Reporting",icon:"9-report.svg",image:"9-card.png",text:["Our commitment to transparency means providing timely reporting to your sales management team and marketing services.","We highlight both opportunities won and lost, along with the primary buyer decision factors."]},{id:10,title:"Industry Engagement",icon:"10-indusrty.svg",image:"10-card.png",text:["We actively participate in various local industry functions, promoting your products and services through product presentations, sponsorships, and hosting events."]},{id:11,title:"Record Keeping",icon:"11-record.svg",image:"11-card.png",text:["We maintain a comprehensive and clear record of ongoing prospecting activities using our customer-provided CRM and LMT tools.","Upon request, we provide regularly scheduled reports to senior management."]},{id:12,title:"Sales Forecasts",icon:"12-salesforcast.svg",image:"12-card.png",text:["We provide sales forecasts for your assigned prospect base as requested, assisting in strategic planning and decision-making."]}],p="body-fixed",T="hide",O="hide",S="active",A="active",I="modal-window-active",h=document.querySelector("body"),W=document.getElementById("cardsGrid"),H=document.querySelector(".menu-top__links"),B=document.getElementById("menuBtnGetintouch"),f=document.querySelector(".menu-burger"),D=document.querySelector(".menu-dropdown-wrapper"),q=document.querySelector(".menu-dropdown__text"),v=document.getElementById("modalWindow"),P=document.getElementById("modalOpenBtn"),R=document.getElementById("modalWindowContent"),$=document.getElementById("modalCloseBtn");P.addEventListener("click",u);$.addEventListener("click",u);v.addEventListener("click",n=>{!n.composedPath().includes(R)&&u()});function u(){v.classList.toggle(I),h.classList.toggle(p)}function y(){h.classList.toggle(p),H.classList.toggle(T),B.classList.toggle(O),f.classList.toggle(S),D.classList.toggle(A)}function U(){if(navigator.connection||navigator.mozConnection||navigator.webkitConnection){let e=function(l,r,c=.5){const i=document.createElement("video");return i.className=r,i.autoplay=!0,i.loop=!0,i.muted=!0,i.playsInline=!0,i.playbackRate=c,l.forEach(m=>{const g=document.createElement("source");g.src=m.src,g.type=m.type,i.appendChild(g)}),i},t=function(l,r){const c=document.querySelector(l),i=c.querySelector("img");i.classList.add("fade-out"),i.addEventListener("animationend",()=>{c.innerHTML="",r.classList.add("fade-in"),c.appendChild(r)})};var o=e,d=t;const s={aircraft:[{src:"/models/aircraft-hevc-safari.mp4",type:'video/mp4; codecs="hvc1"'},{src:"/models/aircraft-vp9-chrome.webm",type:"video/webm"}],logo:[{src:"/models/logo-transparent-hevc-safari.mp4",type:'video/mp4; codecs="hvc1"'},{src:"/models/logo-transparent-vp9-chrome.webm",type:"video/webm"}],engine:[{src:"/models/engine-hevc-safari.mp4",type:'video/mp4; codecs="hvc1"'},{src:"/models/engine-vp9-chrome.webm",type:"video/webm"}]},a=e(s.aircraft,"image-3d");t(".aircraft-3d",a);const b=e(s.logo,"image-3d");t(".logo-3d",b);const E=e(s.engine,"image-3d");t(".engine-3d",E)}}window.addEventListener("load",U);f.addEventListener("click",function(){y()});q.addEventListener("click",function(){y()});N.forEach(n=>{const o=document.createElement("card-container");o.setAttribute("title",n.title),o.setAttribute("icon",`icons/${n.icon}`),o.setAttribute("image",`images/${n.image}`),o.setAttribute("text",JSON.stringify(n.text)),W.appendChild(o)});
