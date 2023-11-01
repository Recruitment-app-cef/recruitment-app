import './LogComponent.css'
import SolicitantComponent from './SolicitantComponent/SolicitantComponent'

function LogComponent(){

    function extractInputValue(value){
    }

    return(
        <div className='userLoginDiv'>
            <SolicitantComponent onExtract={extractInputValue}/>
        </div>
    )
}

export default LogComponent