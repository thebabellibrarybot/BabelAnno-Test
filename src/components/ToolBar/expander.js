const Expander = ({ expanded, array, title }) => {
    return (
        <div className="expander">
            {expanded === false ? 
                <h1>{title}</h1> 
                : 
                <>
                    <h1>{title}</h1>
                    <ul>
                        {array.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </>
            }
        </div>
    )
};
export default Expander;