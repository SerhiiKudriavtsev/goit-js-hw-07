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

gallery.addEventListener('click', onImageClick)

function onImageClick(event) {
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  const instance = basicLightbox.create(`
      <img src="${itemOriginal()}">
  `)
  instance.show()
  
  function itemOriginal(){
    for (const item of galleryItems) {
      if (item.description === event.target.alt) {
        return item.original;
      }
    }
  } 
  addEventListener('keydown', closeModal)
  function closeModal(evt) {
    if (evt.keyCode !== 27) {
      return
    }
    instance.close()
    }
}