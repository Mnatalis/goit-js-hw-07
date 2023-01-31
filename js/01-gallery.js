import { galleryItems } from "./gallery-items.js";
// Change code below this line

const divContainer = document.querySelector("div");

const imagesMarkup = createImagesMarkap(galleryItems);
divContainer.insertAdjacentHTML("beforeend", imagesMarkup);

function createImagesMarkap(galleryItems) {
  const markup = galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

console.log(createImagesMarkap);

console.log(galleryItems);
