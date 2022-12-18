import { createContext, useContext } from "react";
import reducer from "../reducers/reducer";
import { SET_LOADING } from "../reducers/actions";

const AppContext = createContext();

const API_URL = "https://hn.algolia.com/api/v1/search?";

const AppProvider = ({children}) => {
    return <AppContext.Provider value={"Hello, world"}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}


export {AppContext, AppProvider}