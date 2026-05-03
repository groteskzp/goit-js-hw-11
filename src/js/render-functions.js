
import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm.js';
// import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.modules.js';
import "simplelightbox/dist/simple-lightbox.min.css";

const sel = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

let lightbox = null;
export function createGallery(images) {

    const markup = images.map((image) => `
    <li class ="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}">
            <img
            class="gallery-image"
            src="${image.webformatURL}" 
            alt="${image.tags}"
            />
        </a>

        <div class="img-description">
            <div class="stat">
                <h3>Likes</h3>
                <p>${image.likes}</p>
            </div>
            <div class="stat">
                <h3>Views</h3>
                <p>${image.views}</p>
            </div>
            <div class="stat">
                <h3>Comments</h3>
                <p>${image.comments}</p>
            </div>
            <div class="stat">
                <h3>Downloads</h3>
                <p>${image.downloads}</p>
            </div>
        </div>  
    </li>`)
        .join("");

    sel.insertAdjacentHTML("beforeend", markup)
    if (!lightbox) {
        lightbox = new SimpleLightbox(".gallery a", {
            captionsData: 'alt',
            captionDelay: 250,
        });
    } else {
        lightbox.refresh();
    }
}

export function clearGallery() {
    sel.innerHTML = "";
    lightbox = null;
}

export function showLoader() {
    loader.classList.add("is-visible");
}

export function hideLoader() {
    loader.classList.remove("is-visible");
}