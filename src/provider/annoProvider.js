import { createContext } from "react";
import { useState } from "react";

export const AnnoContext = createContext({});

export const ThemeProvider = ({children}) => {
    
    const [imgArray, setImgArray] = useState([]);
    const [styles, setStyles] = useState(null);
    const [curImg, setCurImg] = useState(null);
    const [curVersion, setCurVersion] = useState(null);

    return ( 
        <AnnoContext.Provider value = {{ imgArray, setImgArray, styles, setStyles, curImg, setCurImg, curVersion, setCurVersion }}>
            {children}
        </AnnoContext.Provider>
    )
};