/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable quotes */
import CONFIG from "../../global/config";

const RestaurantDetail = (resto) => `
  <div tabindex="0" class ="detail-label">
    <h2>Halaman Detail</h2>
  </div>
  <div class = "content-detail">
    <img tabindex="0" class="restaurant-detail__thumbnail lazyload" data-src="${
      CONFIG.BASE_IMAGE_URL + resto.pictureId
    }" alt="${resto.name}" title="${resto.name}">
    <div class="label-detail__tags">
      <div class="icon-tags">
        <i title="restaurant" class="fa-solid fa-store "></i>
        <p tabindex="0" class="icons-tag__desc">${resto.name}</p>
      </div>
      <div class="icon-tags">
        <i title="address" class="fa-solid fa-map-marker-alt "></i>
        <p tabindex="0" class="icons-tag__desc">${resto.address}, ${
  resto.city
}</p>
      </div>
      <div class="icon-tags">
      <i class="fa-solid fa-map"></i>
        ${resto.categories
          .map(
            (category) =>
              `<p class="icons-tag__desc" tabindex="0">${category.name}</p> `
          )
          .join("")}
      </div>
      <div class="icon-tags">
        <i title="ratings" class="fa-solid fa-star  rating"></i>
        <p class="icons-tag__desc" tabindex="0">${resto.rating} </p>
      </div>
    </div>
      <p class="detail-desc" tabindex="0">${resto.description}</p>
  </div>

  <h3 class ="detail-label" tabindex="0">Menu ${resto.name}</h3>
  <div class="cards-menu">
    <div class="card-menu">
      <h4 tabindex="0">Makanan </h4>
      <ul tabindex="0">
        ${resto.menus.foods
          .map(
            (food, i) => `
          <li><p>${i + 1} ${food.name}</p></li>
          `
          )
          .join("")}
      </ul>
    </div>
    <div class="card-menu">
      <h4 tabindex="0">Minuman</h4>
      <ul tabindex="0">
        ${resto.menus.drinks
          .map(
            (drink, i) => `
          <li><p>${i + 1} ${drink.name}</p></li>
          `
          )
          .join("")}
      </ul>
    </div>
  </div>

  <div class="detail-reviews">
    <h2 tabindex="0">Reviews</h2>
    <ul >
      ${resto.customerReviews
        .map(
          (review) => `
      <li tabindex="0">
        <div>
          <span class="avatar">${review.name[0]}</span>
        </div>
        <div>
          <h3>${review.name}</h3>
          <p>${review.review}</p>
          <time>${review.date}</time>
        </div>
        </li>
        <hr>
      `
        )
        .join("")}
    </ul>
  </div>


`;

export default RestaurantDetail;
