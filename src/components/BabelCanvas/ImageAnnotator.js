import useGetAnno from "../../functions/useGetAnno";
import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

const ImageAnnotator = () => {
  const { curImg, curVersion, updateAnnotations } = useGetAnno();
  const [boxes, setBoxes] = useState([]);
  const [drawing, setDrawing] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Clears all to default if image changes
  useEffect(() => {
    setDrawing(false);
    setBoxes([]);
  }, [curImg]); 
  // starts the annotation when the mouse is double clicked
  const handleDoubleClick = (event) => {
    const { clientX, clientY } = event;
    const containerRect = containerRef.current.getBoundingClientRect();
    const x = clientX - containerRect.left;
    const y = clientY - containerRect.top;

    setStartPosition({ x, y });
    setDrawing(true);
  };
  // draws the annotation when the mouse moves
  const handleMouseMove = (event) => {
    if (drawing) {
      const { clientX, clientY } = event;
      const containerRect = containerRef.current.getBoundingClientRect();
      const x = clientX - containerRect.left;
      const y = clientY - containerRect.top;

      const width = Math.abs(x - startPosition.x);
      const height = Math.abs(y - startPosition.y);

      const activeBox = {
        id: "active",
        x: startPosition.x,
        y: startPosition.y,
        width,
        height,
      };

      setBoxes((prevBoxes) => [
        ...prevBoxes.filter((box) => box.id !== "active"),
        activeBox,
      ]);
    }
  };
  // adds the annotation when the mouse is released
  const handleMouseUp = () => {
    if (drawing) {
      setDrawing(false);
    }
  };
  // adds the annotation when the box is clicked
  const handleBoxClick = (id, points) => {
    const updatedPoints = {
      simpleId: 0, // Placeholder for simple numerical id
      randomId: uuidv4(), // Generate a unique random id
      x: points.x,
      y: points.y,
      width: points.width,
      height: points.height,
    };

    const isDuplicate = curImg.annotations.some(
      (anno) =>
        anno.x === updatedPoints.x &&
        anno.y === updatedPoints.y &&
        anno.width === updatedPoints.width &&
        anno.height === updatedPoints.height
    );

    if (!isDuplicate) {
      const updatedAnnosWithoutIds = [...curImg.annotations, updatedPoints];
      const sortedAnnos = updatedAnnosWithoutIds.sort((anno1, anno2) => anno1.y - anno2.y);

      let nextSimpleId = 1;
      const updatedAnnosWithIds = sortedAnnos.map((anno) => {
        const updatedAnno = { ...anno, simpleId: nextSimpleId };
        nextSimpleId++;
        return updatedAnno;
      });
      console.log(updatedAnnosWithIds, 'updatedAnnosWithIds');
      console.log(curImg, 'curImg')
      updateAnnotations(
        curVersion,
        curImg.fileObj.filename,
        updatedAnnosWithIds
      );
    }
  };
  // deletes the annotation when the X is clicked
  const handleDeleteAnno = (index) => {
    const updatedAnnosWithoutIds = curImg.annotations.filter((_, i) => i !== index);

    // Update the id values to ensure there are no skipped numbers
    let nextId = 1;
    const updatedAnnosWithIds = updatedAnnosWithoutIds.map((anno) => {
      const updatedAnno = { ...anno, id: nextId };
      nextId++;
      return updatedAnno;
    });

    updateAnnotations(curVersion, curImg.fileObj.filename, updatedAnnosWithIds);
  };
  // cancels the box when right clicked
  const handleCancelBox = (event) => {
    event.preventDefault();
    if (drawing) {
      setDrawing(false);
      setBoxes((prevBoxes) => prevBoxes.filter((box) => box.id !== "active"));
    }
  };

  return (
    <>
      {curImg && (
        <div
          ref={containerRef}
          style={{
            position: "relative",
            width: "fit-content",
            height: "fit-content",
            border: "3px solid black",
            display: "inline-block",
          }}
          onDoubleClick={handleDoubleClick}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onContextMenu={handleCancelBox}
        >
          <img
            src={curImg.fileObj.image}
            alt={curImg.fileObj.filename}
            style={{ width: "100%", height: "100%" }}
          />
          {boxes.map((box, index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                left: box.x,
                top: box.y,
                width: box.width,
                height: box.height,
                border: "2px solid lightgreen",
                zIndex: 2,
              }}
              onClick={() => handleBoxClick(index, box)}
            />
          ))}
          {curImg.annotations.map((anno, index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                left: anno.x,
                top: anno.y,
                width: anno.width,
                height: anno.height,
                border: "2px solid red",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  background: "rgba(255, 0, 0, 0.3)",
                  padding: "2px",
                  fontSize: "12px",
                  color: "black",
                }}
              >
                {anno.simpleId}
              </span>
              <button
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  padding: "2px",
                  fontSize: "12px",
                  background: "rgba(255, 0, 0, 0.3)",
                  color: "black",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => handleDeleteAnno(index)}
              >
                X
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ImageAnnotator;