import { useContext } from 'react';
import { AnnoContext } from '../provider/annoProvider';

const useGetAnno = () => {
    const { imgArray, setImgArray, styles, setStyles } = useContext(AnnoContext);
    return { imgArray, setImgArray, styles, setStyles };
}
export default useGetAnno;