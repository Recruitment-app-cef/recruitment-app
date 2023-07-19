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

        navigate("/recruitment");
    }

    return(
        <form className="solicitantComponent">
            <p>Ingresa tu carné</p>
            <input type="text" placeholder="Ej:00009919"/>
            <button onClick={onClickButton}>Continuar</button>
        </form>
    )
}

export default SolicitantComponent