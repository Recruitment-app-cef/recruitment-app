import ImageComponent from '../../Utils/ImageComponent/ImageComponent'
import UplineComponent from '../../Utils/UplineComponent/UplineComponent'
import './FormInstructors.css'
import {IoArrowBackCircleOutline} from 'react-icons/io5'
import {useNavigate} from 'react-router-dom'
import swal from 'sweetalert2'
import PersonalInfoComponent from './PersonalInfoComponent/PersonalInfoComponent'
import CareerInfoComponent from './CareerInfoComponent/CareerInfoComponent'
import ApplyComponent from './ApplyComponent/ApplyComponent'
import { useState } from 'react'

function FormInstructors() {

    const identifiers = new Set([])

    //variables utilizadas para llenar el arreglo con identificadores de los campos a llenar
    //y luego validarlos
    const [ arrayIdentifiers, setArrayIdentifiers ] = useState(identifiers)

    const navigate = useNavigate();
    //variables utilizadas para determinar si se ha hecho click en el botón de guardar datos
    const [state, setState] = useState(false)

    //función para el botón de retorno de la página
    const onClickButton = () => {
        swal.fire({
            title: 'Volver a la página anterior?',
            showDenyButton: true,
            confirmButtonText: 'Regresar',
            denyButtonText: `No`,
          }).then((result) => {
            if (result.isConfirmed) {
                navigate("/recruitment");
            }
          })
    }

    /* function obtainingImage(identifier, value){
        if(arrayIdentifiers.length == 0){
            var inputItem = {
                identifier: identifier,
                value: value
            }
            setArrayIdentifiers(() => {
                return [...arrayIdentifiers, inputItem]
            })
        }else if(arrayIdentifiers.length != 0){
            setArrayIdentifiers(() => {
                var filterArray = arrayIdentifiers.filter( (item) => {
                    if(item.identifier != identifier){
                        return item
                    }
                })
                var inputItem = {
                    identifier: identifier,
                    value: value
                } 
                return [...filterArray, inputItem]
            })
        }
    }

    function obtainingValue(identifier, value){

        if(arrayIdentifiers.length == 0){
            var inputItem = {
                identifier: identifier,
                value: value
            }
            setArrayIdentifiers(() => {
                return [...arrayIdentifiers, inputItem]
            })
        }
        //Este arreglo sirve para identificar los campos sobre los que han sido ingresados valores
        //y así poder validarlos en caso de haber algún error sobre ellos
        else if(arrayIdentifiers.length != 0){
            setArrayIdentifiers(() => {
                var filterArray = arrayIdentifiers.filter( (item) => {
                    if(item.identifier != identifier){
                        return item
                    }
                })
                var inputItem = {
                    identifier: identifier,
                    value: value
                } 
                return [...filterArray, inputItem]
            })
        }
    } */

    //función utilizada para obtener los valores ingresados en los campos
    function obtainingValuesOfFields(identifier,value){
        if(value.length == 0 || value == null || value == undefined){
            var item = {
                identifier: identifier,
                value: ''
            }
            setArrayIdentifiers(() => {
                var filterArray = arrayIdentifiers.filter( (item) => {
                    if(item.identifier != identifier){
                        return item
                    }
                })
                return [...filterArray, item]
            })
        }else{
            var item = {
                identifier: identifier,
                value: value
            }

            if(arrayIdentifiers.size == 0){
                setArrayIdentifiers(() => {
                    return [...arrayIdentifiers, item]
                })
            }
            else if(arrayIdentifiers.size != 0){
                setArrayIdentifiers(() => {
                    var filterArray = arrayIdentifiers.filter( (item) => {
                        if(item.identifier != identifier){
                            return item
                        }
                    })
                    return [...filterArray, item]
                })
            }
        }
    }

    //función utilizada para validar los datos ingresados en los campos
    const validateData = (e) => {
        e.preventDefault();
        setState(e.nativeEvent.isTrusted)
        const clickState = e.nativeEvent.isTrusted
        //Se recorre el arreglo de identificadores que tiene los identificadores de cada
        //campo y se valida que no estén vacíos sus valores y que no sean nulos
        //si están vacíos se debe arrojar una alerta y regresar el estado del botón a false

        arrayIdentifiers.forEach( (item) => {
            console.log("entra al bucle")
            console.log(item.identifier)
            console.log(item.value.length)
            console.log(clickState)
            if(item.value.length == 0  && clickState == true){
                console.log(item.identifier)
                swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `No puedes dejar vacío el campo "${item.identifier}"`,
                    footer: 'Ingresa un dato válido'
                })
                setState(false)
            }
        })
        saveData()
    }
    
    //función que se acciona al hacer click sobre el botón de guardar datos
    const saveData = () => {
        console.log(state)
        //se obtiene el estado del botón de guardar datos, si se hace click se cambia 
        //el estado a true, si no se hace click se cambia a false
        swal.fire({
            title: '¿Estás seguro?',
            text: "Revisa tus datos antes de guardarlos",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0098d3',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Guardar datos',
            cancelButtonText: 'Cancelar'
            }).then((result) => {
                if(result.isConfirmed) {
                    swal.fire(
                    '¡Datos guardados!',
                    'Operación realizada con éxito',
                    'success'
                    )
                    setState(true)
                }else{
                    setState(false)
                    console.log(arrayIdentifiers)
                    return
                }
            })
            console.log(state)  
    }

    return(
        <div className='formInscriptionsInstructors'>
            <IoArrowBackCircleOutline className='arrowIcon' onClick={onClickButton}/>
            <UplineComponent/>
            <ImageComponent/>
            <section className='informationSection'>
                <PersonalInfoComponent onClickState={state} onExtract={obtainingValuesOfFields} />  
                <CareerInfoComponent onClickState={state} onExtract={obtainingValuesOfFields}/>  
                <ApplyComponent onClickState={state} onExtract={obtainingValuesOfFields}/>
            </section>
                <button onClick={validateData} name="btnSave">Guardar</button>
        </div>
    )
}

export default FormInstructors