import useGetAnno from "../../functions/useGetAnno";
import styles from './ImgBar.module.css';

const ImgBar = () => {

    const { versionArray, curVersion, curImg, setCurImg } = useGetAnno();


    return (
        <>
            {Object.keys(versionArray).length === 0 ?
                <p>no cur img</p>
                :
                <div className={styles.ImgBarContainer}>
                    <p>Current Image: {curImg.fileObj.filename}</p>
                    {Object.entries(versionArray[curVersion]).map(([key, value]) => {
                        return (
                            <div key={key} className={value === curImg ? styles.ImgBarItemClicked : styles.ImgBarItem} onClick={() => setCurImg(versionArray[curVersion][key])}>
                                <p>{key}</p>
                                <img src={value.fileObj.image} alt={value.fileObj.filename} />
                                <p>{value.fileObj.uploadDate}</p>
                            </div>
                        )
                    })}
                </div>
            }            
        </>
    )
};
export default ImgBar;