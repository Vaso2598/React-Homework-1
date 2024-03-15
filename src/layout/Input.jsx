import "../App.css"

const Input = ({inputData}) => {
    console.log(inputData)
    return (
        <div className="inputs">
            <h1>Inputs</h1>
            {
                inputData.map((input) => {
                    return(
                        <div className="inputField" key={input.id}>
                            <label htmlFor={input.label}>{input.label}</label>
                            {input.type === "textarea" ? 
                            (
                                <textarea 
                                type={input.type} 
                                id={input.label}
                                placeholder={input.placeholder}
                                required={input.required}
                            />
                            ) : 
                            (
                                <input 
                                type={input.type} 
                                id={input.label}
                                placeholder={input.placeholder}
                                required={input.required}
                            />
                            )}
                            
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Input