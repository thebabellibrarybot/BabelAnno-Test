import useGetAnno from "../../functions/useGetAnno";

const TextAnnotator = () => {
  const { curImg, curVersion, updateTextAnnotations } = useGetAnno();

  const handleTextChange = (simpleId,randomId, event) => {
    const annoLine = { simpleId: simpleId, randomId: randomId, text: event.target.value};
    updateTextAnnotations(curVersion, curImg.fileObj.filename, annoLine);
  };

  return (
    <div>
      <h1>Text Annotator</h1>
      {!curImg ? null : (
        <div>
          <p>Current Image: {curImg.fileObj.filename}</p>
          {curImg.annotations.map((anno, index) => {
            console.log(anno, 'anno')
            console.log(curImg.textAnnotations[index], 'curImg.textAnnotations')
            return(
              <div key={anno.randomId}>
                <label>Text: {anno.simpleId}</label>
                <input
                  type="text"
                  value={curImg.textAnnotations[index] ? curImg.textAnnotations[index][anno.randomId] : ""}
                  onChange={(event) => handleTextChange(anno.simpleId, anno.randomId, event)}
                />
              </div>
            )
          }
          )}
        </div>
      )}
    </div>
  );
};

export default TextAnnotator;