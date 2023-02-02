import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(basicLightbox)
// import * as basicLightbox from "basiclightbox";

const divContainer = document.querySelector(".gallery");

const imagesMarkup = createImagesMarkup(galleryItems);
divContainer.insertAdjacentHTML("beforeend", imagesMarkup);

function createImagesMarkup(galleryItems) {
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
  return markup;
}

divContainer.addEventListener("click", onClickOpenModal);
// divContainer.addEventListener("click", (event) => {
//   if (event.target === event.currentTarget) {
//     closeImage();
//   }
// });
function onClickOpenModal(event) {
  event.preventDefault();

  if (event.target.nodeName !==  "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height = "600"> `
  );
  instance.show();

  divContainer.addEventListener("keydown", closeModalEsc);
  function closeModalEsc(event) {
    if (event.code === "Escspe") {
      instance.close();
    }
  }
}
