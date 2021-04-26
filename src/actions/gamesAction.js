import axios from "axios";
import {
  newGamesURL,
  popularGamesURL,
  upcomingGamesURL,
  searchGameURL
} from "../api";

export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  const newGamesData = await axios.get(newGamesURL());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results
    }
  });
};

export const searchGame = (game_name) => async (dispatch) => {
  const searchData = await axios.get(searchGameURL(game_name));

  dispatch({
    type: "FETCH_SEARCHED_GAME",
    payload: {
      searched: searchData.data.results
    }
  });
};
