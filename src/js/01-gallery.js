

import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const refs = {
  galleryList: document.querySelector('.gallery'), //общий родитель картинок
  
};



const galleryMarkup = createGallerymarkup(galleryItems);
refs.galleryList.insertAdjacentHTML('beforeend', galleryMarkup )
// console.log(createGallerymarkup(galleryItems))

// refs.galleryList.addEventListener('click', onGalleryClick)



function createGallerymarkup(el) {
  // el.prventDefault();
    return el.map(({preview, original, description}) => {
        return `
         <li class="gallery__item"> 
  <a class="gallery__link" href="${preview}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
  </li>

`;
    }).join(' ');        
}

refs.galleryList.addEventListener('click', onOpenModal);

function onOpenModal(evt) {
//   window.addEventListener('keydown', onEscKeyPress);
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
    evt.preventDefault();   
    

    const captionOptions = {
    
    
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    enableKeyboard: true,
       };
let simpleLightboxGallery = new SimpleLightbox('.gallery a', captionOptions);
simpleLightboxGallery.on('show.simplelightbox', function () {
    open// do something…
    });

    
}
