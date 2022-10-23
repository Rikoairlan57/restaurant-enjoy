/* eslint-disable no-console */
/* eslint-disable quotes */
import RestaurantCard from "../templates/restaurant-card";
import EnjoySource from "../../data/restaurant-source";
import swallError from "../../components/SweetAlert/swal-error";

const Home = {
  async render() {
    return `
    
      <section class="content">
        <div class="latest">
          <div tabindex="0" class="latest__label">
            <h2>Daftar Restaurants</h2>
          </div>
          <div class="restaurant-list" id="restaurant-list"></div>
        </div>
      </section>
        `;
  },

  async afterRender() {
    const restaurantList = document.querySelector("#restaurant-list");
    const data = await EnjoySource.getRestaurantList();

    try {
      data.restaurants.forEach((restaurant) => {
        restaurantList.innerHTML += RestaurantCard(restaurant);
      });
    } catch (error) {
      console.error(error);

      swallError(error.message);
      throw new Error(error);
    }
  },
};

export default Home;
