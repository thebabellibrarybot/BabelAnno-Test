import useGetAnno from "../../functions/useGetAnno";
import { useState, useEffect } from "react";

const TextAnnotator = () => {
  const { curImg, curVersion, updateTextAnnotations } = useGetAnno();
  const [textAnnotations, setTextAnnotations] = useState(() => {
    if (curImg.textAnnotations.length > 0) {
      return curImg.textAnnotations;
    } else {
      return curImg.annotations.map((anno) => ({
        [anno.randomId]: "",
      }));
    }
  });

  const handleTextChange = (index, event) => {
    const updatedTextAnnotations = [...textAnnotations];
    updatedTextAnnotations[index] = { [curImg.annotations[index].id]: event.target.value };
    setTextAnnotations(updatedTextAnnotations);
    updateTextAnnotations(curVersion, curImg.fileObj.filename, updatedTextAnnotations);
  };

  useEffect(() => {
    setTextAnnotations(curImg.textAnnotations.length > 0 ? curImg.textAnnotations : []);
  }, [curImg]);

  return (
    <div>
      <h1>Text Annotator</h1>
      {!curImg ? null : (
        <div>
          <p>Current Image: {curImg.fileObj.filename}</p>
          {curImg.annotations.map((anno, index) => (
            <div key={anno.randomId}>
              <label>Text: {anno.simpleId}</label>
              <input
                type="text"
                value={textAnnotations[index] ? textAnnotations[index][anno.randomId] : ""}
                onChange={(event) => handleTextChange(index, event)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TextAnnotator;