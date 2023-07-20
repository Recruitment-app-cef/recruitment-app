import ImageComponent from '../../Utils/ImageComponent/ImageComponent'
import UplineComponent from '../../Utils/UplineComponent/UplineComponent'
import './FormInstructors.css'
import {IoArrowBackCircleOutline} from 'react-icons/io5'
import {useNavigate} from 'react-router-dom'
import swal from 'sweetalert2'
import PersonalInfoComponent from './PersonalInfoComponent/PersonalInfoComponent'
import CareerInfoComponent from './CareerInfoComponent/CareerInfoComponent'

function FormInstructors() {

    const navigate = useNavigate();

    const onClickButton = () => {

        swal.fire({
            title: 'Do you want to return?',
            showDenyButton: true,
            confirmButtonText: 'Return',
            denyButtonText: `No`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
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
            </section>
        </div>
    )
}

export default FormInstructors