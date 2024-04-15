import {createContext, useState} from "react";

export const AppContext = createContext(null)



export const AppProvider = ({children}) => {
    const [value, setValue] = useState(null);
    const [cancelAnimation, setCancelAnimation] = useState(false);

    const handlePreviousRoute = galleryData => {
        setValue(galleryData);
    }
    const handleCancelAnimation = cancel => {
        setCancelAnimation(cancel);
    }

    const contextProps = {
        value,
        cancelAnimation,
        handlePreviousRoute,
        handleCancelAnimation
    };

    return (
        <AppContext.Provider value={contextProps}>
            {children}
        </AppContext.Provider>
    );
}