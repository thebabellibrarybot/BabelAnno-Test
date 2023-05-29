import Style from "./toolBar.module.css";

const Expander = ({ expanded, array, handleItem }) => {
    return (
        <div className={Style.toolItem}>
            {expanded === false ? 
                null
                : 
                <>
                    {array.map((item, i) => (
                        <p key={i} onClick = {()=>item.handleItem()}>{item.item}</p>
                    ))}
                </>
            }
        </div>
    )
};
export default Expander;