import{r as e}from"./assets/rolldown-runtime-DMWpINJ5.js";import{n as t,r as n,t as r}from"./assets/vendor-Bgmy64pa.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var i=e(n(),1);function a(e){return t.get(`https://pixabay.com/api/`,{params:{key:`55648790-38a13299ea8938e2088d7c8dc`,q:e,image_type:`photo`,orientation:`horizontal`,safesearch:!0}}).then(e=>e.data)}var o=document.querySelector(`.gallery`),s=document.querySelector(`.loader`),c=null;function l(e){let t=e.map(e=>`
    <li class ="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
            <img
            class="gallery-image"
            src="${e.webformatURL}" 
            alt="${e.tags}"
            />
        </a>

        <div class="img-description">
            <div class="stat">
                <h3>Likes</h3>
                <p>${e.likes}</p>
            </div>
            <div class="stat">
                <h3>Views</h3>
                <p>${e.views}</p>
            </div>
            <div class="stat">
                <h3>Comments</h3>
                <p>${e.comments}</p>
            </div>
            <div class="stat">
                <h3>Downloads</h3>
                <p>${e.downloads}</p>
            </div>
        </div>  
    </li>`).join(``);o.insertAdjacentHTML(`beforeend`,t),c?c.refresh():c=new r(`.gallery a`,{captionsData:`alt`,captionDelay:250})}function u(){o.innerHTML=``,c=null}function d(){s.classList.add(`is-visible`)}function f(){s.classList.remove(`is-visible`)}window.global=window;var p=document.querySelector(`.form`);p.addEventListener(`submit`,e=>{e.preventDefault();let t=e.currentTarget.elements[`search-text`].value.trim();if(!t){i.default.warning({message:`Please enter a search query!`});return}u(),d(),a(t).then(e=>{let t=e.hits;if(t.length===0){i.default.error({message:`Sorry, there are no images matching your search query. Please try again!`});return}l(t)}).catch(e=>{i.default.error({message:e.message})}).finally(()=>{f(),p.reset()})});
//# sourceMappingURL=index.js.map