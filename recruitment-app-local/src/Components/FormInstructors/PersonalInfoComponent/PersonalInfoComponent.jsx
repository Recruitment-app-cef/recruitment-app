import EmailInputComponent from './EmailInputComponent/EmailInputComponent'
import ImageInputComponent from './ImageInputComponent/ImageInputComponent'
import InputComponent from './InputComponent/InputComponent'
import './PersonalInfoComponent.css'
import {FiAlertCircle} from 'react-icons/fi'

function PersonalInfoComponent(){
    return(
        <div className='personalInfoComponent'>
            <h2>Llene el formulario para una nueva solicitud</h2>
            <article className='alertInfo'>
                {<FiAlertCircle className='alertIcon'/>}
                <p>Los campos que contienen este icono son de caracter obligatorio</p>
            </article>
            <h3>Sección de información personal</h3>
            <ImageInputComponent/>
            <section className='inputsData'>
                <InputComponent title="Carné:" placeholder="Ej: 00009919"/>
                <InputComponent title="Nombre(s):" placeholder="Ej: Juan Alexander"/>
                <InputComponent title="Apellido(s):" placeholder="Ej: Pérez Pérez"/>
                <InputComponent title="Teléfono fijo:" placeholder="Ej: 2222-3333"/>
                <InputComponent title="Teléfono móvil:" placeholder="Ej: 7787-8778"/>
                <EmailInputComponent/>
            </section>
        </div>
    )
}

export default PersonalInfoComponent