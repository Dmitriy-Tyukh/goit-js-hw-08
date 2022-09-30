// Add imports above this line
import galleryItems from './gallery-items.json';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



const galleryItem = document.querySelector('.gallery');
const ItemsMarkup = galleryItemsMarkup(galleryItems);

galleryItem.innerHTML = ItemsMarkup;

let imageLightBox = new SimpleLightbox('.gallery a', {
  captionPosition: 'bottom',
  captionsData: 'alt',
  captionDelay: 250,
    captionClass: 'bgColor',
});

function galleryItemsMarkup(gallery) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        ` <a class="gallery__item" href="${original}">
            <img class="gallery__image" loading="lazy" src="${preview}" alt="${description}" />
        </a> `
    )
    .join('');
}
