import { useContext } from 'react';
import { AnnoContext } from '../provider/annoProvider';

const useGetAnno = () => {
    const { versionArray, setVersionArray, setVersionArrayFunc, styles, setStyles, curImg, setCurImg, curVersion, setCurVersion, updateAnnotations, updateTextAnnotations, addNewVersion } = useContext(AnnoContext);
    return { versionArray, setVersionArray, setVersionArrayFunc, styles, setStyles, curImg, setCurImg, curVersion, setCurVersion, updateAnnotations, updateTextAnnotations, addNewVersion };
}
export default useGetAnno;