import useGetAnno from "../../functions/useGetAnno";
import { useState, useRef, useEffect } from "react";

const ImageAnnotator = () => {
  const { curImg, updateAnnotations } = useGetAnno();
  const [boxes, setBoxes] = useState([]);
  const [drawing, setDrawing] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [annos, setAnnos] = useState(curImg.annotations.length > 1 ? curImg.annotations : []);

  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      // Update the box positions and annotation coordinates when the container div is resized
      const containerRect = containerRef.current.getBoundingClientRect();
      const scaleX = containerRect.width / curImg.fileObj.width;
      const scaleY = containerRect.height / curImg.fileObj.height;

      setBoxes((prevBoxes) =>
        prevBoxes.map((box) => ({
          ...box,
          x: box.x * scaleX,
          y: box.y * scaleY,
          width: box.width * scaleX,
          height: box.height * scaleY,
        }))
      );

      setAnnos((prevAnnos) =>
        prevAnnos.map((anno) => ({
          ...anno,
          x: anno.x * scaleX,
          y: anno.y * scaleY,
          width: anno.width * scaleX,
          height: anno.height * scaleY,
        }))
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [curImg]);

  const handleDoubleClick = (event) => {
    const { clientX, clientY } = event;
    const containerRect = containerRef.current.getBoundingClientRect();
    const x = clientX - containerRect.left;
    const y = clientY - containerRect.top;

    setStartPosition({ x, y });
    setDrawing(true);
  };

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

  const handleMouseUp = () => {
    if (drawing) {
      setDrawing(false);
    }
  };

  const handleBoxClick = (id, points) => {
    console.log("Box ID:", id);
    console.log("Box Dimensions:", points);
    const updatedPoints = { id: annos.length, ...points };
    setAnnos((prevAnnos) => (prevAnnos.length === 0 ? [updatedPoints] : [...prevAnnos, updatedPoints]));
    console.log("Annotations:", annos, annos.length);
  };

  const handleCancelBox = (event) => {
    event.preventDefault();
    if (drawing) {
      setDrawing(false);
      setBoxes((prevBoxes) => prevBoxes.filter((box) => box.id !== "active"));
    }
  };

  const handleDeleteAnno = (index) => {
    setAnnos((prevAnnos) => prevAnnos.filter((_, i) => i !== index));
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
          {annos.map((anno, index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                left: anno.x,
                top: anno.y,
                width: anno.width,
                height: anno.height,
                border: "2px solid red",
                zIndex: 1,
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
                {index}
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