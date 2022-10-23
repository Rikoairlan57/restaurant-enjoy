/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
/* eslint-disable quotes */
const assert = require("assert");

Feature("Unliking Restaurant");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("showing empty liked menu restaurant", ({ I }) => {
  I.dontSeeElement(".restaurant-item");
});

Scenario("unliking one restaurant", async ({ I }) => {
  I.dontSeeElement(".restaurant-item");
  I.amOnPage("/");
  I.waitForElement(".restaurant-item");
  I.seeElement(".restaurant-item__title a");

  const firstRestaurant = locate(".restaurant-item__title a").first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement("#likeButton");
  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.waitForElement("#likedButton");
  I.seeElement("#likedButton");
  I.click("#likedButton");

  I.amOnPage("/#/favorite");
  I.waitForElement(".restaurant-item");
  I.seeElement(".restaurant-item");
  const unlikedRestaurantsTitles = await I.grabTextFrom(
    ".restaurant-item__title a"
  );

  assert.strictEqual(firstRestaurantTitle, unlikedRestaurantsTitles);

  I.seeElement(".restaurant-item__title a");
  await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement("#likedButton");
  I.seeElement("#likedButton");
  I.click("#likedButton");

  I.amOnPage("/#/favorite");
  I.dontSeeElement(".restaurant-item");
});
