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

function FormInstructors(props) {

    //arreglo utilizado para almacenar el valor inicial 
    //para los identificadores de los campos a llenar
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

    //función utilizada para obtener los valores ingresados en los campos
    function obtainingValuesOfFields(identifier,value){
        //Si el valor del campo es vacío, nulo o indefinido se debe agregar al arreglo de identificadores
        //con su valor vacío
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

            //Si el arreglo no tienen por tamaño inicial cero, el valor del campo seleccionado
            //solo se agrega al arreglo
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
        //variable utilizada para determinar si hay errores en los campos
        let HasErrors = false

        e.preventDefault();
        setState(e.nativeEvent.isTrusted)
        const clickState = e.nativeEvent.isTrusted
        //Se recorre el arreglo de identificadores que tiene los identificadores de cada
        //campo y se valida que no estén vacíos sus valores y que no sean nulos
        //si están vacíos se debe arrojar una alerta y regresar el estado del botón a false

        arrayIdentifiers.forEach( (item) => {
            if(item.value.length == 0  && clickState == true){
                swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `No puedes dejar vacío el campo "${item.identifier}"`,
                    footer: 'Ingresa un dato válido'
                })
                setState(false)
                HasErrors = true
            }
        })
        if (HasErrors == false){
            //obteniendo la fecha actual para anidarla a la solicitud hecha por el estudiante            
            saveData()
        }
    }
    
    //función que se acciona al hacer click sobre el botón de guardar datos
    const saveData = () => {
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
                    var date = Date.now()
                    var today = new Date(date)    
                    var objectDate = {
                        identifier : "date",
                        value :  today.toLocaleDateString()
                    }
                    props.onExtract(arrayIdentifiers, objectDate)
                    navigate("/recruitment/inscription/formRequest")
                }else{
                    setState(false)
                    return
                }
            })
    }

    //Estructura del formulario de inscripción de instructores
    return(
        <div className='formInscriptionsInstructors'>
            <IoArrowBackCircleOutline className='arrowIcon' onClick={onClickButton}/>
            <UplineComponent/>
            {/**El componente de imagen es usado para que el instructor suba una foto de sí mismo */}
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