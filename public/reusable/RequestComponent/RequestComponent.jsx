import './RequestComponent.css'
import RenderListComponent from '../RenderListComponent/RenderListComponent'
import { FaPencilAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdPrint } from "react-icons/io";
import { useState, useEffect } from 'react';
import RequestModalComponent from '../RequestModalComponent/RequestModalComponent';
import SelectSignatureComponent from '../SelectSignatureComponent/SelectSignatureComponent';
import api from '../../../src/services/services'
import { useParams } from 'react-router-dom'

function RequestComponent(props) {
    const id = useParams()
    //obteniendo data de usuario
    const userData = props.user
    //obteniendo id del administrador
    const [acceptId, setAcceptId] = useState(props.adminId)
    const [selectedSignature, setSelectedSignature] = useState('')
    const [option, setOption] = useState(0)
    const [isShowing, setIsShowing] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        /*         console.log("userData.accepted:", userData.accepted); // Verificar el valor de accepted
                console.log("isShowing:", isShowing); // Verificar si el modal debería estar visible         */

        const changeModalState = async () => {
            setIsShowing(userData.accepted !== 0);

            if (userData.accepted !== 0) {
                const response = await api.getAdminData(userData.accepted)
                let nombre = `${response.data[0].firstname} ${response.data[0].lastname}`
                setAcceptId(nombre)
            } else if (userData.accepted === 0) {
                setAcceptId(props.adminId)
            }

            if (userData.accepted_op === 1) {
                setSelectedSignature(userData.prim_op);
            } else if (userData.accepted_op === 2) {
                setSelectedSignature(userData.seg_op);
            }
        };

        changeModalState();
    }, [userData]);

    const showSelectModal = () => { setIsOpen(true) };
    const closeModal = () => setIsOpen(false);
    const showModal = () => setIsShowing(true);
    const hideModal = () => {
        showModal()
        setIsOpen(false)
        handleAcceptRequest()
    };


    const isRemunerated = (es_remunerado) => es_remunerado === '0' ? 'Por horas sociales' : 'Remunerado';

    const academicLevels = {
        1: 'Primer Ciclo',
        2: 'Segundo Ciclo',
        3: 'Tercer Ciclo',
        4: 'Cuarto Ciclo',
        5: 'Quinto Ciclo',
        6: 'Sexto Ciclo',
        7: 'Séptimo Ciclo',
        8: 'Octavo Ciclo',
        9: 'Noveno Ciclo',
        10: 'Décimo Ciclo'
    };

    const academicLevel = (level) => academicLevels[level] || 'Nivel no especificado';

    const experienceInfo = (experience) => experience || 'sin experiencia brindada por el usuario';
    const commentInfo = (comments) => comments && comments !== 'sin comentarios' ? comments : 'sin comentarios';

    const emails = userData.data.filter(item => item.content_type === 2).map(item => item.data);
    const phones = userData.data.filter(item => item.content_type === 3).map(item => item.data);
    const signatures = userData.data.filter(item => item.content_type === 4).map(item => item.data);

    const handleAcceptRequest = async () => {
        
        const data = {
            selectedOption: option,
            idUser: userData.idnumber,
            cycle: userData.semester,
            idAdmin: id.id
        };

        const response = await api.acceptRequest(data);
        
        if (response) {
            console.log("Registro actualizado");
            // Actualizar el estado del usuario si es necesario
            // props.updateUserData(updatedUserData);
        } else {
            console.error("Hubo un problema actualizando el registro");
        }


    };

    const acceptRequest = () => {
        showSelectModal()
    };

    const returnToEditRequest = () => navigate('/recruitment/inscription');

    const obtainSelectedSignature = (signature, option) => {
        setSelectedSignature(signature)
        setOption(option)
        console.log(option)
    };

    return (
        <div className='instructorRequest'>
            <RequestModalComponent isOpen={isShowing} text={selectedSignature} autor={acceptId} />
            <SelectSignatureComponent click={isOpen} close={hideModal} hide={closeModal}
                signatures={[userData.prim_op, userData.seg_op]} obtainSignature={obtainSelectedSignature} />
            <button className='editButton' onClick={returnToEditRequest}><FaPencilAlt className='editIcon' /></button>
            <section className='requestInformationSectionOne'>
                <img src={userData.picture} alt="image" />
                <div>
                    <p><b>Carné:</b>{userData.idnumber}</p>
                    <p><b>Nombre:</b>{userData.firstname} {userData.lastname} </p>
                    <p><b>Primera opción:</b>{userData.prim_op || "No especificada"}</p>
                    <p><b>Segunda opción:</b> {userData.seg_op || "No especificada"}</p>
                    <p><b>Tipo de contratación:</b>{isRemunerated(userData.es_remunerado)}</p>
                    <p><b>Ciclo para el que solicita:</b>{userData.semester}</p>
                    <p><b>Nota con que aprobó la materia en 1a. opción:</b>{userData.nota}</p>
                </div>
            </section>
            <section className='requestInformationSectionTwo'>
                <p><b>Carrera:</b> {userData.carrera}</p>
                <RenderListComponent text="Teléfonos" items={phones} />
                <RenderListComponent text="Materias inscritas" items={signatures} />
                <RenderListComponent text="Correos" items={emails} />
                <p><b>Materias aprobadas:</b>{userData.nmaterias}</p>
                <p><b>CUM:</b>{userData.cum}</p>
                <p><b>Nivel de estudio:</b>{academicLevel(userData.niv_est)}</p>
                <p className='experienceParraph'><b>Experiencia como instructor:</b>
                    {experienceInfo(userData.experiencia)}
                </p>
                <p className='commentParraph'><b>Comentario adicional:</b>
                    {commentInfo(userData.comments)}
                </p>
            </section>
            <FaCheckCircle className={`checkIcon ${isShowing && "click"} `} onClick={acceptRequest} />
            <IoMdPrint className='printIcon' />
        </div>
    )
}

export default RequestComponent