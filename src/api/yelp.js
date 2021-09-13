import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer dnaoL91rh_kTtQeh7qwsMRXY72We25lqglq1sN8fQHoWgdTeiyn1Wghnh4BXA_jstUnvM5_Oevmj0DSH6dBTzofpU_8kBl0aV2CPEz8ERivxFLYPUnEQNUGuuhI7YXYx",
  },
});
