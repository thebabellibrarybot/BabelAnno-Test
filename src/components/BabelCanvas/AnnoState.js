import useGetAnno from "../../functions/useGetAnno";

const AnnoState = () => {

    const {curImg} = useGetAnno();

    return (
        <div className='anno-state'>
            <h1>Annotation State</h1>
            <p>Current Image: {curImg.fileObj.filename}</p>
        </div>
    )
};
export default AnnoState;