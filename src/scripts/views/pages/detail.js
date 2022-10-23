/* eslint-disable no-console */
/* eslint-disable quotes */
import UrlParser from "../../routes/url-parser";
import EnjoySource from "../../data/restaurant-source";
import RestaurantDetail from "../templates/restaurant-detail";
import LikeButtonInitiator from "../../utils/like-button-initiator";
import swallError from "../../components/SweetAlert/swal-error";

const Detail = {
  async render() {
    return `
    <div class ="content" >
      <div id="main-container">
        <section id="detail-resto"></section>
      </div>
      <div id="likeButtonContainer"></div>
    </div>
  `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailRestoContainer = document.querySelector("#detail-resto");
    try {
      const data = await EnjoySource.getRestaurantDetail(url.id);
      detailRestoContainer.innerHTML += RestaurantDetail(data.restaurant);
      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector("#likeButtonContainer"),
        data,
      });
    } catch (error) {
      console.error(error);
      swallError(error.message);
      throw new Error(error);
    }
  },
};

export default Detail;
