import useGetAnno from "../../functions/useGetAnno";

const Annotator = () => {
    
    const { curImg } = useGetAnno();
    console.log(curImg)
    
    return (
        <>
        { curImg ?
        <div>
            <img src={curImg.fileObj.image} alt={curImg.fileObj.filename} />
        </div> :
        <p>no cur img</p>}
        </>
    )
};
export default Annotator;


