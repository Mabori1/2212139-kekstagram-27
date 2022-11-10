import { createPhotos } from './photos.js';

const renderPhotos = () => {

  const templateFragment = document.querySelector('#picture').content.querySelector('.picture');
  const fragmentElement = document.createDocumentFragment();
  const picturesElement = document.querySelector('.pictures');
  const photos = createPhotos();

  photos.forEach((photo) => {
    const element = templateFragment.cloneNode(true);
    element.querySelector('.picture__img').src = photo.url;
    element.querySelector('.picture__likes').textContent = photo.likes;
    element.querySelector('.picture__comments').textContent = photo.comments.length;
    fragmentElement.appendChild(element);
  });
  picturesElement.append(fragmentElement);
};

export { renderPhotos };
