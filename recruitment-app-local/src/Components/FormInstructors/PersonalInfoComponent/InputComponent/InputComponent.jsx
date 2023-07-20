import './InputComponent.css'
import {FiAlertCircle} from 'react-icons/fi'

function InputComponent(props){
    return(
        <div className='inputComponent'>
            <p>{props.title}</p>
            {<FiAlertCircle className='alertIconInput'/>}
            <input type="text" placeholder={props.placeholder}/>
        </div>
    )   
}

export default InputComponent