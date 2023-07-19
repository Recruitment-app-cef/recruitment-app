import UplineComponent from '../../Utils/UplineComponent/UplineComponent'
import LogComponent from './LogComponent/LogComponent'
import './RegisterComponent.css'
//import WarningComponent from './WarningComponent/WarningComponent'
import board from '../../assets/img/pizarra.png'
import equipo from '../../assets/img/equipo.png'
import {IoArrowBackCircleOutline} from 'react-icons/io5'

function RegisterComponent() {
    
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

        </div>
    )
}

export default RegisterComponent