import { createContext, useContext } from "react";
import { food_list } from "../assets/assets";

// Correctly creating the context
export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
    const contextValue = {
        food_list
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};
