import SelectComponent from '../../../Utils/SelectComponent/SelectComponent'
import InputComponent from '../../../Utils/InputComponent/InputComponent'
import './ApplyComponent.css'
import CommentComponent from '../../../Utils/CommentComponent/CommentComponent'


const selectComponents = [
    {
        id: 1,
        title: "Primera opción:",
        options:[
            "Física l Discusión",
            "Electricidad y Magnetismo Laboratorios",
            "Física ll Discusión",
            "Física l Laboratorios"
        ],
        nombre: "primeraOpcion"
    },
    {
        id: 2,
        title: "Segunda opción:",
        options:[
            "Física l Discusión",
            "Electricidad y Magnetismo Laboratorios",
            "Física ll Discusión",
            "Física l Laboratorios"
        ],
        nombre: "segundaOpcion"
    },
    {
        id: 3,
        title: "Ciclo para el que solicita:",
        options: [
            "Ciclo 01-2023",
            "Ciclo 02-2023",
            "Ciclo 03-2023",
            "Ciclo 02-2024"
        ],
        nombre: "ciclo"
    },
    {
        id: 4,
        title: "Tipo de Contratación:",
        options: [
            "Por Servicio Social",
            "Remunerado"
        ],
        nombre: "tipoContratacion"
    }
]
function ApplyComponent(props){

    //función para obtener el valor de la nota de la materia seleccionada como 
    //primera opción
    function obtainingInputValue(identifier, value){
        props.onExtract(identifier, value)
    }

    //función para obtener el comentario del instructor sobre lo que espera de su contratación
    function obtainingComment(identifier,value){
        props.onExtract(identifier,value)
    }

    //función para obtener todos los valores de los selectores utilizados para 
    //seleccionar la materia que es primera opción, la materia que es segunda opción,
    //el ciclo para el que solicita y el tipo de contratación (remunerada o por horas sociales)
    function obtainingSelectValue(identifier,value){
        console.log(identifier,value)
        props.onExtract(identifier,value)
    }

    //Estructura utilizada para obtener toda la información necesaria para la contratación
    //del estudiante.
    return(
        <div className='applyComponent'>
            <h3>Sección de información para contratación</h3>
            <p>Especifica en que materia y actividad quisieras colaborar como instructor</p>
            {/**Con el uso de la lista dinámica se renderizan los componentes selectore
             * en base a la información que se encuentra en el arreglo selectComponents
             */}
            {selectComponents.map((op) => {
                return <SelectComponent key={`${op.id}_option`} title={op.title} options={op.options}
                onExtract={obtainingSelectValue} identifier={op.nombre}/>
            })}
            <InputComponent title="1a. opción (Nota):" onExtract={obtainingInputValue}
                nameInput="nota" state={props.onClickState}/>
            <CommentComponent title="Puede expresar algún comentario adicional:"
                onExtract={obtainingComment} nameInput="comentario"/>
            <p>UCA (CEF) Sistema de Reclutamiento de Personal ® Derechos reservados</p>
        </div>
    )
}

export default ApplyComponent