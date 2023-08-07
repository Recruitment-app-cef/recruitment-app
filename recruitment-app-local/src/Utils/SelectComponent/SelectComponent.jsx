import './SelectComponent.css'
import {FiAlertCircle} from 'react-icons/fi'

function SelectComponent(props){

    const options = props.options

    function obtainingValueOfOption(e){
        props.onExtract(props.identifier,e.target.value)
    }

    return(
        <div className='selectComponent'>
            <div className='titleSelectComponent'>
                <p>{props.title}</p>
                {<FiAlertCircle className='alertIconInput'/>}
            </div>
            <select onChange={obtainingValueOfOption}>
                {
                    options.map((option) => {
                        return <option key={`${option}_option`} value={option}>{option}</option>
                    })
                }
            </select>
        </div>
    ) 
}

export default SelectComponent