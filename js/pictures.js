import { getRandomPositiveInteger, getRandomArrayElement, createRandomId } from './util.js';

const PHOTO_DESCRIPTION_COUNTER = 25;
const COMMENT_PER_PHOTO_MAX = 6;
const COMMENT_PER_PHOTO_MIN = 2;
const COMMENT_PHOTO_MAX = PHOTO_DESCRIPTION_COUNTER * COMMENT_PER_PHOTO_MAX;

const NAME = [
  'Лёха',
  'Piter',
  'Oliver',
  'George',
  'Jack',
  'Olivia',
  'Harry',
  'Amelia ',
  'Jacob ',
  'Emily',
  'Charlie',
  'Ava ',
  'Thomas',
  'Jessica',
  'Oscar',
  'Isabella',
  'William',
  'Sophie',
  'James',
  'Mia',
  'Ruby',
  'Lily',
  'Anna',
  'Djonson',
  'Azazel',
  'Zirael'
];

const DESCRIPTION = [
  'Кушаю кексик',
  'Уронил банан',
  'Это я и моя бабушка',
  'Мой завтрак',
  'Люблю котиков',
  'Угадай, где я',
  'Это не я',
  'Случайно получилось',
  'Следуй за своим сердцем, но не забывай брать с собой мозг',
  'Мне нужен шестимесячный отпуск дважды в год',
  'Я на 99% ангел, но вот этот оставшийся 1%',
  'Никогда не отказывайся от своей мечты. Продолжай спать',
  'Если бы кто-то услышал мои мысли, то я был бы в психушке',
  'Как я себя чувствую без кофе экспрессо? Депрессо',
  'Жизнь коротка, поэтому улыбайтесь, пока есть возможность и зубы',
  'Хочу отправить свое фото в НАСА. Пусть увидят, что такое настоящая звезда',
  'Я пытался быть адекватным, но это были худшие две минуты моей жизни',
  'Умный человек решает проблемы, а мудрый в них старается не попадать',
  'Я не ленив, просто нахожусь в привычном для себя энергосберегающем режиме',
  'Не спеши взрослеть. Взросление – это ловушка',
  'Необязательно всем нравится. Не все люди имеют значение',
  'У меня доброе сердце, но вот язык…',
  'Мама учила не материться, а жизнь научила не материться при маме',
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Мне не понравилось',
  'Мне очень понравилось'
];

const generateId = createRandomId(1, COMMENT_PHOTO_MAX);
const getComment = () => ({
  id: generateId(),
  avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGE),
  name: getRandomArrayElement(NAME)
});

const createDescriptionOfThePhoto = (index) => {
  const descriptionOfThePhoto = {
    id: `${index}`,
    url: `photos/${index}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomPositiveInteger(15, 200),
    comments: Array.from({
      length:
        getRandomPositiveInteger(COMMENT_PER_PHOTO_MIN, COMMENT_PER_PHOTO_MAX)
    }, getComment)
  };
  return descriptionOfThePhoto;
};

const createPictures = () => {
  const similarPhotos = Array.from({ length: PHOTO_DESCRIPTION_COUNTER },
    (_, index) => createDescriptionOfThePhoto(index + 1));
  return similarPhotos;
};

export { createPictures };
