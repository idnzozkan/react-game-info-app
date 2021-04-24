const initState = {
  game: { platforms: [] },
  screenshots: { results: [] },
  isLoading: true
};

const gameDetailsReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_DETAILS":
      return {
        ...state,
        game: action.payload.game,
        screenshots: action.payload.screenshots,
        isLoading: false
      };

    case "LOAD_DETAILS":
      return {
        ...state,
        isLoading: true
      };
    default:
      return { ...state };
  }
};

export default gameDetailsReducer;
