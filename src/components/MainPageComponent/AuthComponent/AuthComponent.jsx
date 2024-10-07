import InputComponent from '../../../../public/reusable/InputComponent/InputComponent'
import './AuthComponent.css'
import {useState} from 'react'
import api from '../../../services/services'
import {useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'

function AuthComponent(){

    const navigate = useNavigate()
    const [idValue, setIdValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const cycle = "Ciclo 02 2023"
    //función para obtener el valor del username
    function obtainingIdValue(value){
        setIdValue(value)
    }

    //función para obtener el valor de la password del usuario
    function obtainingPasswordValue(value){
        setPasswordValue(value)
    }

    //función para verificar que el usuario existe y dejarlo navegar a la ventana correspondiente
    //si es usuario de sistema o no
    const authUser = async () => {
        if((idValue == undefined || idValue == '') && (passwordValue == undefined || passwordValue == '')){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "¡Campos vacíos!",
                footer: 'Ingresa tus credenciales'
              });
        }else{
            const user = {
                username: idValue,
                password: passwordValue
            }
            const result = await api.verifyUser(user)

            if(!result){
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "¡Campos incorrectos!",
                    footer: 'Ingresa correctamente tus credenciales'
                  });
            }

            if(result.item[0].id == undefined){

                //determinando si el usuario ya tiene información 
                //almacenada en recruitment

                const response  = await api.getRequestData(idValue, cycle)

                if(response){

                    if(response.data[0].semester == cycle){
                        navigate(`/recruitment/viewRequest/${idValue}`)
                        Swal.fire({
                            title: "Identidad verificada!",
                            text: `Bienvenido`,
                            icon: "success"
                          });
                    }else{                        
                        navigate(`/recruitment/updateRequest/${idValue}`)
                        Swal.fire({
                            title: "Identidad verificada!",
                            text: `Bienvenido`,
                            icon: "success"
                          });
                    }

                }else{
                    navigate(`/recruitment/fillRequest/${idValue}`)
                    Swal.fire({
                        title: "Identidad verificada!",
                        text: `Bienvenido`,
                        icon: "success"
                      });
                }


            }else if(result.item[0].id != undefined){
                
                navigate(`/recruitment/admin/${result.item[0].id}`)
                Swal.fire({
                    title: "¡Identidad verificada!",
                    text: `Bienvenido, usuario de sistema`,
                    icon: "success"
                  });
            }
        }

    }

    return(
        <div className='authComponent'>
            <p>Ingresa tu identificador</p>
            <p>Nota: Si eres estudiante ingresa tu numero de carné como credenciales, 
                si eres usuario del sistema ingresa tus credenciales correspondientes</p>
            <InputComponent type="text" placeholder="00009999 ó @username" 
            name="idUserInput" onExtract={obtainingIdValue}/>
            <InputComponent type="password" placeholder="**********" 
            name="paswUserInput" onExtract={obtainingPasswordValue}/>
             <button className='saveButton' onClick={authUser}>
                Continuar
             </button>
             <p>UCA (CEF) Sistema de Reclutamiento de Personal ® Derechos reservados</p>
        </div>
    )
}

export default AuthComponent
