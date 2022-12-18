import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/reducer";
import { SET_LOADING } from "../reducers/actions";

const AppContext = createContext();

const API_URL = "https://hn.algolia.com/api/v1/search?";

const initialState = {
  isLoading: true,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const getData = async (url) => {
    dispatch({
      type: SET_LOADING,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
