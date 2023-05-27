const Expander = ({ expanded, array, handleItem }) => {
    return (
        <div className="expander">
            {expanded === false ? 
                null
                : 
                <>
                    <ul>
                        {array.map((item, i) => (
                            <li key={i} onClick = {()=>item.handleItem()}>{item.item}</li>
                        ))}
                    </ul>
                </>
            }
        </div>
    )
};
export default Expander;