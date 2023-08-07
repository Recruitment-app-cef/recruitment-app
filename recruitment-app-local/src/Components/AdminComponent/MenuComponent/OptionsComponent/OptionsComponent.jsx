import './OptionsComponent.css'

function OptionsComponent(props){

    const options = props.options

    return(
        <div className='optionsComponent'>
            <p>{props.title}</p>
            <select>
                {
                    options.map((option)=>{
                        return <option key={`${option}_item`} value={option}>{option}</option>
                    })
                }
            </select>
        </div>
    )
}

export default OptionsComponent;