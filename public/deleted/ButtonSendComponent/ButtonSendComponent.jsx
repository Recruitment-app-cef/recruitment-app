import './ButtonSendComponent.css'
import {useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'

function ButtonSendComponent(props){

  /*   const navigate = useNavigate()

    function validateUser(){
        const usersArray = props.array
        const userId = props.userId
        const userPswd = props.userPswd
        let userFound = false
        let userIsSys = false

        if(userId === '' || userPswd === ''){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "¡Campos vacíos!",
                footer: 'Ingresa tus credenciales de acceso'
              });
            return
        }

        for(let i=0; i<usersArray.length; i++){
            if(usersArray[i].id === userId && usersArray[i].password != userPswd){
                userFound = false
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "¡Contraseña incorrecta!",
                    footer: 'Intenta de nuevo'
                  });
                  break
            }else if(usersArray[i].id != userId && usersArray[i].password === userPswd){
                userFound = false
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "¡Usuario incorrecto!",
                    footer: 'Intenta de nuevo'
                  });
                  break
            }else if(usersArray[i].id != userId && usersArray[i].password != userPswd){
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "¡Usuario no encontrado!",
                    footer: '¿Ingresaste bien tus credenciales?'
                  });
            }else if(usersArray[i].id === userId && usersArray[i].password === userPswd){
                userFound = true
                userIsSys = usersArray[i].sysuser
                break
            }
        }

        if(userFound){
            if(userIsSys){
                let user = {
                    id:userId,
                    password:userPswd,
                    sysuser:userIsSys
                }
                props.user(user)
                Swal.fire({
                    title: "Usuario de sistema!",
                    text: `Bienvenido ${user.id}`,
                    icon: "success"
                  });
                
            }else{
                Swal.fire({
                    title: "Usuario académico!",
                    text: `Bienvenido`,
                    icon: "success"
                  });

            }
        }
    }
 */
    return (
        <button className='saveButton' onClick={props.function}>
            {props.children}
        </button>
    )
}

export default ButtonSendComponent