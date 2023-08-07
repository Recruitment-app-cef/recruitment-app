import './EmailComponent.css'
import {GoTrash} from 'react-icons/go'
import {FiEdit3} from 'react-icons/fi'
import swal from 'sweetalert2'
import { ReactDOM } from 'react-dom'

function EmailComponent(props){

    //función para eliminar el componente de la lista de correos
    function deleteEmail(event){
        event.preventDefault()
        if(event.nativeEvent.isTrusted == true){
          swal.fire({
              title: '¿Estás seguro?',
              text: "No podrás revertir esta acción",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#0098d3',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Si, eliminar',
              cancelButtonText: 'Cancelar'
            }).then((result) => {
              if (result.isConfirmed) {
                ReactDOM.unmountComponentAtNode(document.getElementById(props.identifier))
                swal.fire(
                  '¡Eliminado!',
                  'El elemento ha sido eliminado',
                  'success'
                )
              }
            })
        }
    }

    return(
        <div className='emailComponent' id={props.identifier}>
            <p>{props.title}</p>
            <div className='icons'>
                <GoTrash className='trashIcon' onClick={deleteEmail}/>
                <FiEdit3 className='editIcon'/>
            </div>
        </div>
    )
}

export default EmailComponent