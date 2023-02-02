import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
const items = [];
// const imagesMarkup = createImagesMarkup(galleryItems);
// gallery.insertAdjacentHTML("beforeend", imagesMarkup);

// function createImagesMarkup(galleryItems) {
//   const markup = galleryItems
//     .map(({ preview, original, description }) => {
//       return `<div class="gallery__item">
//   <a class="gallery__item" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       alt="${description}"
//     />
//   </a>
// </div>`;
//     })
//     .join("");
//   return markup;
// }

galleryItems.forEach((element) => {
  const galleryLink = document.createElement("a");
  galleryLink.className = "gallery__link";
  galleryLink.href = element.original;

  const galleryImage = document.createElement("img");
  galleryImage.className = "gallery__image";
  galleryImage.src = element.preview;
  galleryImage.setAttribute("title", element.description);
  galleryImage.alt = element.description;

  galleryLink.append(galleryImage);
  items.push(galleryLink);
});
gallery.append(...items);

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});


