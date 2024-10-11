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
import jsPDF from 'jspdf';

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

    const generatePDF = () => {
        const doc = new jsPDF();
        const maxWidth = 190;
        const lineHeight = 10;
        let currentY = 60;

        // Configurar el texto del encabezado
        doc.setFont('Montserrat', 'bold');
        doc.setFontSize(14);
        doc.addImage('../../../src/assets/images/logo-uca.png', 'png', 10, 10, 30, 40, 'logo-uca', 'MEDIUM');
        doc.text('Universidad Centroamericana "José Simeón Cañas"', 55, 20);
        doc.text('Departamento de Ciencias Energéticas y Fluídicas', 55, 30);
        doc.text('Solicitud de Instructoría', 80, 40);

        // Configurar el texto del cuerpo
        doc.setFont('Montserrat', 'normal');
        doc.setFontSize(12);

        // Función para agregar texto y ajustar la posición Y automáticamente
        const addText = (text, x, y) => {
            doc.text(text, x, y);
            return y + lineHeight;
        };

        // Función para agregar contenido de arreglos dinámicamente
        const addArrayContent = (label, array, x, y) => {
            doc.text(`${label}:`, x, y);
            array.forEach((item, index) => {
                doc.text(item, x + ((index + 1) * 40), y);  // Ajustar horizontalmente si hay varios elementos
            });
            return y + lineHeight;  // Mantener la misma Y ya que todos están en la misma línea
        };

        // Agregar la información del usuario
        currentY = addText(`${userData.firstname} ${userData.lastname}`, 10, currentY);
        currentY = addText(`${userData.idnumber}`, 130, currentY - lineHeight);  // Misma línea para el número de ID
        currentY = addText(`Primera opción: ${userData.prim_op}`, 10, currentY);
        const segundaOpcionText = userData.seg_op === '0' ? "Segunda opción no seleccionada" : `Segunda opción: ${userData.seg_op}`;
        currentY = addText(segundaOpcionText, 10, currentY);
        currentY = addText(`Tipo de contratación solicitada: ${isRemunerated(userData.es_remunerado)}`, 10, currentY);
        currentY = addText(`Nota con que aprobó la materia para la cual solicita instructoría en 1a. opción: ${userData.nota}`, 10, currentY);
        currentY = addText(`CUM: ${userData.cum}`, 10, currentY);
        currentY = addText(`Número de materias aprobadas: ${userData.nmaterias}`, 10, currentY);
        currentY = addText(`Carrera: ${userData.carrera}`, 10, currentY);
        currentY = addText(`Nivel de estudio: ${academicLevel(userData.niv_est)}`, 10, currentY);

        // Agregar correos y teléfonos de manera dinámica
        currentY = addArrayContent('Correo(s)', emails, 10, currentY);
        currentY = addArrayContent('Teléfonos', phones, 10, currentY);

        // Agregar materias inscritas
        const longSignatures = `${signatures}`;
        const signatureLines = doc.splitTextToSize(longSignatures, maxWidth);
        currentY = addText('Materias inscritas:', 10, currentY);
        doc.text(signatureLines, 10, currentY);
        currentY += signatureLines.length * lineHeight;

        // Agregar experiencia
        const longExperience = userData.experiencia ? `${experienceInfo(userData.experiencia)}` : "Sin experiencia especificada";
        const experienceLines = doc.splitTextToSize(longExperience, maxWidth);
        currentY = addText('Experiencia:', 10, currentY);
        doc.text(experienceLines, 10, currentY);
        currentY += experienceLines.length + (lineHeight * 2);

        const longComments = userData.comments ? `${commentInfo(userData.comments)}` : "Sin comentarios";
        const commentLines = doc.splitTextToSize(longComments, maxWidth);
        currentY = addText('Comentarios:', 10, currentY);
        doc.text(commentLines, 10, currentY);
        currentY += commentLines.length * lineHeight;

        // Línea de firma del catedrático
        currentY = addText('_______________________', 10, 270);
        addText('Catedrático', 10, 280);

        // Guardar el PDF
        doc.save(`Solicitud ${userData.idnumber}.pdf`);
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
            <IoMdPrint className='printIcon' onClick={generatePDF} />
        </div>
    )
}

export default RequestComponent