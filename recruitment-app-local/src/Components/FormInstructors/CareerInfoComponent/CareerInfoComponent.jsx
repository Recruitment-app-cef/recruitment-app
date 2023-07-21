import EmailInputComponent from '../../../Utils/EmailInputComponent/EmailInputComponent';
import InputComponent from '../../../Utils/InputComponent/InputComponent';
import './CareerInfoComponent.css'
import CommentComponent from '../../../Utils/CommentComponent/CommentComponent';
import ListInputComponent from './ListInputComponent/ListInputComponent';
import SubjectInputComponent from './SubjectInputComponent/SubjectInputComponent';

function CareerInfoComponent(){
    return(
        <div className='careerInfoComponent'>
            <h3>Sección de información académica</h3>
            <InputComponent title="Carrera:" placeholder="Ej: Ingeniería Informática"/>
            <ListInputComponent/>
            <SubjectInputComponent/>
            <InputComponent title="CUM:" placeholder="Ej: 7.33"/>
            <EmailInputComponent title="Materias próximas:" placeholder="Ej: Fundamentos de programación"/>
            <CommentComponent title="Liste algunas experiencias como instructor
                (especificando las materias en que ha colaborado), si las hubiese:"/>
        </div>
    )
}

export default CareerInfoComponent;