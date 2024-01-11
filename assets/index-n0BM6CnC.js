(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();class h extends HTMLElement{connectedCallback(){this.innerHTML=`
            <button class="btn-toggle-less">
                <span class="button-text">less</span>
                <span class="toggle-switch"></span>
            </button>
        `}}customElements.define("button-toggle-less",h);class f extends HTMLElement{connectedCallback(){this.innerHTML=`
            <button class="btn-toggle-more">
                <span class="button-text">more</span>
                <span class="toggle-switch"></span>
            </button>
        `}}customElements.define("button-toggle-more",f);class v extends HTMLElement{connectedCallback(){this.innerHTML=`
            <a class="link-toggle-touch-white" href="#getintouch">
                <span class="button-text">get in touch</span>
                <span class="toggle-switch"></span>
            </a>
        `}}customElements.define("link-toggle-touch-white",v);class y extends HTMLElement{connectedCallback(){this.innerHTML=`
            <a class="link-toggle-touch-black" href="#getintouch">
                <span class="button-text">get in touch</span>
                <span class="toggle-switch"></span>
            </a>
        `}}customElements.define("link-toggle-touch-black",y);class b extends HTMLElement{connectedCallback(){this.innerHTML=`
            <a class="link-icon-touch-white" href="#getintouch">
                <span class="button-text">get in touch</span>
                <span class="arrow-right"></span>
            </a>
        `}}customElements.define("link-icon-touch-white",b);class E extends HTMLElement{connectedCallback(){this.innerHTML=`
            <a class="link-home-white" href="#header">
                <span class="button-text">up to home</span>
            </a>
        `}}customElements.define("link-home-white",E);class L extends HTMLElement{static get observedAttributes(){return["title","icon","image","text"]}attributeChangedCallback(n,a,i){switch(n){case"title":this._title=i;break;case"icon":this._icon=i;break;case"image":this._image=i;break;case"text":this._text=JSON.parse(i);break}}connectedCallback(){this.classList.add("card-container"),this.innerHTML=`
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
                                    ${this._text.map(n=>`<p class="p-body ft-light">${n}</p>`).join("")}
                                </div>
                            </div>
                        </div>
                    </div>
        `}}customElements.define("card-container",L);const k=[{id:1,title:"Research, Identification, and Prospecting",icon:"3-copter.svg",image:"1-card.png",text:["Our team specializes in developing and executing targeted marketing, mailing, and direct contact campaigns focused on new sales prospects.","We help you envision and strategically plan your market approach, considering long-term perspectives and product line development."]},{id:2,title:"Customer Relationship Management",icon:"1-earth.svg",image:"2-card.png",text:["We maintain a meticulous database of prospecting activities, customer contacts, and sales opportunities.","Our system ensures seamless access and handoff of accounts to the responsible Regional Sales Directors (RSDs) based on the sales territory and timing."]},{id:3,title:"Effective Communication",icon:"4-communication.svg",image:"3-card.png",text:["Our team engages in cold-calling, prepares and sends materials requested via hotline calls and web inquiries, and diligently follows up with prospects.","We coordinate these activities with the customer's authorized representative to optimize sales efforts."]},{id:4,title:"Engaging Presentations",icon:"2-presentation.svg",image:"4-card.png",text:["We arrange, prepare, and conduct compelling product presentations that captivate your audience.","Our expertise extends to the preparation and review of marketing materials, proposals, pre-sale agreements, and related documentation before prospect presentations."]},{id:5,title:"Facility and Factory Visits",icon:"5-facility.svg",image:"5-card.png",text:["We offer support for facility and factory visits, ensuring a seamless experience for your potential customers."]},{id:6,title:"In-depth Product Knowledge",icon:"6-product.svg",image:"6-card.png",text:["Our team develops a comprehensive working knowledge of your product's features and benefits, encompassing various areas, including design, construction, systems architecture, performance, and operating costs"]},{id:7,title:"Competitor Analysis",icon:"7-competitor.svg",image:"7-card.png",text:["We analyze competitor products thoroughly, allowing us to effectively communicate your product's strengths and advantages relative to prospect needs."]},{id:8,title:"Market Intelligence",icon:"8-market_int.svg",image:"8-card.png",text:["We assist in obtaining and reporting intelligence on your competitors' activities, including sales, pricing, availability, marketing strategies, and new product development."]},{id:9,title:"Timely Reporting",icon:"9-report.svg",image:"9-card.png",text:["Our commitment to transparency means providing timely reporting to your sales management team and marketing services.","We highlight both opportunities won and lost, along with the primary buyer decision factors."]},{id:10,title:"Industry Engagement",icon:"10-indusrty.svg",image:"10-card.png",text:["We actively participate in various local industry functions, promoting your products and services through product presentations, sponsorships, and hosting events."]},{id:11,title:"Record Keeping",icon:"11-record.svg",image:"11-card.png",text:["We maintain a comprehensive and clear record of ongoing prospecting activities using our customer-provided CRM and LMT tools.","Upon request, we provide regularly scheduled reports to senior management."]},{id:12,title:"Sales Forecasts",icon:"12-salesforcast.svg",image:"12-card.png",text:["We provide sales forecasts for your assigned prospect base as requested, assisting in strategic planning and decision-making."]}],l="body-fixed",w="hide",C="hide",x="active",_="active",M="modal-window-active",g=document.querySelector("body"),T=document.getElementById("cardsGrid"),N=document.querySelector(".menu-top__links"),S=document.getElementById("menuBtnGetintouch"),u=document.querySelector(".menu-burger"),O=document.querySelector(".menu-dropdown-wrapper"),A=document.querySelector(".menu-dropdown__text"),m=document.getElementById("modalWindow"),I=document.getElementById("modalOpenBtn"),W=document.getElementById("modalWindowContent"),H=document.getElementById("modalCloseBtn");I.addEventListener("click",r);H.addEventListener("click",r);m.addEventListener("click",e=>{!e.composedPath().includes(W)&&r()});function B(){const e=navigator.connection||navigator.mozConnection||navigator.webkitConnection;if(e&&e.effectiveType.includes("4g")){let i=function(t,o){const s=document.createElement("video");return s.className=o,s.autoplay=!0,s.loop=!0,s.muted=!0,s.playsInline=!0,t.forEach(d=>{const c=document.createElement("source");c.src=d.src,c.type=d.type,s.appendChild(c)}),s};var n=i;const a={aircraft:[{src:"/models/aircraft-hevc-safari.mp4",type:'video/mp4; codecs="hvc1"'},{src:"/models/aircraft-vp9-chrome.webm",type:"video/webm"}],logo:[{src:"/models/logo-transparent-hevc-safari.mp4",type:'video/mp4; codecs="hvc1"'},{src:"/models/logo-transparent-vp9-chrome.webm",type:"video/webm"}],engine:[{src:"/models/engine-hevc-safari.mp4",type:'video/mp4; codecs="hvc1"'},{src:"/models/engine-vp9-chrome.webm",type:"video/webm"}]};document.querySelector(".aircraft-3d").innerHTML="",document.querySelector(".aircraft-3d").appendChild(i(a.aircraft,"image-3d")),document.querySelector(".logo-3d").innerHTML="",document.querySelector(".logo-3d").appendChild(i(a.logo)),document.querySelector(".engine-3d").innerHTML="",document.querySelector(".engine-3d").appendChild(i(a.engine,"image-3d"))}}window.addEventListener("load",B);function r(){m.classList.toggle(M),g.classList.toggle(l)}function p(){g.classList.toggle(l),N.classList.toggle(w),S.classList.toggle(C),u.classList.toggle(x),O.classList.toggle(_)}u.addEventListener("click",function(){p()});A.addEventListener("click",function(){p()});k.forEach(e=>{const n=document.createElement("card-container");n.setAttribute("title",e.title),n.setAttribute("icon",`icons/${e.icon}`),n.setAttribute("image",`images/${e.image}`),n.setAttribute("text",JSON.stringify(e.text)),T.appendChild(n)});
