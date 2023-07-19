import './ImageComponent.css'
import board from '../../assets/img/pizarra.png'
import equipo from '../../assets/img/equipo.png'

function ImageComponent() {
    return(
        <div className='imgViewTitle'>
            <section className='imgSection'>
                <img src={board} alt="recruitment" className='iconRegister'/>
                <img src={equipo} alt="user-img" className='iconRegister'/>
            </section>
            <p>Reclutamiento de instructores en Línea</p>
            <p>CEF</p>
        </div>
    )
}

export default ImageComponent