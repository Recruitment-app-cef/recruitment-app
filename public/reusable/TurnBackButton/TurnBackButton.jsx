import './TurnBackButton.css'
import {IoArrowBackCircleOutline} from 'react-icons/io5'
import {useNavigate} from 'react-router-dom'


function TurnBackButton(props){

    //constante para realizar la navegación entre páginas mediante la interacción con el usuario
    const navigate = useNavigate()

    //función para volver a la página anterior
    const onClickButton = (e) => {

        e.preventDefault()

        //nombre de dominio de la aplicación estático
        const domain = "/recruitment"

        //url dinámica a partir de los valores obtenidos por props
        let url = domain.concat('/',props.route)

        //navegación a la url obtenida
        navigate(url)
    }

    return(
        <div className='turnBackArrow'>
            <IoArrowBackCircleOutline className='arrowIcon' onClick={onClickButton}/>
        </div>
    )
}

export default TurnBackButton