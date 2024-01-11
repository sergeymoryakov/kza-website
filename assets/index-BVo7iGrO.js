(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=i(n);fetch(n.href,o)}})();class p extends HTMLElement{connectedCallback(){this.innerHTML=`
            <button class="btn-toggle-less">
                <span class="button-text">less</span>
                <span class="toggle-switch"></span>
            </button>
        `}}customElements.define("button-toggle-less",p);class m extends HTMLElement{connectedCallback(){this.innerHTML=`
            <button class="btn-toggle-more">
                <span class="button-text">more</span>
                <span class="toggle-switch"></span>
            </button>
        `}}customElements.define("button-toggle-more",m);class h extends HTMLElement{connectedCallback(){this.innerHTML=`
            <a class="link-toggle-touch-white" href="#getintouch">
                <span class="button-text">get in touch</span>
                <span class="toggle-switch"></span>
            </a>
        `}}customElements.define("link-toggle-touch-white",h);class v extends HTMLElement{connectedCallback(){this.innerHTML=`
            <a class="link-toggle-touch-black" href="#getintouch">
                <span class="button-text">get in touch</span>
                <span class="toggle-switch"></span>
            </a>
        `}}customElements.define("link-toggle-touch-black",v);class f extends HTMLElement{connectedCallback(){this.innerHTML=`
            <a class="link-icon-touch-white" href="#getintouch">
                <span class="button-text">get in touch</span>
                <span class="arrow-right"></span>
            </a>
        `}}customElements.define("link-icon-touch-white",f);class y extends HTMLElement{connectedCallback(){this.innerHTML=`
            <a class="link-home-white" href="#header">
                <span class="button-text">up to home</span>
            </a>
        `}}customElements.define("link-home-white",y);class b extends HTMLElement{static get observedAttributes(){return["title","icon","image","text"]}attributeChangedCallback(t,i,s){switch(t){case"title":this._title=s;break;case"icon":this._icon=s;break;case"image":this._image=s;break;case"text":this._text=JSON.parse(s);break}}connectedCallback(){this.classList.add("card-container"),this.innerHTML=`
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
                                    ${this._text.map(t=>`<p class="p-body ft-light">${t}</p>`).join("")}
                                </div>
                            </div>
                        </div>
                    </div>
        `}}customElements.define("card-container",b);const L=[{id:1,title:"Research, Identification, and Prospecting",icon:"3-copter.svg",image:"1-card.png",text:["Our team specializes in developing and executing targeted marketing, mailing, and direct contact campaigns focused on new sales prospects.","We help you envision and strategically plan your market approach, considering long-term perspectives and product line development."]},{id:2,title:"Customer Relationship Management",icon:"1-earth.svg",image:"2-card.png",text:["We maintain a meticulous database of prospecting activities, customer contacts, and sales opportunities.","Our system ensures seamless access and handoff of accounts to the responsible Regional Sales Directors (RSDs) based on the sales territory and timing."]},{id:3,title:"Effective Communication",icon:"4-communication.svg",image:"3-card.png",text:["Our team engages in cold-calling, prepares and sends materials requested via hotline calls and web inquiries, and diligently follows up with prospects.","We coordinate these activities with the customer's authorized representative to optimize sales efforts."]},{id:4,title:"Engaging Presentations",icon:"2-presentation.svg",image:"4-card.png",text:["We arrange, prepare, and conduct compelling product presentations that captivate your audience.","Our expertise extends to the preparation and review of marketing materials, proposals, pre-sale agreements, and related documentation before prospect presentations."]},{id:5,title:"Facility and Factory Visits",icon:"5-facility.svg",image:"5-card.png",text:["We offer support for facility and factory visits, ensuring a seamless experience for your potential customers."]},{id:6,title:"In-depth Product Knowledge",icon:"6-product.svg",image:"6-card.png",text:["Our team develops a comprehensive working knowledge of your product's features and benefits, encompassing various areas, including design, construction, systems architecture, performance, and operating costs"]},{id:7,title:"Competitor Analysis",icon:"7-competitor.svg",image:"7-card.png",text:["We analyze competitor products thoroughly, allowing us to effectively communicate your product's strengths and advantages relative to prospect needs."]},{id:8,title:"Market Intelligence",icon:"8-market_int.svg",image:"8-card.png",text:["We assist in obtaining and reporting intelligence on your competitors' activities, including sales, pricing, availability, marketing strategies, and new product development."]},{id:9,title:"Timely Reporting",icon:"9-report.svg",image:"9-card.png",text:["Our commitment to transparency means providing timely reporting to your sales management team and marketing services.","We highlight both opportunities won and lost, along with the primary buyer decision factors."]},{id:10,title:"Industry Engagement",icon:"10-indusrty.svg",image:"10-card.png",text:["We actively participate in various local industry functions, promoting your products and services through product presentations, sponsorships, and hosting events."]},{id:11,title:"Record Keeping",icon:"11-record.svg",image:"11-card.png",text:["We maintain a comprehensive and clear record of ongoing prospecting activities using our customer-provided CRM and LMT tools.","Upon request, we provide regularly scheduled reports to senior management."]},{id:12,title:"Sales Forecasts",icon:"12-salesforcast.svg",image:"12-card.png",text:["We provide sales forecasts for your assigned prospect base as requested, assisting in strategic planning and decision-making."]}],r="body-fixed",E="hide",k="hide",w="active",x="active",_="modal-window-active",l=document.querySelector("body"),M=document.getElementById("cardsGrid"),T=document.querySelector(".menu-top__links"),C=document.getElementById("menuBtnGetintouch"),d=document.querySelector(".menu-burger"),N=document.querySelector(".menu-dropdown-wrapper"),O=document.querySelector(".menu-dropdown__text"),g=document.getElementById("modalWindow"),S=document.getElementById("modalOpenBtn"),A=document.getElementById("modalWindowContent"),H=document.getElementById("modalCloseBtn");S.addEventListener("click",c);H.addEventListener("click",c);g.addEventListener("click",e=>{!e.composedPath().includes(A)&&c()});function I(){const e=navigator.connection||navigator.mozConnection||navigator.webkitConnection;if(e&&e.effectiveType.includes("4g")){const t=`
                    <video class="image-3d" autoplay loop muted playsinline>
                        <source
                            src="/models/aircraft-hevc-safari.mp4"
                            type='video/mp4; codecs="hvc1"'
                            alt="3D Aircraft"
                        />
                        <source
                            src="/models/aircraft-vp9-chrome.webm"
                            type="video/webm"
                            alt="3D Aircraft"
                        />
                    </video>
        `,i=`
                    <video autoplay loop muted playsinline>
                        <source
                            src="/models/logo-transparent-hevc-safari.mp4"
                            type='video/mp4; codecs="hvc1"'
                            alt="3D Logo"
                        />
                        <source
                            src="/models/logo-transparent-vp9-chrome.webm"
                            type="video/webm"
                        />
                    </video>
        `,s=`
                    <video class="image-3d" autoplay loop muted playsinline>
                        <source
                            src="/models/engine-hevc-safari.mp4"
                            type='video/mp4; codecs="hvc1"'
                            alt="3D Engine"
                        />
                        <source
                            src="/models/engine-vp9-chrome.webm"
                            type="video/webm"
                        />
                    </video>
        `;document.querySelector(".aircraft-3d").innerHTML=t,document.querySelector(".logo-3d").innerHTML=i,document.querySelector(".engine-3d").innerHTML=s}}window.addEventListener("load",I);function c(){g.classList.toggle(_),l.classList.toggle(r)}function u(){l.classList.toggle(r),T.classList.toggle(E),C.classList.toggle(k),d.classList.toggle(w),N.classList.toggle(x)}d.addEventListener("click",function(){u()});O.addEventListener("click",function(){u()});L.forEach(e=>{const t=document.createElement("card-container");t.setAttribute("title",e.title),t.setAttribute("icon",`icons/${e.icon}`),t.setAttribute("image",`images/${e.image}`),t.setAttribute("text",JSON.stringify(e.text)),M.appendChild(t)});
