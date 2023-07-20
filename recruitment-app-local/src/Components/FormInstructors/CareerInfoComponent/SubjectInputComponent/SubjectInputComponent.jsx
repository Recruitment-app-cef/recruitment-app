import InputComponent from '../../../../Utils/InputComponent/InputComponent';
import './SubjectInputComponent.css'

function SubjectInputComponent(){
    return(
        <div className='subjectInputComponent'>
            <InputComponent title="Materias aprobadas:"/>
            <p>Nota: Si el número de materias es menor a 20 se rechazará el formulario.</p>
        </div>
    )
}

export default SubjectInputComponent;