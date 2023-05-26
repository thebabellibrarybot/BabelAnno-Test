import { useContext } from 'react';
import { AnnoContext } from '../provider/annoProvider';

const useGetAnno = () => {
    const { versionArray, setVersionArrayFunc, styles, setStyles, curImg, setCurImg, curVersion, setCurVersion } = useContext(AnnoContext);
    return { versionArray, setVersionArrayFunc, styles, setStyles, curImg, setCurImg, curVersion, setCurVersion };
}
export default useGetAnno;