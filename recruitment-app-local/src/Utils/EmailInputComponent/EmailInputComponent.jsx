import EmailComponent from '../EmailComponent/EmailComponent'
import './EmailInputComponent.css'
import {FiAlertCircle} from 'react-icons/fi'

function EmailInputComponent(props){
    return(
        <div className='emailInputComponent'>
            <section className='emailsTitleSection'>
                <article className='titleInputEmail'>
                    <p>{props.title}</p>
                    {<FiAlertCircle className='alertIconInput'/>}
                </article>
                <input type="text" placeholder={props.placeholder}/>
                <button className='btnAddMail'>Añadir</button>
            </section>
            <section className='emailsList'>
                <EmailComponent title="username@email.com"/>
                <EmailComponent title="username@email.com"/>
                <EmailComponent title="username@email.com"/>
                <EmailComponent title="username@email.com"/>
                <EmailComponent title="username@email.com"/>
                <EmailComponent title="username@email.com"/>
            </section>
        </div>
    )
}

export default EmailInputComponent