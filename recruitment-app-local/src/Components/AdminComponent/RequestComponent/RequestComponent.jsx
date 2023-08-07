import AcademyInformation from './AcademyInformation/AcademyInformation'
import './RequestComponent.css'
import UserInformation from './UserInformation/UserInformation'

function RequestComponent(){
    return(
        <div className='requestComponent'>
            <UserInformation/>
            <AcademyInformation/>
        </div>
    )
}

export default RequestComponent