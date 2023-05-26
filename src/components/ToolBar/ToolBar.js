import Expander from "./expander";
import { useState } from "react";

const ToolBar = () => {

    const [expanded, setExpanded] = useState(false);

    function handleClick(e) {
        if (expanded === e) {
            setExpanded(false);
        } else {
            setExpanded(e);
        };
    };

    return (
        <div>
            <ul>
                <li onClick={() => handleClick("File")}>
                    <Expander expanded={expanded === "File" ? true : false} title="File" array={["New", "Open", "Save", "Export"]}/>
                </li>
                <li onClick={() => handleClick("Edit")}>
                    <Expander expanded={expanded === "Edit" ? true : false} title="Edit" array={["Text-lies", "Notepad", "Compare", "Copy", "Paste"]}/>
                </li>
                <li onClick={() => handleClick("View")}>
                    <Expander expanded={expanded === "View" ? true : false} title="View" array={["Zoom In", "Zoom Out", "Fit to Screen"]}/>
                </li>
                <li onClick={() => handleClick("Help")}>
                    <Expander expanded={expanded === "Help" ? true : false} title="Help" array={["About", "Contact"]}/>    
                </li>
            </ul>
        </div>
    )
};
export default ToolBar;