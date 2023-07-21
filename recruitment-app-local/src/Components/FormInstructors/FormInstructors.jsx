import ImageComponent from '../../Utils/ImageComponent/ImageComponent'
import UplineComponent from '../../Utils/UplineComponent/UplineComponent'
import './FormInstructors.css'
import {IoArrowBackCircleOutline} from 'react-icons/io5'
import {useNavigate} from 'react-router-dom'
import swal from 'sweetalert2'
import PersonalInfoComponent from './PersonalInfoComponent/PersonalInfoComponent'
import CareerInfoComponent from './CareerInfoComponent/CareerInfoComponent'
import ApplyComponent from './ApplyComponent/ApplyComponent'

function FormInstructors() {

    const navigate = useNavigate();

    const onClickButton = () => {

        swal.fire({
            title: 'Volver a la página anterior?',
            showDenyButton: true,
            confirmButtonText: 'Regresar',
            denyButtonText: `No`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                navigate("/recruitment");
            }
          })
    }

    const saveData = (e) => {
        e.preventDefault();
        
        swal.fire({
            title: '¿Estás seguro?',
            text: "Revisa tus datos antes de guardarlos",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0098d3',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Guardar datos',
            cancelButtonText: 'Cancelar'
            }).then((result) => {
            if (result.isConfirmed) {
                swal.fire(
                '¡Operación realizada!',
                'Los datos han sido guardados',
                'success'
                )
                navigate("/recruitment");
            }
            })

    }

    return(
        <div className='formInscriptionsInstructors'>
            <IoArrowBackCircleOutline className='arrowIcon' onClick={onClickButton}/>
            <UplineComponent/>
            <ImageComponent/>
            <section className='informationSection'>
                <PersonalInfoComponent/>  
                <CareerInfoComponent/>  
                <ApplyComponent/>
            </section>
                <button onClick={saveData}>Guardar</button>
        </div>
    )
}

export default FormInstructors