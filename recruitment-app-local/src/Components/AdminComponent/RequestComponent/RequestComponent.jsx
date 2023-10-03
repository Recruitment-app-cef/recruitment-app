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

    var academicStudentData = data.filter((item)=> {
        switch(item.identifier){
            case 'carrera':
            case 'cum':
            case 'nivelEstudio':
            case 'teléfono fijo':
            case 'teléfono móvil':
            case 'email':
            case 'materias próximas':
            case 'materias aprobadas':
            case 'experiencia':
            case 'comentario':
                return item
        }
    }) 

    return(
        <div className='requestComponent'>
            <UserInformation dataObject={studentInfoData}/>
            <AcademyInformation academicData={academicStudentData}/>
            <section className='optionButtons'>
                <AiOutlineCheck className='checkButton'/>
                <BsPrinter className='printButton'/>
                <AiOutlineStop className='stopButton'/>
            </section>
        </div>
    )
}

export default RequestComponent