import './ListInputComponent.css'
import {FiAlertCircle} from 'react-icons/fi'

function ListInputComponent(){
    return(
        <div className='listInputComponent'>
            <p>Nivel de estudio</p>
            {<FiAlertCircle className='alertIconInput'/>}
            <select>
                <option value="0">Primer Ciclo</option>
                <option value="1">Segundo Ciclo</option>
                <option value="2">Tercer Ciclo</option>
                <option value="3">Cuarto Ciclo</option>
                <option value="4">Quinto Ciclo</option>
            </select>
        </div>
    )
}

export default ListInputComponent