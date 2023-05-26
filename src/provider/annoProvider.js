import { createContext } from "react";
import { useState } from "react";

export const AnnoContext = createContext({});

export const ThemeProvider = ({children}) => {
    
    const [versionArray, setVersionArray] = useState({}); // an array of image objects with their annotations identified by version numbers
    const [styles, setStyles] = useState(null);
    const [curImg, setCurImg] = useState(null);
    const [curVersion, setCurVersion] = useState(null);

    // set the imaArray with a zero version number and adds a new version to the imgArray
    const setVersionArrayFunc = (newImgArray) => {

        let lastVersion = 0;
        if (Object.keys(versionArray).length > 0) {
          lastVersion = Object.keys(versionArray).reduce((max, version) => Math.max(max, parseFloat(version)), 0);
        }
        const newVersion = lastVersion + 1;
      
        const formattedImgArray = {
          ...versionArray,
          [newVersion]: newImgArray.reduce((acc, obj) => ({
            ...acc,
            [obj.filename]: { fileObj: obj, annotations: [] },
          }), {}),
        };
      
        setVersionArray(formattedImgArray);
        setCurVersion(newVersion);

        if (!curImg) {
            setCurImg(Object.values(formattedImgArray[newVersion])[0]);
        }
      };    

    return ( 
        <AnnoContext.Provider value = {{ 
            versionArray,
            setVersionArrayFunc, 
            styles, 
            setStyles, 
            curImg, 
            setCurImg, 
            curVersion, 
            setCurVersion,
            }}
            >
            {children}
        </AnnoContext.Provider>
    )
};