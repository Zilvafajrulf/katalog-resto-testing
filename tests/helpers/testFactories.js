/* eslint-disable import/prefer-default-export */
import LikeButtonPresenter from '../../src/script/utils/like-button-presenter';
import FavRestoIdb from '../../src/script/data/resto-idb';

const createLikeButtonPresenterWithResto = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteResto: FavRestoIdb,
    restaurant,
  });
};

export { createLikeButtonPresenterWithResto };
