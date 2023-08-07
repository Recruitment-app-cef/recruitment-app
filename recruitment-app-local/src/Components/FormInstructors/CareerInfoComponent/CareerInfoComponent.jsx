import EmailInputComponent from '../../../Utils/EmailInputComponent/EmailInputComponent';
import InputComponent from '../../../Utils/InputComponent/InputComponent';
import './CareerInfoComponent.css'
import CommentComponent from '../../../Utils/CommentComponent/CommentComponent';
import ListInputComponent from './ListInputComponent/ListInputComponent';
import SubjectInputComponent from './SubjectInputComponent/SubjectInputComponent';

function CareerInfoComponent(props){

    function obtainingSubjects(identifier,value){
        props.onExtract(identifier, value)
    }

    function obtainingComment(identifier, value){
        props.onExtract(identifier,value)
    }

    function obtainingInputValue(identifier,value){
        props.onExtract(identifier, value)
    }

    function obtainingSelectValue(identifier, value){
        props.onExtract(identifier, value)
    }

    function obtainingNextSubjects(identifier, value){
        props.onExtract(identifier, value)
    }

    return(
        <div className='careerInfoComponent'>
            <h3>Sección de información académica</h3>
            <InputComponent title="Carrera:" placeholder="Ej: Ingeniería Informática" 
                onExtract={obtainingInputValue} nameInput="carrera" state={props.onClickState}/>
            <ListInputComponent onExtract={obtainingSelectValue}/>
            <SubjectInputComponent onSending={obtainingSubjects} state={props.onClickState}/>
            <InputComponent title="CUM:" placeholder="Ej: 7.33" nameInput="cum" 
                state={props.onClickState} onExtract={obtainingInputValue}/>
            <EmailInputComponent title="Materias próximas:" placeholder="Ej: Fundamentos de programación"
                nameInput="materias próximas" state={props.onClickState} onExtract={obtainingNextSubjects}/>
            <CommentComponent title="Liste algunas experiencias como instructor
                (especificando las materias en que ha colaborado), si las hubiese:"
                onExtract={obtainingComment} nameInput="experiencia"/>
        </div>
    )
}

export default CareerInfoComponent;