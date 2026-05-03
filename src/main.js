window.global = window;

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from './js/pixabay-api';
import { clearGallery, createGallery, hideLoader, showLoader } from './js/render-functions';

const form = document.querySelector("form");
const handlerForm = event => {
    event.preventDefault();
    const query = event.currentTarget.elements["search-text"].value.trim();
    if (!query) {
        iziToast.warning({message:"Please enter a search query!" })
        return;
    }
    clearGallery();
    showLoader();

    getImagesByQuery(query)
    .then((resource) => {
        const images = resource.hits;
        if (images.length === 0) {
            iziToast.error({ message: "Sorry, there are no images matching your search query. Please try again!"});
            return;
        } 

        createGallery(images);
        
    })
    .catch(err => {
        iziToast.error({ message: err.message });              
    })
    .finally(() => {
        hideLoader();
        form.reset();
    });
}

    
form.addEventListener("submit", handlerForm);
