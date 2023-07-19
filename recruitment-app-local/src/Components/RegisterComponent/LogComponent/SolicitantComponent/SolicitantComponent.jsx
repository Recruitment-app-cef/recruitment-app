import "./SolicitantComponent.css"
import swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

function SolicitantComponent(){

    function onClickButton(){

        const navigate = useNavigate();

        swal.fire({
            position: 'center-center',
            icon: 'success',
            title: 'acces granted',
            showConfirmButton: false,
            timer: 1000
          })

        navigate("/recruitment/grant");
    }

    return(
        <form className="solicitantComponent">
            <p>Ingresa tu identificador</p>
            <p>Nota: Si eres solicitante ingresa tu numero de carné, 
                si eres usuario del sistema ingresa tu credencial correspondiente</p>
            <input type="text" placeholder="Ej:00009919 ó username@cef.com"/>
            <button onClick={onClickButton}>Continuar</button>
            <p>UCA (CEF) Sistema de Reclutamiento de Personal ® Derechos reservados</p>
        </form>
    )
}

export default SolicitantComponent