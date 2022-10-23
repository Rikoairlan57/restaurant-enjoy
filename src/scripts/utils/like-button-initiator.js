/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable quotes */
import FavoriteRestaurantIdb from "../data/favorite-restaurant";
import likeButtonComponent from "../components/LikeButton/like-button";
import unlikeButtonComponent from "../components/LikeButton/unlike-button";
import swalSuccess from "../components/SweetAlert/swal-success";
import swallError from "../components/SweetAlert/swal-error";

const LikeButtonInitiator = {
  async init({ likeButtonContainer, data }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = data.restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    try {
      const { id } = this._restaurant;

      const restaurant = await FavoriteRestaurantIdb.getResto(id);

      if (restaurant) {
        this._renderUnlikeButtonComponent();
      } else {
        this._renderLikeButtonComponent();
      }
    } catch (error) {
      console.error(error);
      swallError(error.message);
      throw new Error(error);
    }
  },

  _renderLikeButtonComponent() {
    this._likeButtonContainer.innerHTML = likeButtonComponent();

    const likeButton = document.querySelector("#likeButton");
    likeButton.addEventListener("click", async () => {
      await FavoriteRestaurantIdb.putResto(this._restaurant);
      swalSuccess("Berhasil disimpan");
      this._renderButton();
    });
  },

  _renderUnlikeButtonComponent() {
    this._likeButtonContainer.innerHTML = unlikeButtonComponent();

    const likedButton = document.querySelector("#likedButton");
    likedButton.addEventListener("click", async () => {
      await FavoriteRestaurantIdb.deleteResto(this._restaurant.id);
      swalSuccess("Berhasil dihapus");
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
