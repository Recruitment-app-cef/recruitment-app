import './EmailComponent.css'
import {GoTrash} from 'react-icons/go'
import {FiEdit3} from 'react-icons/fi'
import swal from 'sweetalert2'

function EmailComponent(props){

    function deleteEmail(){
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
              swal.fire(
                '¡Eliminado!',
                'El correo ha sido eliminado',
                'success'
              )
            }
          })
    }

    return(
        <div className='emailComponent'>
            <p>{props.title}</p>
            <div className='icons'>
                <GoTrash className='trashIcon' onClick={deleteEmail}/>
                <FiEdit3 className='editIcon'/>
            </div>
        </div>
    )
}

export default EmailComponent