import './SelectComponent.css'
import {FiAlertCircle} from 'react-icons/fi'

function SelectComponent(props){
    return(
        <div className='selectComponent'>
            <p>{props.title}</p>
            {<FiAlertCircle className='alertIconInput'/>}
            <select>
                <option value=''>{props.one}</option>
                <option value=''>{props.two}</option>
                <option value=''>{props.three}</option>
                <option value=''>{props.four}</option>
            </select>
        </div>
    ) 
}

export default SelectComponent