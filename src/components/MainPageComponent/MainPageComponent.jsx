import FlexDivComponent from '../../../public/reusable/FlexDivComponent/FlexDivComponent'
import LogoComponent from '../../../public/reusable/LogoComponent/LogoComponent'
import UplineComponent from '../../../public/reusable/UplineComponent/UplineComponent'
import AuthComponent from './AuthComponent/AuthComponent'
import './MainPageComponent.css'
import {DiAtom} from 'react-icons/di'
import {useState} from 'react'
import ModalComponent from '../../../public/reusable/ModalComponent/ModalComponent'
import BeInstructorView from '../BeInstructorView/BeInstructorView'

function MainPageComponent(){

    const [isShowing, setIsShowing] = useState(false);
    
    const showModal = () => setIsShowing(true);
    const closeModal = () => setIsShowing(false);

    return(
        <FlexDivComponent>
            <UplineComponent/>
            <LogoComponent/>
            <AuthComponent/>
            <DiAtom className='atomIcon'/>
            <ModalComponent isOpen={isShowing} closeModal={closeModal}>
                <BeInstructorView/>
            </ModalComponent>
            <p onClick={showModal}>¿Qué necesito para ser instructor?</p>
        </FlexDivComponent>
    )
}

export default MainPageComponent