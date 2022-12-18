import { SET_LOADING, SET_NEWS } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SET_NEWS:
      return {
        ...state,
        isLoading: false,
        news: action.payload.news,
        tpages: action.payload.tpages,
      };

    default:
      return state;
  }
};

export default reducer;
