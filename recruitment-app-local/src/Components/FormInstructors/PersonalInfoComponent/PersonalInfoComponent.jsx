import EmailInputComponent from '../../../Utils/EmailInputComponent/EmailInputComponent'
import ImageInputComponent from './ImageInputComponent/ImageInputComponent'
import InputComponent from '../../../Utils/InputComponent/InputComponent'
import './PersonalInfoComponent.css'
import {FiAlertCircle} from 'react-icons/fi'

function PersonalInfoComponent(props){
    
    //función para obtener los valores de los "inputComponents"
    function obtainingInputValue(identifier,value){
        props.onExtract(identifier,value)
    }

    //función para obtener el valor de la imagen
    function obtainingImageValue(value){
        props.onExtract('image',value)
    }

    //función para obtener los valores de los "emailInputComponents"
    function obtainingEmails(identifier,emails){
        props.onExtract(identifier, emails)
    }

    //Estructura donde se obtienen todos los datos personales del instructor
    return(
        <div className='personalInfoComponent'>
            <h2>Llene el formulario para una nueva solicitud</h2>
            <article className='alertInfo'>
                {<FiAlertCircle className='alertIcon'/>}
                <p>Los campos que contienen este icono son de caracter obligatorio</p>
            </article>
            <h3>Sección de información personal</h3>
            <ImageInputComponent onExtract={obtainingImageValue} state={props.onClickState}/>
            <section className='inputsData'>
                <InputComponent title="Carné:" placeholder="Ej: 00009919" 
                onExtract={obtainingInputValue} nameInput="carné" state={props.onClickState}/>
                <InputComponent title="Nombre(s):" placeholder="Ej: Juan Alexander" 
                onExtract={obtainingInputValue} nameInput="nombres" state={props.onClickState}/>
                <InputComponent title="Apellido(s):" placeholder="Ej: Pérez Pérez" 
                onExtract={obtainingInputValue} nameInput="apellidos" state={props.onClickState}/>
                <InputComponent title="Teléfono fijo:" placeholder="Ej: 2222-3333" 
                onExtract={obtainingInputValue} nameInput="teléfono fijo" state={props.onClickState}/>
                <InputComponent title="Teléfono móvil:" placeholder="Ej: 7787-8778" 
                onExtract={obtainingInputValue} nameInput="teléfono móvil" state={props.onClickState}/>
                <EmailInputComponent title="Email(s):" placeholder="Ej: username@email.com"
                nameInput="email" state={props.onClickState} onExtract={obtainingEmails}/>
            </section>
        </div>
    )
}

export default PersonalInfoComponent