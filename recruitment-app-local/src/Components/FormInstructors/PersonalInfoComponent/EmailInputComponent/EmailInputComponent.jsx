import EmailComponent from './EmailComponent/EmailComponent'
import './EmailInputComponent.css'
import {FiAlertCircle} from 'react-icons/fi'

function EmailInputComponent(){
    return(
        <div className='emailInputComponent'>
            <section className='emailsTitleSection'>
                <p>Email(s):</p>
                {<FiAlertCircle className='alertIconInput'/>}
                <input type="text" placeholder='Ej: username@email.com'/>
                <button className='btnAddMail'>Añadir</button>
            </section>
            <section className='emailsList'>
                <EmailComponent email="username@email.com"/>
                <EmailComponent email="username@email.com"/>
                <EmailComponent email="username@email.com"/>
                <EmailComponent email="username@email.com"/>
                <EmailComponent email="username@email.com"/>
                <EmailComponent email="username@email.com"/>
            </section>
        </div>
    )
}

export default EmailInputComponent