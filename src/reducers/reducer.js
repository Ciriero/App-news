import { SET_LOADING, SET_NEWS, REMOVE_NEWS } from "./actions";

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
    case REMOVE_NEWS:
      const deleteNew = state.news.filter(
        (item) => item.objectID !== action.payload
      );
      return {
        ...state,
        news: deleteNew,
      };

    default:
      return state;
  }
};

export default reducer;
