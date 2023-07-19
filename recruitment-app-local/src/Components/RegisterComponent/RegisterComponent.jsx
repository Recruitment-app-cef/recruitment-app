import UplineComponent from '../../Utils/UplineComponent/UplineComponent'
import LogComponent from './LogComponent/LogComponent'
import './RegisterComponent.css'
import WarningComponent from './WarningComponent/WarningComponent'

import {IoArrowBackCircleOutline} from 'react-icons/io5'
import {DiAtom} from 'react-icons/di'
import ModalComponent from './ModalComponent/ModalComponent'
import {useState} from 'react'
import ImageComponent from '../../Utils/ImageComponent/ImageComponent'

function RegisterComponent() {

    const [isShowing, setIsShowing] = useState(false);
    
    const showModal = () => setIsShowing(true);
    const closeModal = () => setIsShowing(false);

    return(
        <div className='registerComponentView'>
            <IoArrowBackCircleOutline className='arrowIcon'/>
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