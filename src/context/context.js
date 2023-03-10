import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/reducer";
import {
  SET_LOADING,
  SET_NEWS,
  REMOVE_NEWS,
  HANDLE_SEARCH,
  HANDLE_PAGE,
} from "../reducers/actions";

const AppContext = createContext();

const API_URL = "https://hn.algolia.com/api/v1/search?";

const initialState = {
  isLoading: true,
  news: [],
  query: "react",
  page: 0,
  tpages: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const getData = async (url) => {
    dispatch({
      type: SET_LOADING,
    });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({
        type: SET_NEWS,
        payload: { news: data.hits, tpages: data.nbPages },
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData(`${API_URL}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  const handleDelete = (id) => {
    dispatch({
      type: REMOVE_NEWS,
      payload: id,
    });
  };

  const handleSearch = (query) => {
    dispatch({
      type: HANDLE_SEARCH,
      payload: query,
    });
  };

  const handlePage = (page) => {
    dispatch({
      type: HANDLE_PAGE,
      payload: page,
    });
  };

  return (
    <AppContext.Provider
      value={{ ...state, handleDelete, handleSearch, handlePage }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
