/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import FavoriteRestaurantIdb from "../src/scripts/data/favorite-restaurant";
import * as TestFactories from "./helper/testFactories";

describe("Liking Resto", () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML =
      '<div class="like-button" id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it("should show the like button when the resto has not been liked before", async () => {
    await TestFactories.createLikeButtonPresenterWithResto({
      id: "fnfn8mytkpmkfw1e867",
    });

    expect(
      document.querySelector('[aria-label="Menghapus restaurant"]')
    ).toBeTruthy();
  });

  it("should not show the unlike button when the resto has not been liked before", async () => {
    await TestFactories.createLikeButtonPresenterWithResto({
      id: "fnfn8mytkpmkfw1e867",
    });

    expect(
      document.querySelector('[aria-label="Menyimpan restaurant"]')
    ).toBeFalsy();
  });

  it("should be able to like the resto", async () => {
    await TestFactories.createLikeButtonPresenterWithResto({
      id: "fnfn8mytkpmkfw1e867",
    });

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    const resto = await FavoriteRestaurantIdb.getResto("fnfn8mytkpmkfw1e867");
    expect(resto).toEqual({ id: "fnfn8mytkpmkfw1e867" });

    await FavoriteRestaurantIdb.deleteResto("fnfn8mytkpmkfw1e867");
  });

  it("should not add a resto again when its already liked", async () => {
    await TestFactories.createLikeButtonPresenterWithResto({
      id: "fnfn8mytkpmkfw1e867",
    });

    await FavoriteRestaurantIdb.putResto({ id: "fnfn8mytkpmkfw1e867" });
    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    const allResto = await FavoriteRestaurantIdb.getAllRestos();
    expect(allResto).toEqual([{ id: "fnfn8mytkpmkfw1e867" }]);

    await FavoriteRestaurantIdb.deleteResto("fnfn8mytkpmkfw1e867");
  });

  it("should not add a resto when it has no id", async () => {
    await TestFactories.createLikeButtonPresenterWithResto({});

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    const allResto = await FavoriteRestaurantIdb.getAllRestos();
    expect(allResto).toEqual([]);
  });
});
