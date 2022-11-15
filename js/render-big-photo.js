import { createPictures } from './pictures.js';
import { openModal } from './modal.js';

const showBigPhoto = (id) => {
  const pictures = createPictures();
  const { url, likes, comments } = pictures[--id];

  const bigPictureElement = document.querySelector('.big-picture ');
  bigPictureElement.querySelector('.social__comment-count').classList.add('hidden');
  bigPictureElement.querySelector('.comments-loader').classList.add('hidden');

  bigPictureElement.querySelector('.big-picture__img img').src = url;
  bigPictureElement.querySelector('.likes-count').textContent = likes;
  bigPictureElement.querySelector('.comments-count').textContent = comments.length;

  const commentsContainerElement = bigPictureElement.querySelector('.social__comments');
  const templateElement = document.querySelector('#comment__id').content;
  const commentFragmentElement = document.createDocumentFragment();
  commentsContainerElement.innerHTML = '';

  comments.forEach((comment) => {
    const newComment = templateElement.cloneNode(true);
    const commentor = newComment.querySelector('.social__picture');
    commentor.src = comment.avatar;
    commentor.alt = comment.name;
    newComment.querySelector('.social__text').textContent = comment.message;
    commentFragmentElement.append(newComment);
  });
  commentsContainerElement.append(commentFragmentElement);
  openModal(bigPictureElement);
};

document.body.addEventListener('click', (evt) => {
  evt.preventDefault();
  showBigPhoto(evt.target.id);
});

