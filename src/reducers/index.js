import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import gameDetailsReducer from "./gameDetailsReducer";

const rootReducer = combineReducers({
  games: gamesReducer,
  detail: gameDetailsReducer
});

export default rootReducer;
