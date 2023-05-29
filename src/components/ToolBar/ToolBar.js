import Expander from "./expander";
import useGetAnno from "../../functions/useGetAnno";

const ToolBar = () => {
    const { addNewVersion } = useGetAnno();

    return (
        <div>
            <Expander expanded= {true} array={[{item: "New Version", handleItem: addNewVersion}, {item: "Text-lines", handleItem: "handle"}, {item:"Notepad", handleItem: "handle"}, {item: "Compare", handleItem: "handle"}, {item: "Fit to Screen", handleItem: "handle"}, {item: "Hide-text", handleItem: "handle"}, {item: "Hide-line-numbers", handleItem: "handle"}]}/>
            <Expander expanded = {true} array={[{item: "About", handleItem: "handle"}, {item: "Contact", handleContact: "handle"}]}/>
        </div>
    )
};
export default ToolBar;