import UplineComponent from '../../Utils/UplineComponent/UplineComponent'
import LogComponent from './LogComponent/LogComponent'
import './RegisterComponent.css'
import WarningComponent from './WarningComponent/WarningComponent'
import {FaChalkboardTeacher} from 'react-icons/fa'

function RegisterComponent() {
    return(
        <div className='registerComponentView'>
            <UplineComponent/>
            <div className='imgViewTitle'>
                <FaChalkboardTeacher className='iconRegister'/>
                <p>Reclutamiento de instructores en Línea</p>
                <p>CEF</p>
            </div>
            <LogComponent/>
            <WarningComponent/>
        </div>
    )
}

export default RegisterComponent