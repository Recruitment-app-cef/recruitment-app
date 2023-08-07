import './ImageInputComponent.css'
import {FiAlertCircle} from 'react-icons/fi'

function ImageInputComponent(props){

    //función para obtener la imagen
    function obtainingImage(event){
        if(props.state == true){
            event.target.value = ''
        }else{
            props.onExtract(event.target.value)        
        }
    }

    return(
        <div className='imageInputComponent'>
            <section className='titleInput'>
                <p>Adjunte una foto reciente:</p>
                {<FiAlertCircle className='alertIcon'/>}
            </section>
            <p>Nota: La imagen debe tener dimensiones no mayores de 250px de ancho y 300px
                de alto. Puede estar en formato jpg, gif, png o bmp
            </p>
            <input type="file" accept="image/*" onChange={obtainingImage}/>
        </div>
    )
}

export default ImageInputComponent