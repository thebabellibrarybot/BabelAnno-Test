import React from "react";
import useGetAnno from "../../functions/useGetAnno";
import Style from "./anoo.module.css";

const TextAnnotator = () => {
  const { curImg, curVersion, updateTextAnnotations } = useGetAnno();

  const handleTextChange = (index, event, randomId) => {
    const updatedTextAnnotations = [...curImg.textAnnotations];
    const annotation = updatedTextAnnotations[index] || {};
    const updatedText = annotation.text ? annotation.text + event.target.value : event.target.value;

    const updatedAnnotation = {
      text: updatedText,
      simpleId: index,
      randomId: randomId
    };

    updatedTextAnnotations[index] = updatedAnnotation;

    updateTextAnnotations(curVersion, curImg.fileObj.filename, updatedTextAnnotations);
  };

  return (
    <div>
      <h3>Text Annotator</h3>
      {!curImg ? null : (
        <div>
          {curImg.annotations.map((anno, index) => {
            const textAnnotation = curImg.textAnnotations;
            const value = textAnnotation ? textAnnotation.text : "";
            return (
              <div key={anno.randomId} className={Style.textLine}>
                <label>Text: {anno.simpleId}</label>
                <input
                  type="text"
                  value={value}
                  onChange={(event) => handleTextChange(anno.simpleId, event, anno.randomId)}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TextAnnotator;