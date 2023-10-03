import AcademyInformation from './AcademyInformation/AcademyInformation'
import './RequestComponent.css'
import UserInformation from './UserInformation/UserInformation'
import {AiOutlineCheck} from 'react-icons/ai'
import {BsPrinter} from 'react-icons/bs'
import {AiOutlineStop} from 'react-icons/ai'

function RequestComponent(props){
    var data = props.requestData
    var studentInfoData = data.filter((item) => {
        switch(item.identifier){
            case 'carné':
            case 'nombres':
            case 'apellidos':
            case 'primeraOpcion':
            case 'nota':
            case 'ciclo':
            case 'segundaOpcion':
            case 'tipoContratacion':
                return item    
        }
    })
    console.log(studentInfoData)

    return(
        <div className='requestComponent'>
            <UserInformation dataObject={studentInfoData}/>
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