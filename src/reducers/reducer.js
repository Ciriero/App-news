import {
  SET_LOADING,
  SET_NEWS,
  REMOVE_NEWS,
  HANDLE_SEARCH,
  HANDLE_PAGE,
} from "./actions";

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
    case HANDLE_SEARCH:
      return {
        ...state,
        query: action.payload,
        page: 0,
      };
    case HANDLE_PAGE:
      if (action.payload === "next") {
        let nextPage = state.page + 1;
        if (nextPage > state.tpages - 1) {
          nextPage = 0;
        }
        return { ...state, page: nextPage };
      }
      if (action.payload === "prev") {
        let prevPage = state.page - 1;
        if (prevPage < 0) {
          prevPage = state.tpages - 1;
        }
        return { ...state, page: prevPage };
      }

    default:
      return state;
  }
};

export default reducer;
