import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

function galleryMarkupCreator(array) {
  return array
    .map(
      ({ original, preview, description }) => `
          <div class="gallery__item">
    <a class="gallery__link" href=${original}>
      <img
        class ="gallery__image"
        src=${preview}
        data-source=${original}
        alt=${description}
      />
    </a>
  </div>`
    )
    .join("");
}

galleryRef.innerHTML = galleryMarkupCreator(galleryItems);

galleryRef.addEventListener("click", (e) => {
  e.preventDefault();

  const modal = basicLightbox.create(
    `
		<img src=${e.target.dataset.source}>
	`
  );
  modal.show();

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.close();
    }
  });
});
