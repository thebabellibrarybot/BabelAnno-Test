import Expander from "./expander";
import useGetAnno from "../../functions/useGetAnno";

const ToolBar = () => {
    const { addNewVersion } = useGetAnno();

    return (
        <div>
            <Expander expanded= {true} array={[{item: "New Version", handleItem: addNewVersion, svg: "newVersion"}, {item: "Text-lines", handleItem: "handle", svg: "textLine"}, {item:"Notepad", handleItem: "handle", svg: "notepad"}, {item: "Compare", handleItem: "handle", svg: "compare"}, {item: "Fit to Screen", handleItem: "handle", svg: "fitScreen"}, {item: "Hide-text", handleItem: "handle", svg: "hideText"}, {item: "Hide-line-numbers", handleItem: "handle", svg: "hideLineNums"}]}/>
            <Expander expanded = {true} array={[{item: "About", handleItem: "handle", svg: "about"}, {item: "Contact", handleContact: "handle", svg: "contact"}]}/>
        </div>
    )
};
export default ToolBar;