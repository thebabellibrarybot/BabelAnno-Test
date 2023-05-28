import useGetAnno from "../../functions/useGetAnno";

const VersionManager = () => {

    const { versionArray, curVersion, setCurVersion } = useGetAnno();

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
                                    <button onClick={() => setCurVersion(key)}>{key}</button>
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