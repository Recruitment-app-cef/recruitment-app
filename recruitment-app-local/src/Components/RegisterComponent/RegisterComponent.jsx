import UplineComponent from '../../Utils/UplineComponent/UplineComponent'
import LogComponent from './LogComponent/LogComponent'
import './RegisterComponent.css'
import WarningComponent from './WarningComponent/WarningComponent'
import {IoArrowBackCircleOutline} from 'react-icons/io5'
import {DiAtom} from 'react-icons/di'
import ModalComponent from './ModalComponent/ModalComponent'
import {useState} from 'react'
import ImageComponent from '../../Utils/ImageComponent/ImageComponent'
import swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

function RegisterComponent() {

    const navigate = useNavigate();

    const onClickButton = () => {
        swal.fire({
            title: 'Do you want to return?',
            showDenyButton: true,
            confirmButtonText: 'Return',
            denyButtonText: `No`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                navigate("/cef.uca.edu.sv/main/");
            }
          })
    }

    const [isShowing, setIsShowing] = useState(false);
    
    const showModal = () => setIsShowing(true);
    const closeModal = () => setIsShowing(false);

    return(
        <div className='registerComponentView'>
            <IoArrowBackCircleOutline className='arrowIcon' onClick={onClickButton}/>
            <UplineComponent/>
            <ImageComponent/>
            <LogComponent/>
            <DiAtom className='atomIcon'/>
            <ModalComponent isOpen={isShowing} closeModal={closeModal}>
                <WarningComponent/>
            </ModalComponent>
            <p onClick={showModal}>¿Qué necesito para ser instructor?</p>
        </div>
    )
}

export default RegisterComponent