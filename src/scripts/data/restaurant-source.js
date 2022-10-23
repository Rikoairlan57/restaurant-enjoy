/* eslint-disable quotes */
import API_ENDPOINT from "../global/api-endpoint";
import CONFIG from "../global/config";

class EnjoySource {
  static async getRestaurantList() {
    const response = await fetch(API_ENDPOINT.LIST);
    return response.json();
  }

  static async getRestaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async postRestaurantReview(data) {
    const response = await fetch(API_ENDPOINT.POST_REVIEW, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": CONFIG.KEY_URL,
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
}

export default EnjoySource;
