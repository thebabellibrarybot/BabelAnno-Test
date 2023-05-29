export const showPopup = () => {
    const popupElement = document.createElement("div");
    popupElement.className = "popup";
    popupElement.textContent = "Saved";
    
    const popupStyles = {
      position: "fixed",
      top: "10px",
      right: "10px",
      border: "2px solid darkgreen",
      borderRadius: "10px",
      backgroundColor: "lightgreen",
      color: "darkgreen",
      padding: "5px",
      fontSize: "12px",
      opacity: 1,
      transition: "opacity 0.5s ease-out",
    };
    
    Object.assign(popupElement.style, popupStyles);
  
    document.body.appendChild(popupElement);
    
    setTimeout(() => {
      popupElement.style.opacity = 0;
      setTimeout(() => {
        document.body.removeChild(popupElement);
      }, 500);
    }, 5000);
  };  