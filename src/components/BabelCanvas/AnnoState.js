import useGetAnno from "../../functions/useGetAnno";

const AnnoState = () => {

    const {curImg, curVersion} = useGetAnno();

    return (
        <div className='anno-state'>
            <h1>Annotation State</h1>
            <p>Current Image: {curImg.fileObj.filename}</p>
            <p>Current Version: {curVersion}</p>
        </div>
    )
};
export default AnnoState;