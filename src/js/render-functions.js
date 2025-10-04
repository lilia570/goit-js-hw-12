 import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const loader = document.querySelector('.loading-box');
const btnLoad = document.querySelector('.btn-load');
const lightbox = new SimpleLightbox('.image-card a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const galleryContainer = document.querySelector('.gallery');

export function createGallery(images) {
  const imagesList = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="image-card">
          <a class="image-link" href="${largeImageURL}">
            <img 
              class="gallery-image" 
              src="${webformatURL}" 
              alt="${tags}" 
            />
          </a>
        
          <ul class="stats-list">
            <li class="stats-item"><strong>Likes</strong> <p>${likes}</p></li>
            <li class="stats-item"><strong>Views</strong> <p>${views}</p></li>
            <li class="stats-item"><strong>Comments</strong> <p>${comments}</p></li>
            <li class="stats-item"><strong>Downloads</strong> <p>${downloads}</p></li>
          </ul>
        </li>`
    )
    .join('');
  galleryContainer.insertAdjacentHTML('beforeend', imagesList);
  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}
export function showLoadMoreButton() {
  btnLoad.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  btnLoad.classList.add('hidden');
}