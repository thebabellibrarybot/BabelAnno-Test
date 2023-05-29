import { createContext } from "react";
import { useState } from "react";

export const AnnoContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const [versionArray, setVersionArray] = useState({});
  const [styles, setStyles] = useState(null);
  const [curImg, setCurImg] = useState(null);
  const [curVersion, setCurVersion] = useState(null);

  // updates the bbox annotations in the current image in the current version
  const updateAnnotations = (version, filename, annotations) => {
      const originalVersionArray = JSON.parse(JSON.stringify(versionArray));

      if (originalVersionArray.hasOwnProperty(version)) {
        if (originalVersionArray[version].hasOwnProperty(filename)) {
          originalVersionArray[version][filename].annotations = annotations
        }
      }
      setVersionArray(originalVersionArray);
      setCurImg(originalVersionArray[version][filename])
  };
  // updates the text annotations for the current image in the current version
  const updateTextAnnotations = (version, filename, textAnnotations) => {
    const originalVersionArray = JSON.parse(JSON.stringify(versionArray));

    if (originalVersionArray.hasOwnProperty(version)) {
      if (originalVersionArray[version].hasOwnProperty(filename)) {
        originalVersionArray[version][filename].textAnnotations = textAnnotations
      }
    }
    setVersionArray(originalVersionArray);
    setCurImg(originalVersionArray[version][filename])
  };

  // sets the version array: { version: { filename: { fileObj, annotations, textAnnotations } } }
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

  // makes a new version which is a copy of the curVersion
  const addNewVersion = () => {
    setVersionArray((prevVersionArray) => {
      const newVersionNumber = Object.keys(prevVersionArray).reduce(
        (max, version) => Math.max(max, parseFloat(version)),
        0
      ) + 1;
  
      const newVersion = {
        ...prevVersionArray,
        [newVersionNumber]: { ...prevVersionArray[curVersion] },
      };
      setCurVersion(newVersionNumber);
      return newVersion;
    });
  };
  

  const contextValues = {
    versionArray,
    setVersionArrayFunc,
    setVersionArray,
    styles,
    setStyles,
    curImg,
    setCurImg,
    curVersion,
    setCurVersion,
    updateAnnotations,
    updateTextAnnotations,
    addNewVersion,
  };

  return (
    <AnnoContext.Provider value={contextValues}>
      {children}
    </AnnoContext.Provider>
  );
};