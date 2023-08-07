import SelectComponent from '../../../Utils/SelectComponent/SelectComponent'
import InputComponent from '../../../Utils/InputComponent/InputComponent'
import './ApplyComponent.css'
import CommentComponent from '../../../Utils/CommentComponent/CommentComponent'
import { useState } from 'react'

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

    function obtainingInputValue(identifier, value){
        props.onExtract(identifier, value)
    }

    function obtainingComment(identifier,value){
        props.onExtract(identifier,value)
    }

    function obtainingSelectValue(identifier,value){
        console.log(identifier,value)
        props.onExtract(identifier,value)
    }

    return(
        <div className='applyComponent'>
            <h3>Sección de información para contratación</h3>
            <p>Especifica en que materia y actividad quisieras colaborar como instructor</p>
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