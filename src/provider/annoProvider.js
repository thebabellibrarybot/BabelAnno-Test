import { createContext } from "react";
import { useState } from "react";

export const AnnoContext = createContext({});

export const ThemeProvider = ({ children }) => {
    const [versionArray, setVersionArray] = useState({});
    const [styles, setStyles] = useState(null);
    const [curImg, setCurImg] = useState(null);
    const [curVersion, setCurVersion] = useState(null);
  
    const updateAnnotations = (version, filename, annotations) => {
      setVersionArray((prevVersionArray) => {
        const updatedVersionArray = { ...prevVersionArray };
  
        if (updatedVersionArray.hasOwnProperty(version)) {
          if (updatedVersionArray[version].hasOwnProperty(filename)) {
            const updatedImageObj = { ...updatedVersionArray[version][filename] };
            updatedImageObj.annotations = annotations;
            updatedVersionArray[version][filename] = updatedImageObj;
          }
        }
  
        return updatedVersionArray;
      });
    };
  
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
          [obj.filename]: { fileObj: obj, annotations: [], textAnnotations: [] },
        }), {}),
      };
  
      setVersionArray(formattedImgArray);
      setCurVersion(newVersion);
  
      if (!curImg) {
        setCurImg(Object.values(formattedImgArray[newVersion])[0]);
      }
    };
  
    const contextValues = {
      versionArray,
      setVersionArrayFunc,
      styles,
      setStyles,
      curImg,
      setCurImg,
      curVersion,
      setCurVersion,
      updateAnnotations,
    };
  
    return (
      <AnnoContext.Provider value={contextValues}>
        {children}
      </AnnoContext.Provider>
    );
  };
  