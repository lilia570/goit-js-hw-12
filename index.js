import{a as P,S as $,i}from"./assets/vendor-BSTwZ_tR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const g=async(o,t)=>(await P.get("https://pixabay.com/api/",{params:{key:"52588581-69f7ab0d2e25f8850fd21ce07",q:o.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})).data,p=document.querySelector(".loading-box"),f=document.querySelector(".btn-load"),q=new $(".image-card a",{captionsData:"alt",captionDelay:250}),h=document.querySelector(".gallery");function m(o){const t=o.map(({webformatURL:s,largeImageURL:l,tags:e,likes:r,views:n,comments:v,downloads:S})=>`<li class="image-card">
          <a class="image-link" href="${l}">
            <img 
              class="gallery-image" 
              src="${s}" 
              alt="${e}" 
            />
          </a>
        
          <ul class="stats-list">
            <li class="stats-item"><strong>Likes</strong> <p>${r}</p></li>
            <li class="stats-item"><strong>Views</strong> <p>${n}</p></li>
            <li class="stats-item"><strong>Comments</strong> <p>${v}</p></li>
            <li class="stats-item"><strong>Downloads</strong> <p>${S}</p></li>
          </ul>
        </li>`).join("");h.insertAdjacentHTML("beforeend",t),q.refresh()}function x(){h.innerHTML=""}function y(){p.classList.remove("hidden")}function L(){p.classList.add("hidden")}function b(){f.classList.remove("hidden")}function c(){f.classList.add("hidden")}const u=document.querySelector(".form"),O=document.querySelector(".btn-load");let a=1,w="",d=0;const R=15;u.addEventListener("submit",async o=>{o.preventDefault(),c(),a=1;const t=o.target.elements["search-text"].value.trim();if(w=t,t===""){i.error({title:"Please write word!",position:"topRight"});return}x(),y();try{const s=await g(t,a);if(s.hits.length===0){i.error({title:`Sorry, there are no images matching your search ${t}. Please try again!`,position:"topRight"});return}d=Math.ceil(s.totalHits/R),a>=d?i.info({title:"We're sorry, but you've reached the end of search results.",position:"topRight"}):b(),m(s.hits),u.reset()}catch(s){i.error({title:s.message,position:"topRight"})}finally{L()}});O.addEventListener("click",async()=>{c(),y(),a+=1;try{const o=await g(w,a);o.hits.length===0||a>=d?(i.info({title:"We're sorry, but you've reached the end of search results.",position:"topRight"}),c()):b(),m(o.hits);const t=document.querySelector(".image-card");if(t){const s=t.getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}}catch(o){i.error({title:o.message,position:"topRight"})}finally{L()}});
//# sourceMappingURL=index.js.map
