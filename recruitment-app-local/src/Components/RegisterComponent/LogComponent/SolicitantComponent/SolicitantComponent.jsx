import "./SolicitantComponent.css"
import swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

function SolicitantComponent(){
    const navigate = useNavigate();

    const onClickButton = () => {
        swal.fire({
            position: 'center-center',
            icon: 'success',
            title: 'acces granted',
            showConfirmButton: false,
            timer: 1000
          })

        navigate("/recruitment/inscription");
    }

    return(
        <form onSubmit={(e) => { e.preventDefault(); }} className="solicitantComponent">
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