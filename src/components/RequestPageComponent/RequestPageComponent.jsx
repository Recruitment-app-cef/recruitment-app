import LogoComponent from '../../../public/reusable/LogoComponent/LogoComponent'
import { RequestDataComponent } from '../../../public/reusable/RequestDataComponent/RequestDataComponent'
import TurnBackButton from '../../../public/reusable/TurnBackButton/TurnBackButton'
import UplineComponent from '../../../public/reusable/UplineComponent/UplineComponent'
import './RequestPageComponent.css'

function RequestPageComponent(){

    return(
        <div className='requestViewContainer'>
            <UplineComponent/>
            <TurnBackButton route="main"/>
            <LogoComponent/>
            <RequestDataComponent/>

        </div>
    )
}

export default RequestPageComponent