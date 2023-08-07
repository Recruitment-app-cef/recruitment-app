import './NoneRender.css'
import capas from '../../assets/img/capa-mas.png'

function NoneRender(){
    return(
        <div className='noneRenderComponent'>
            <img src={capas} alt="capas-img"/>
            <p>No hay elementos agregados</p>
        </div>
    )
}

export default NoneRender