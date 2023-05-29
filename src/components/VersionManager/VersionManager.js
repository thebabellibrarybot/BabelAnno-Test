import useGetAnno from "../../functions/useGetAnno";
import Style from "./versionManager.module.css";

const VersionManager = () => {

    const { versionArray, curVersion, setCurVersion, setCurImg } = useGetAnno();

    const handleNewVersion = (key) => {
        console.log('fired handleNewVersion')
        setCurVersion(key);
        setCurImg(versionArray[key][Object.keys(versionArray[key])[0]]);
    };

    return (
        <>
            {Object.keys(versionArray).length === 0 ?
                    null
                    :
                    <div className={Style.versionManager}>
                        {
                            Object.keys(versionArray).map((key) => {
                                return (
                                    <div key={key} className={curVersion === key ? 'clicked' : 'version-item'}>
                                        <button onClick={() => handleNewVersion(key)}>{key}</button>
                                    </div>
                                )
                            }
                            )
                        }
                    </div>
            }       
        </>
    )
};
export default VersionManager;