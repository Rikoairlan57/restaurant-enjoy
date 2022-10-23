/* eslint-disable import/prefer-default-export */
/* eslint-disable quotes */
import LikeButtonInitiator from "../../src/scripts/utils/like-button-initiator";
import FavoriteRestaurantIdb from "../../src/scripts/data/favorite-restaurant";

const createLikeButtonPresenterWithResto = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector("#likeButtonContainer"),
    favoriteResto: FavoriteRestaurantIdb,
    data: {
      restaurant,
    },
  });
};

export { createLikeButtonPresenterWithResto };
