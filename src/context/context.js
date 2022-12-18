import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/reducer";
import { SET_LOADING, SET_NEWS } from "../reducers/actions";

const AppContext = createContext();

const API_URL = "https://hn.algolia.com/api/v1/search?";

const initialState = {
  isLoading: true,
  news: [],
  query: "react",
  page: 0,
  tpages: 0
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const getData = async (url) => {
    dispatch({
      type: SET_LOADING,
    });
    try {
        const response = await fetch(url);
        const data = response.json();
        dispatch({
            type: SET_NEWS,
            payload: {news: data.hits, tpages: data.nbPages}
        })
    } catch (error) {
        console.log(error)
    }
  };

  useEffect(() => {
    getData(`${API_URL}query=${state.query}&page=${state.page}`);
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
