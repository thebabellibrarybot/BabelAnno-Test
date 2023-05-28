import useGetAnno from "../../functions/useGetAnno";

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
                <p>no cur version</p>
                :
                <div>
                    {
                        Object.keys(versionArray).map((key) => {
                            return (
                                <div key={key} className={curVersion === key ? 'clicked' : 'version-item'}>
                                    <p>{curVersion}</p>
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