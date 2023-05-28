import React from "react";
import useGetAnno from "../../functions/useGetAnno";

const TextAnnotator = () => {
  const { curImg, curVersion, updateTextAnnotations } = useGetAnno();

  const handleTextChange = (index, event) => {
    const updatedTextAnnotations = [...curImg.textAnnotations];
    updatedTextAnnotations[index] = event.target.value;

    updateTextAnnotations(curVersion, curImg.fileObj.filename, updatedTextAnnotations);
  };

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
                value={curImg.textAnnotations[index] || ""}
                onChange={(event) => handleTextChange(anno.simpleId, event)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TextAnnotator;
