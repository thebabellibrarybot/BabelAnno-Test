import VersionManager from "../components/VersionManager/VersionManager";
import ToolBar from "../components/ToolBar/ToolBar";
import BabelCanvas from "../components/BabelCanvas/BabelCanvas";
import Style from "./base.module.css";

const BabelBaseAnnotator = () => {

    return (
        <div className={Style.baseBabelbaseannotator}>
            <div className={Style.baseVersionBar}>
                <VersionManager />
            </div>
            <div className={Style.baseEditor}>
                <div className = {Style.baseToolBar} >
                    <ToolBar />
                </div>
                <div className = {Style.baseBabelCanvas}>
                    <BabelCanvas />
                </div>
            </div>
        </div>
    )
};
export default BabelBaseAnnotator;