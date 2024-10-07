import './SelectFieldComponent.css'
import {FiAlertCircle} from 'react-icons/fi'

function SelectFieldComponent(props){

    let options = props.options
    const identifier = props.id
    const defaultValue = props.value

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
        <div className='selectFieldComponent'>
            <article>
                <label>{props.labelText}</label>
                <FiAlertCircle className='iconAlert'/>
            </article>            
            <select onChange={obtainSelectValue} value={defaultValue}>
                {
                    renderOptions()
                }
            </select>
        </div>

    )
}

export default SelectFieldComponent