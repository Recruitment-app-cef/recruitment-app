import EmailComponent from '../EmailComponent/EmailComponent'
import './EmailInputComponent.css'
import {FiAlertCircle} from 'react-icons/fi'
import { useState } from 'react'
import Swal from 'sweetalert2'
import NoneRender from '../NoneRender/NoneRender'

function EmailInputComponent(props){

    //Arreglo con valores por defecto, esta vacío porque los valores los ingresará el usuario
    var initialObjects = []

    //variable de estado utilizada para reevaluar el código JSX cada vez que el arreglo tenga nuevos
    //valores
    var [objects, setObjects] = useState(initialObjects)

    //variable de estado utilizada para obtener el valor del input de email
    const [email, setEmail] = useState(' ')

    //función utilizada para obtener el valor del input de email
    function obtainingEmail(event){
        event.preventDefault()
        setEmail(event.target.value)
    }

    //función utilizada para añadir el valor del input de email al arreglo de objetos
    const addEmailToList = (e) =>{
        e.preventDefault()
        if(email.length == 0 || email == null || email == undefined){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No puedes dejar el campo vacío!',
                footer: 'Ingresa un valor válido'
            });
            return;
        }

        //se crea un arreglo de sets para guardar los correos ingresados
        const newEmails = Array.from(new Set([...objects, email]));
        setObjects(newEmails);
        setEmail('')
        props.onExtract(props.nameInput, newEmails)

        /* if(email.length == 0 || email == null || email == undefined){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No puedes dejar el campo vacío!',
                footer: 'Ingresa un valor válido'
              })
        }else{
            //con esta función se actualiza el arreglo añadiendo los nuevos valores encontrados
            //esto es para renderizar los emails en el cuadro de la lista de emails
            if(objects.length == 0){
                setObjects(() => {
                    return [email, ...objects]
                })

                if(emailList.length == 0){
                    setEmailList(() => {
                        return [email, ...emailList]
                    })
                }else{
                    setEmailList(() => {
                        var filterEmails = emailList.filter((mail) => {
                            if(mail != email){
                                return mail
                            }
                        })
                        return [email, ...filterEmails]
                    })
                }
            }else{
                setObjects((objects) => {
                    var filterArray = objects.filter((object) => {
                        if(object != email){
                            return object
                        }
                    })
                    return [email, ...filterArray]
                })

                if(emailList.length == 0){
                    setEmailList(() => {
                        return [email, ...emailList]
                    })
                }else{
                    setEmailList(() => {
                        var filterEmails = emailList.filter((mail) => {
                            if(mail != email){
                                return mail
                            }
                        })
                        return [email, ...filterEmails]
                    })
                }
            }

            setEmail('')        
        } */
        
    }

    //función utilizada para renderizar los correos, pero esta basada en 
    //una condición, si no hay elementos renderizados, se muestra un mensaje
    //caso contrario muestra los elementos
    const renderElements = (objects) => {
        if(objects.length === 0){
            return <NoneRender/>
        }else{
            return objects.map((object) => {
                return <EmailComponent key={`${object}_item`} title={object} identifier={object}/>
            })
        }
    }

    return(
        <div className='emailInputComponent' >
            <section className='emailsTitleSection'>
                <article className='titleInputEmail'>
                    <p>{props.title}</p>
                    {<FiAlertCircle className='alertIconInput'/>}
                </article>
                <input type="text" value={email} placeholder={props.placeholder} onChange={obtainingEmail}/>
                <button className='btnAddMail' onClick={addEmailToList}>Añadir</button>
            </section>
            <section className='emailsList' id={props.nameInput}>
                {renderElements(objects)}
            </section>
        </div>
    )
}

export default EmailInputComponent