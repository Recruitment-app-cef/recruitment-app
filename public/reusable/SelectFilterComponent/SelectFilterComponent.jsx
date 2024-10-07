import './SelectFilterComponent.css'

function SelectFilterComponent(props){

    let options = props.options
    let identifier = props.identifier
    let defaultValue = props.value

    function renderOptions(){
        return options.map((option, index) => {
            return(
                <option key={index} value={option}>
                    {option}
                </option>
            )
        })
    }

    function obtainSelectValue(e){
        props.onExtract(e.target.value,identifier)
    }

    return(
        <div className='selectFilterComponent'>
            <p>{props.title}</p>
            <select onChange={obtainSelectValue} value={defaultValue}>
                {
                    renderOptions()
                }      
            </select>
        </div>
    )
}

export default SelectFilterComponent