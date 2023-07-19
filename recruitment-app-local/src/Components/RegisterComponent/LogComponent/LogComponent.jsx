import './LogComponent.css'
import SolicitantComponent from './SolicitantComponent/SolicitantComponent'
import UserComponent from './UserComponent/UserComponent'

function LogComponent(){
    return(
        <div className='userLoginDiv'>
            <section className='titleIdentifiers'>
                <h3>Soy un solicitante:</h3>
                <h3>Soy un usuario de sistema:</h3>
            </section>
            <div className='formsToLoginOrApply'>
                <SolicitantComponent/>
                <UserComponent/>
            </div>
        </div>
    )
}

export default LogComponent