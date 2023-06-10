const galleryContainer = document.querySelector('.gallery-container');

galleryContainer.addEventListener('wheel', (event) => {
  event.preventDefault();
  galleryContainer.scrollLeft += event.deltaY;
})
