import axios from "axios";
import { gameDetailsURL, screenshotsURL } from "../api";

export const loadDetails = (id) => async (dispatch) => {
  dispatch({
    type: "LOAD_DETAILS"
  });

  const detailsData = await axios.get(gameDetailsURL(id));
  const screenshotsData = await axios.get(screenshotsURL(id));

  dispatch({
    type: "FETCH_DETAILS",
    payload: {
      game: detailsData.data,
      screenshots: screenshotsData.data
    }
  });
};
