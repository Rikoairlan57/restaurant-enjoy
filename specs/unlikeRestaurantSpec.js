/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import FavoriteRestaurantIdb from "../src/scripts/data/favorite-restaurant";
import * as TestFactories from "./helper/testFactories";

describe("Unliking Resto", () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML =
      '<div class="like-button" id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantIdb.putResto({ id: "rqdv5juczeskfw1e867" });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteResto("rqdv5juczeskfw1e867");
  });

  it("should display unlike widget when the resto has been liked", async () => {
    await TestFactories.createLikeButtonPresenterWithResto({
      id: "rqdv5juczeskfw1e867",
    });

    expect(
      document.querySelector('[aria-label="Menyimpan restaurant"]')
    ).toBeTruthy();
  });

  it("should not display unlike widget when the resto has been liked", async () => {
    await TestFactories.createLikeButtonPresenterWithResto({
      id: "rqdv5juczeskfw1e867",
    });

    expect(
      document.querySelector('[aria-label="Menghapus restaurant"]')
    ).toBeFalsy();
  });

  it("should be able to remove liked resto from the list", async () => {
    await TestFactories.createLikeButtonPresenterWithResto({
      id: "rqdv5juczeskfw1e867",
    });

    document
      .querySelector('[aria-label="Menyimpan restaurant"]')
      .dispatchEvent(new Event("click"));

    expect(await FavoriteRestaurantIdb.getAllRestos()).toEqual([]);
  });

  it("should not throw error if the unliked resto is not in the list", async () => {
    await TestFactories.createLikeButtonPresenterWithResto({
      id: "rqdv5juczeskfw1e867",
    });

    await FavoriteRestaurantIdb.deleteResto("rqdv5juczeskfw1e867");
    document
      .querySelector('[aria-label="Menyimpan restaurant"]')
      .dispatchEvent(new Event("click"));
    const allResto = await FavoriteRestaurantIdb.getAllRestos();

    expect(allResto).toEqual([]);
  });
});
