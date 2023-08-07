import './ListInputComponent.css'
import {FiAlertCircle} from 'react-icons/fi'

function ListInputComponent(props){

    const options = ['Primer Ciclo', 'Segundo Ciclo', 
    'Tercer Ciclo', 'Cuarto Ciclo', 'Quinto Ciclo', 'Sexto Ciclo',
    'Séptimo Ciclo', 'Octavo Ciclo', 'Noveno Ciclo', 'Décimo Ciclo']

    function obtainingSelectValue(event){
        props.onExtract("nivelEstudio", event.target.value)
    }


    return(
        <div className='listInputComponent'>
            <div className='titleListInputComponent'>
                <p>Nivel de estudio</p>
                {<FiAlertCircle className='alertIconInput'/>}
            </div>
            <select onChange={obtainingSelectValue}>
                {
                    options.map((item) => {
                        return <option key={`${item}_option`} value={item}>{item}</option>
                    })
                }
            </select>
        </div>
    )
}

export default ListInputComponent