import AcademyInformation from './AcademyInformation/AcademyInformation'
import './RequestComponent.css'
import UserInformation from './UserInformation/UserInformation'
import {AiOutlineCheck} from 'react-icons/ai'
import {BsPrinter} from 'react-icons/bs'
import {AiOutlineStop} from 'react-icons/ai'

function RequestComponent(){
    return(
        <div className='requestComponent'>
            <UserInformation/>
            <AcademyInformation/>
            <section className='optionButtons'>
                <AiOutlineCheck className='checkButton'/>
                <BsPrinter className='printButton'/>
                <AiOutlineStop className='stopButton'/>
            </section>
        </div>
    )
}

export default RequestComponent