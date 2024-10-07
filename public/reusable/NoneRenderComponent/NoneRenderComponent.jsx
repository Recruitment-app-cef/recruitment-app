import './NoneRenderComponent.css'
import capas from '../../../src/assets/images/capa-mas.png'

function NoneRenderComponent(){
    return(
        <div className='noneRenderComponent'>
            <img src={capas} alt="capas-no-renderizado"/>
            <p>No hay elementos agregados</p>
        </div>
    )
}

export default NoneRenderComponent