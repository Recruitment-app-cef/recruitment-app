import './EmailComponent.css'
import {GoTrash} from 'react-icons/go'
import {FiEdit3} from 'react-icons/fi'

function EmailComponent(props){
    return(
        <div className='emailComponent'>
            <p>{props.email}</p>
            <div className='icons'>
                <GoTrash className='trashIcon'/>
                <FiEdit3 className='editIcon'/>
            </div>
        </div>
    )
}

export default EmailComponent