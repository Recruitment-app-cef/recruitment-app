import SelectComponent from '../../../Utils/SelectComponent/SelectComponent'
import InputComponent from '../../../Utils/InputComponent/InputComponent'
import './ApplyComponent.css'
import CommentComponent from '../../../Utils/CommentComponent/CommentComponent'

function ApplyComponent(){
    return(
        <div className='applyComponent'>
            <h3>Sección de información para contratación</h3>
            <p>Especifica en que materia y actividad quisieras colaborar como instructor</p>
            <SelectComponent title="Primera opción:" one="Física l Discusión" two="Electricidad y Magnetismo Laboratorios"
                three="Física ll Discusión" four="Física l Laboratorios"/>
            <SelectComponent title="Segunda opción:" one="Física l Discusión" two="Electricidad y Magnetismo Laboratorios"
                three="Física ll Discusión" four="Física l Laboratorios"/>
            <SelectComponent title="Ciclo para el que solicita:" one="Ciclo 01-2023" two="Ciclo 02-2023"
                three="Ciclo 03-2023" four="Ciclo 02-2024"/>
            <InputComponent title="Nota de 1a. opción:"/>
            <CommentComponent title="Puede expresar algún comentario adicional:"/>
            <p>UCA (CEF) Sistema de Reclutamiento de Personal ® Derechos reservados</p>
        </div>
    )
}

export default ApplyComponent