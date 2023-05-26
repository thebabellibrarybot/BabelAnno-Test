import useGetAnno from "../../functions/useGetAnno";
import styles from './ImgBar.module.css';

const ImgBar = () => {

    const { imgArray } = useGetAnno();

    return (
        <>
            { imgArray.length > 0 ? 
            <div className={styles.ImgBarContainer}>
                {imgArray.map((image, index) => (
                    <div key={index} className={styles.ImgBarItem}>
                        <h3>{image.filename}</h3>
                        <p>Upload Date: {image.uploadDate}</p>
                        <p>Size: {image.size} bytes</p>
                        <img src={image.image} alt={image.filename} />
                    </div>
                ))}
            </div>
            :
            null}
        </>
    )
};
export default ImgBar;