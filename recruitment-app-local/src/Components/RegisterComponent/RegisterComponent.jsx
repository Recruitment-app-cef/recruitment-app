import UplineComponent from '../../Utils/UplineComponent/UplineComponent'
import LogComponent from './LogComponent/LogComponent'
import './RegisterComponent.css'
import WarningComponent from './WarningComponent/WarningComponent'
import board from '../../assets/img/pizarra.png'
import equipo from '../../assets/img/equipo.png'
import {IoArrowBackCircleOutline} from 'react-icons/io5'
import {DiAtom} from 'react-icons/di'
import ModalComponent from './ModalComponent/ModalComponent'
import {useState} from 'react'

function RegisterComponent() {

    const [isShowing, setIsShowing] = useState(false);
    
    const showModal = () => setIsShowing(true);
    const closeModal = () => setIsShowing(false);


    return(
        <div className='registerComponentView'>
            <IoArrowBackCircleOutline className='arrowIcon'/>
            <UplineComponent/>
            <div className='imgViewTitle'>
                <section className='imgSection'>
                    <img src={board} alt="recruitment" className='iconRegister'/>
                    <img src={equipo} alt="user-img" className='iconRegister'/>
                </section>
                <p>Reclutamiento de instructores en Línea</p>
                <p>CEF</p>
            </div>
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