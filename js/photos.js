import { getRandomPositiveInteger, getRandomArrayElement, } from './util.js';

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
  'Случайно получилось'
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

const PHOTO_DESCRIPTION_COUNTER = 25;

const createDescriptionOfThePhoto = (index) => {
  const descriptionOfThePhoto = {
    id: `${index}`,
    url: `photos/${index}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomPositiveInteger(15, 200),
    comments: {
      id: `${index}`,
      avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
      message: getRandomArrayElement(MESSAGE),
      name: getRandomArrayElement(NAME)
    }
  };
  return descriptionOfThePhoto;
};

const createPhotos = () => {
  const similarPhotos = Array.from({ length: PHOTO_DESCRIPTION_COUNTER },
    (_, index) => createDescriptionOfThePhoto(index + 1));
  return similarPhotos;
};

export { createPhotos };
