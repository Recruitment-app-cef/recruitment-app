import ImageComponent from '../../Utils/ImageComponent/ImageComponent'
import UplineComponent from '../../Utils/UplineComponent/UplineComponent'
import RequestComponent from '../AdminComponent/RequestComponent/RequestComponent'
import './UserRequestComponent.css'
import {IoArrowBackCircleOutline} from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert2'

function UserRequestComponent(props){
    var data = props.requestData

    const navigate = useNavigate();

    const onClickButton = () => {
        swal.fire({
            title: 'Volver a la página anterior?',
            showDenyButton: true,
            confirmButtonText: 'Regresar',
            denyButtonText: `No`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                navigate("/recruitment");
            }
          })
    }

    return(
        <div className='userRequestComponent'>
            <UplineComponent/>
            <ImageComponent/>
            <IoArrowBackCircleOutline className="arrowIcon" onClick={onClickButton}/>
            <section className='statusSection'>
                Ya ingresaste una solicitud en nuestro sistema para este ciclo. Verifica tu información.
                Para cualquier cambio que desees hacer, comunícate con el <b><a href=".">administrador</a></b>. 
            </section>
            <RequestComponent requestData={data}/>
            <p>UCA (CEF) Sistema de Reclutamiento de Personal ® Derechos reservados</p>
        </div>
    )
}

export default UserRequestComponent