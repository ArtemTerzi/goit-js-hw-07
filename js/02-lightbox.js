import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

function galleryMarkupCreator(array) {
  return array
    .map(
      ({ original, preview, description }) => `
    <a class="gallery__item" href=${original}>
      <img
        class ="gallery__image"
        src=${preview}
        alt=${description}
      />
    </a>`
    )
    .join("");
}

galleryRef.innerHTML = galleryMarkupCreator(galleryItems);

galleryRef.addEventListener("click", (e) => {
  e.preventDefault();
  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
});
