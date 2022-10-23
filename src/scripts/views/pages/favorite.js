/* eslint-disable eqeqeq */
/* eslint-disable comma-dangle */
/* eslint-disable import/order */
/* eslint-disable quotes */
import FavoriteRestaurantIdb from "../../data/favorite-restaurant";
import RestaurantCard from "../templates/restaurant-card";
import Swal from "sweetalert2";

const Favorite = {
  async render() {
    return `
      <section class="content">
        <div class="latest">
          <div tabindex="0" class="latest__label">
            <h2>Your Favorite Restaurant</h2>
          </div>
          <h2 id="emptyData">There are no favorite restaurants yet</h2>
          <div class="restaurant-list" id="fav-restaurant-list"></div>
        </div>
      </section>
        `;
  },

  async afterRender() {
    const data = await FavoriteRestaurantIdb.getAllRestos();
    const FavoriteRestaurantContainer = document.querySelector(
      "#fav-restaurant-list"
    );
    const emptyCaption = document.querySelector("#emptyData");

    if (data.length == 0) {
      Swal.fire({
        title: "No Data?",
        text: "There are no favorite restaurants yet!",
        icon: "warning",
      });
    }

    if (data.length > 0) {
      emptyCaption.style.display = "none";
    }
    data.forEach((resto) => {
      FavoriteRestaurantContainer.innerHTML += RestaurantCard(resto);
    });
  },
};

export default Favorite;
