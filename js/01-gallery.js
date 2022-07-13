import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
console.log(gallery);

const items = galleryItems.map(({ preview, original, description }) => {
  return `
  <div class="gallery__item">
  <a class="gallery__link" href="#${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
  `}).join('');
  
  gallery.insertAdjacentHTML("afterbegin", items);
  
function keyDown(event) {
    if (event.key === 'Escape') {
          openInstance.close();
        }  
};

let openInstance;
const instance = document.querySelector('.gallery').onclick = (event) => {
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  basicLightbox.create(`
      <img src="${event.target.dataset.source}">
    `, {
    onShow: (instance) => {        
      window.addEventListener('keydown', keyDown);
      openInstance = instance;
    },
    onClose: () => {
      window.removeEventListener;
    }
  }).show();
}