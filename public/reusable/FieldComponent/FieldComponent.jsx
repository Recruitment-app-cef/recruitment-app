import './FieldComponent.css'
import {FiAlertCircle} from 'react-icons/fi'

function FieldComponent(props){

    const defaultValue = props.value

    function obtainFieldValue(e){
        props.onExtract(e.target.value,props.id)
    }

    return(
        <div className='fieldComponent'>
            <article>
                <label>{props.labelText}</label>
                <FiAlertCircle className='iconAlert'/>
            </article>            
            <input type={props.type} onChange={obtainFieldValue} value={defaultValue}/>
        </div>
    )
}

export default FieldComponent