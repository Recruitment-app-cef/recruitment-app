import "./SolicitantComponent.css"
import swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

function SolicitantComponent(props){

    const users = [
        {
            identifier: '00007518',
            password: '00007518',
            userSys: false
        },
        {
            identifier: '00001522',
            password: '00001522',
            userSys: false
        },
        {
            identifier: 'dohernandez',
            password: 'dohernandez',
            userSys: false
        },
        {
            identifier: '00323512',
            password: '00323512',
            userSys: false
        },
        {
            identifier: 'mgrande',
            password: 'Colateral13',
            userSys: true
        }
    ]

    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('')
    const [inputPasswordValue, setInputPasswordValue] = useState('')

    function obtainingIdentifier(event){
        setInputValue(event.target.value)
    }

    function obtainingPassword(event){
        setInputPasswordValue(event.target.value)
    }

    const onClickButton = (event) => {
        
        event.preventDefault()
        
        if(inputValue.length == 0){
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No puedes dejar vacío el campo de registro',
                footer: 'Ingresa un dato válido'
            })
        
        }else if(inputPasswordValue.length == 0){
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No puedes dejar vacío el campo de contraseña',
                footer: 'Ingresa un dato válido'
            })
        }else{
        
            const user = users.find( user  => {
                if(user.identifier == inputValue && user.userSys == false && user.password == inputPasswordValue){
                    return user
                }else if(user.identifier == inputValue && user.userSys == true && user.password == inputPasswordValue){
                    return user
                }
            })
            
            if(user == null || user == undefined || user == 0 ){

                swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'El valor ingresado no es un registro válido',
                    footer: 'Ingresa correctamente tu identificador'
                })  

            }else{

                if(user.userSys == true){
                    props.onExtract(inputValue)
                    setInputValue('') 
                    setInputPasswordValue('')               
                    swal.fire({
                        position: 'center-center',
                        icon: 'success',
                        title: 'access granted',
                        showConfirmButton: false,
                        timer: 1000
                      })
                    navigate("/recruitment/admin");
                }else{
                    props.onExtract(inputValue)
                    setInputValue('')       
                    setInputPasswordValue('')         
                    swal.fire({
                        position: 'center-center',
                        icon: 'success',
                        title: 'access granted',
                        showConfirmButton: false,
                        timer: 1000
                      })
                    navigate("/recruitment/inscription");
                }
            }
        }
    }

    return(
        <form onSubmit={(e) => {e.preventDefault()}} className="solicitantComponent">
            <p>Ingresa tu identificador</p>
            <p>Nota: Si eres estudiante ingresa tu numero de carné como credenciales, 
                si eres usuario del sistema ingresa tus credenciales correspondientes</p>
            <input value={inputValue} type="text" placeholder="Ej:00009919 ó username@cef.com" onChange={obtainingIdentifier}/>
            <input value={inputPasswordValue} type="password" onChange={obtainingPassword}></input>
            <button onClick={onClickButton}>Continuar</button>
            <p>UCA (CEF) Sistema de Reclutamiento de Personal ® Derechos reservados</p>
        </form>
    )
}

export default SolicitantComponent