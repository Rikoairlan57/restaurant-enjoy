/* eslint-disable indent */
/* eslint-disable quotes */
import CONFIG from "../../global/config";

const RestaurantCard = (resto) => `
  <article tabindex="0" class="restaurant-item" alt="Menu untuk melihat restoran">
    <a href="#/detail/${resto.id}">
    
    <img  class="restaurant-item__thumbnail lazyload" data-src="${
      CONFIG.BASE_IMAGE_URL + resto.pictureId
    }" 
    alt="${resto.name}" title="${resto.name}">
    </a>
        <div class="restaurant-item__content">
            <p class="restaurant-item__city">${resto.city}</p>
            <p class="restaurant-item__rating">Rating: <strong >${
              resto.rating
            }</strong></p>
                    <h2  class="restaurant-item__title"><a href="#/detail/${
                      resto.id
                    }">${resto.name}</a></h2>
                    <p class="restaurant-item__description">${
                      resto.description
                    }</p>
        </div>
    </article>

`;

export default RestaurantCard;
