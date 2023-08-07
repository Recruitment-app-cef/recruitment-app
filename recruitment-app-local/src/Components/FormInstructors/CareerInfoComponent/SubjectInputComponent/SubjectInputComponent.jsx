import InputComponent from '../../../../Utils/InputComponent/InputComponent';
import './SubjectInputComponent.css'

function SubjectInputComponent(props){

    function obtainingInputValue(identifier,value){
        props.onSending(identifier, value)
    }
    
    return(
        <div className='subjectInputComponent'>
            <InputComponent title="Materias aprobadas:" onExtract={obtainingInputValue}
                nameInput="materias aprobadas" state={props.state}/>
            <p>Nota: Si el número de materias es menor a 20 se rechazará el formulario.</p>
        </div>
    )
}

export default SubjectInputComponent;