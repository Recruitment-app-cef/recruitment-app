import './InputComponent.css'
import {FiAlertCircle} from 'react-icons/fi'

function InputComponent(props){

    //enviando el valor por defecto de cada campo input
    //función para obtener el valor de cada campo input y enviarlo al componente padre
    //de manera dinámica
    function obtainingInputValue(event){    
        if(props.state == true){
            event.target.value = ''
        }else{
            props.onExtract(event.target.className,event.target.value)
        }
    }

    return(
        <div className='inputComponent'>
            <div className='titleInputComponent'>
                <p>{props.title}</p>
                {<FiAlertCircle className='alertIconInput'/>}
            </div>
            <input type="text" placeholder={props.placeholder} 
            onChange={obtainingInputValue} 
            className={props.nameInput}/>
        </div>
    )   
}

export default InputComponent