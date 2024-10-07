import LogoComponent from '../../../public/reusable/LogoComponent/LogoComponent'
import TurnBackButton from '../../../public/reusable/TurnBackButton/TurnBackButton'
import UplineComponent from '../../../public/reusable/UplineComponent/UplineComponent'
import Personal_InformationView from '../Personal_InformationView/Personal_InformationView'
import AcademicInformationView from '../AcademicInformationView/AcademicInformationView'
import BookingInformationView from '../BookingInformationView/BookingInformationView'
import './FormPageComponent.css'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/services'
import Swal from 'sweetalert2'

function FormPageComponent() {

    const navigate = useNavigate()
    //obteniendo id del usuario que ha accesado a la vista
    const { id } = useParams()

    const [requestData, setRequestData] = useState([
        { identifier: 'personalData', value: '' },
        { identifier: 'academicData', value: '' },
        { identifier: 'bookingData', value: '' }
    ])

    const [dataFlag, setDataFlag] = useState(true);
    const [saveFlag, setSaveFlag] = useState(false);
    //    const navigate = useNavigate()

    useEffect(() => {
        if (saveFlag) {
            saveData();
            setSaveFlag(false);
        }
    }, [saveFlag]);

    function validateData() {
        let isValid = true;
        requestData.forEach(data => {
            data.value.forEach(item => {
                if (item.identifier == "Comentario") {
                    if(!item.value || item.value == ''){
                        return     
                    }else{
                        return
                    }
                }else if(!item.value){
                    isValid = false;
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: `Esta vacío el campo ${item.identifier}`,
                        footer: 'Ingresa un valor válido'
                      });
                }
            });
        });
        setDataFlag(isValid);
        if (isValid) {
            setSaveFlag(true);
        }
    }

    /*             props.onExtract(requestData) */
    /*             navigate('/recruitment/inscription/formRequest') */
    const saveData = async () => {

        if (dataFlag) {
            const dataToSend = { data: requestData };
            try {
                console.log(requestData)
              const response = await api.saveRequestData(dataToSend);
              if (response) {
                Swal.fire({
                    title: "¡Solicitud realizada con éxito!",
                    text: `Datos almacenados`,
                    icon: "success"
                  });
                navigate(`/recruitment/viewRequest/${id}`)
              } else {
                console.error("Error al guardar la información de registro");
              }
            } catch (error) {
              console.error("Error de red o servidor:", error);
            }
          } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "¡Faltan datos por completar!",
                footer: 'Ingresa los datos en los campos faltantes'
              });;
          }

    }

    const updateRequestData = (identifier, newData) => {
        setRequestData((prevState) =>
            prevState.map((data) =>
                data.identifier === identifier ? { ...data, value: newData } : data
            )
        );
    };

    const obtainBookingData = (bookingData) => {
        updateRequestData('bookingData', bookingData);
    };

    const obtainAcademicData = (academicData) => {
        updateRequestData('academicData', academicData);
    };

    const obtainPersonalData = (personalData) => {
        updateRequestData('personalData', personalData);
    };

    return (
        <div className='divOfInformationForm'>
            <UplineComponent />
            <TurnBackButton route="main" />
            <LogoComponent />
            <div className='informationContainer'>
                <Personal_InformationView onExtract={obtainPersonalData} />
                <AcademicInformationView onExtract={obtainAcademicData} />
                <BookingInformationView onExtract={obtainBookingData} />
            </div>
            <button className='btnSaveInformation' onClick={validateData}>
                Guardar
            </button>
        </div>
    )
}

export default FormPageComponent
