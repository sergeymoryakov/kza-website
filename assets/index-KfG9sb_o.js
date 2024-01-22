(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function d(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=d(t);fetch(t.href,s)}})();class v extends HTMLElement{connectedCallback(){this.innerHTML=`
            <button class="toggle-animation-white">
                <span class="button-text">Animation</span>
                <span class="toggle-switch"></span>
            </button>
        `}}customElements.define("toggle-animation-white",v);class b extends HTMLElement{connectedCallback(){this.innerHTML=`
            <button class="btn-toggle-less">
                <span class="button-text">less</span>
                <span class="toggle-switch"></span>
            </button>
        `}}customElements.define("button-toggle-less",b);class y extends HTMLElement{connectedCallback(){this.innerHTML=`
            <button class="btn-toggle-more">
                <span class="button-text">more</span>
                <span class="toggle-switch"></span>
            </button>
        `}}customElements.define("button-toggle-more",y);class E extends HTMLElement{connectedCallback(){this.innerHTML=`
            <a class="link-toggle-touch-white" href="#getintouch">
                <span class="button-text">get in touch</span>
                <span class="toggle-switch"></span>
            </a>
        `}}customElements.define("link-toggle-touch-white",E);class L extends HTMLElement{connectedCallback(){this.innerHTML=`
            <a class="link-toggle-touch-black" href="#getintouch">
                <span class="button-text">get in touch</span>
                <span class="toggle-switch"></span>
            </a>
        `}}customElements.define("link-toggle-touch-black",L);class k extends HTMLElement{connectedCallback(){this.innerHTML=`
            <a class="link-icon-touch-white" href="#getintouch">
                <span class="button-text">get in touch</span>
                <span class="arrow-right"></span>
            </a>
        `}}customElements.define("link-icon-touch-white",k);class _ extends HTMLElement{connectedCallback(){this.innerHTML=`
            <a class="link-home-white" href="#header">
                <span class="button-text">up to home</span>
            </a>
        `}}customElements.define("link-home-white",_);class w extends HTMLElement{static get observedAttributes(){return["title","icon","image","text"]}attributeChangedCallback(n,d,i){switch(n){case"title":this._title=i;break;case"icon":this._icon=i;break;case"image":this._image=i;break;case"text":this._text=JSON.parse(i);break}}connectedCallback(){this.classList.add("card-container"),this.innerHTML=`
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
        `}}customElements.define("card-container",w);const x=[{id:1,title:"Research, Identification, and Prospecting",icon:"3-copter.svg",image:"1-card.png",text:["Our team specializes in developing and executing targeted marketing, mailing, and direct contact campaigns focused on new sales prospects.","We help you envision and strategically plan your market approach, considering long-term perspectives and product line development."]},{id:2,title:"Customer Relationship Management",icon:"1-earth.svg",image:"2-card.png",text:["We maintain a meticulous database of prospecting activities, customer contacts, and sales opportunities.","Our system ensures seamless access and handoff of accounts to the responsible Regional Sales Directors (RSDs) based on the sales territory and timing."]},{id:3,title:"Effective Communication",icon:"4-communication.svg",image:"3-card.png",text:["Our team engages in cold-calling, prepares and sends materials requested via hotline calls and web inquiries, and diligently follows up with prospects.","We coordinate these activities with the customer's authorized representative to optimize sales efforts."]},{id:4,title:"Engaging Presentations",icon:"2-presentation.svg",image:"4-card.png",text:["We arrange, prepare, and conduct compelling product presentations that captivate your audience.","Our expertise extends to the preparation and review of marketing materials, proposals, pre-sale agreements, and related documentation before prospect presentations."]},{id:5,title:"Facility and Factory Visits",icon:"5-facility.svg",image:"5-card.png",text:["We offer support for facility and factory visits, ensuring a seamless experience for your potential customers."]},{id:6,title:"In-depth Product Knowledge",icon:"6-product.svg",image:"6-card.png",text:["Our team develops a comprehensive working knowledge of your product's features and benefits, encompassing various areas, including design, construction, systems architecture, performance, and operating costs"]},{id:7,title:"Competitor Analysis",icon:"7-competitor.svg",image:"7-card.png",text:["We analyze competitor products thoroughly, allowing us to effectively communicate your product's strengths and advantages relative to prospect needs."]},{id:8,title:"Market Intelligence",icon:"8-market_int.svg",image:"8-card.png",text:["We assist in obtaining and reporting intelligence on your competitors' activities, including sales, pricing, availability, marketing strategies, and new product development."]},{id:9,title:"Timely Reporting",icon:"9-report.svg",image:"9-card.png",text:["Our commitment to transparency means providing timely reporting to your sales management team and marketing services.","We highlight both opportunities won and lost, along with the primary buyer decision factors."]},{id:10,title:"Industry Engagement",icon:"10-indusrty.svg",image:"10-card.png",text:["We actively participate in various local industry functions, promoting your products and services through product presentations, sponsorships, and hosting events."]},{id:11,title:"Record Keeping",icon:"11-record.svg",image:"11-card.png",text:["We maintain a comprehensive and clear record of ongoing prospecting activities using our customer-provided CRM and LMT tools.","Upon request, we provide regularly scheduled reports to senior management."]},{id:12,title:"Sales Forecasts",icon:"12-salesforcast.svg",image:"12-card.png",text:["We provide sales forecasts for your assigned prospect base as requested, assisting in strategic planning and decision-making."]}],u="body-fixed",g="dynamic",N="hide",T="hide",M="active",A="active",C="modal-window-active",m=document.querySelector("body"),O=document.getElementById("cardsGrid"),S=document.querySelector(".menu-top__links"),r=document.querySelector(".toggle-animation-white"),I=document.getElementById("menuBtnGetintouch"),p=document.querySelector(".menu-burger"),W=document.querySelector(".menu-dropdown-wrapper"),H=document.querySelector(".menu-dropdown__text"),o=document.querySelectorAll(".image-2d"),a=document.querySelectorAll(".image-3d"),h=document.getElementById("modalWindow"),B=document.getElementById("modalOpenBtn"),D=document.getElementById("modalWindowContent"),q=document.getElementById("modalCloseBtn");r.addEventListener("click",P);B.addEventListener("click",l);q.addEventListener("click",l);h.addEventListener("click",e=>{!e.composedPath().includes(D)&&l()});function l(){h.classList.toggle(C),m.classList.toggle(u)}function f(){m.classList.toggle(u),S.classList.toggle(N),I.classList.toggle(T),p.classList.toggle(M),W.classList.toggle(A)}function P(){r.classList.toggle(g),r.classList.contains(g)?R():$()}function R(){o.forEach(e=>{e.classList.remove("fade-in")}),o.forEach(e=>{e.classList.add("fade-out")}),setTimeout(()=>{a.forEach(e=>{e.classList.remove("fade-out")}),a.forEach(e=>{e.classList.add("fade-in")})},1e3)}function $(){a.forEach(e=>{e.classList.remove("fade-in")}),a.forEach(e=>{e.classList.add("fade-out")}),setTimeout(()=>{o.forEach(e=>{e.classList.remove("fade-out")}),o.forEach(e=>{e.classList.add("fade-in")})},1e3)}p.addEventListener("click",function(){f()});H.addEventListener("click",function(){f()});x.forEach(e=>{const n=document.createElement("card-container");n.setAttribute("title",e.title),n.setAttribute("icon",`icons/${e.icon}`),n.setAttribute("image",`images/${e.image}`),n.setAttribute("text",JSON.stringify(e.text)),O.appendChild(n)});
