import Expander from "./expander";
import { useState } from "react";
import { showPopup } from "../../buttons/save/save";

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
                <li>
                    <p onClick={() => handleClick("File")}>File</p>
                    <Expander expanded={expanded === "File" ? true : false} array={[{item: "New", handleItem: "handle"}, {item: "New Version", handleItem: "handle"}, {item: "Save", handleItem: showPopup}, {item: "Export", handleItem: "handle"}, {item: "Delete", handleItem: "handle"}, ]}/>
                </li>
                <li>
                    <p onClick={() => handleClick("Edit")}>Edit</p>
                    <Expander expanded={expanded === "Edit" ? true : false} array = {[{item: "undo", handleItem: "handle"}, {item: "Redo", handleItem: "handle"}, {item: "Copy", handleItem: "copy"}, {item: "Paste", handleItem: "handle"}, {item: "select all", handleItem: "handle"} ]}/>
                </li>
                <li>
                    <p onClick={() => handleClick("View")}>View</p>
                    <Expander expanded={expanded === "View" ? true : false} array={[{item: "Text-lines", handleItem: "handle"}, {item:"Notepad", handleItem: "handle"}, {item: "Compare", handleItem: "handle"}, {item: "Fit to Screen", handleItem: "handle"}, {item: "Hide-text", handleItem: "handle"}, {item: "Hide-line-numbers", handleItem: "handle"}]}/>
                </li>
                <li>
                    <p onClick={() => handleClick("Help")}>Help</p>
                    <Expander expanded = {expanded === "Help" ? true : false} array={[{item: "About", handleItem: "handle"}, {item: "Contact", handleContact: "handle"}]}/>
                </li>
            </ul>
        </div>
    )
};
export default ToolBar;