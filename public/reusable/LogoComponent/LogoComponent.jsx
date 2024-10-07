import './LogoComponent.css'
import board from '../../../src/assets/images/pizarra.png'
import equipo from '../../../src/assets/images/equipo.png'

function LogoComponent(){
    return(
        <div className='componentOfLogoCEF'>
            <section className='imgSection'>
                <img src={board} alt="recruitment-board" className='iconLogo'/>
                <img src={equipo} alt="usr-img" className='iconLogo'/>
            </section>
            <p>Reclutamiento de instructores en Línea</p>
            <p>CEF</p>
        </div>
    )
}

export default LogoComponent