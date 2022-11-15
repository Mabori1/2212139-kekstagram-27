
const createPicture = (picture) => {
  const templateElement = document.querySelector('#picture').content;
  const element = templateElement.cloneNode(true);
  element.querySelector('.picture__img').src = picture.url;
  element.querySelector('#picture__id').id = picture.id;
  element.querySelector('.picture__likes').textContent = picture.likes;
  element.querySelector('.picture__comments').textContent = picture.comments.length;
  return element;
};

const renderPicture = (pictures) => {
  const containerElement = document.querySelector('.pictures');
  const fragmentElement = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const pictureElement = createPicture(picture);
    fragmentElement.append(pictureElement);
  });
  containerElement.append(fragmentElement);
};

export { renderPicture };
