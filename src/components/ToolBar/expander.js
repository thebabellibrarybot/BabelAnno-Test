import Style from "./toolBar.module.css";
import SvgLoader from "../../functions/svgLoader";

const Expander = ({ expanded, array, handleItem }) => {
    return (
        <div className={Style.toolItem}>
            {expanded === false ? 
                null
                : 
                <>
                    {array.map((item, i) => (
                        <>
                            <p key={i} onClick = {()=>item.handleItem()}>{item.item}</p>
                            <SvgLoader ability={item.svg} classNA={Style.icon}></SvgLoader>
                        </>
                    ))}
                </>
            }
        </div>
    )
};
export default Expander;