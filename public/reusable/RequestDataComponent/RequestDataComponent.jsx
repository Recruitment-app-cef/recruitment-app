import './RequestDataComponent.css'
import RenderListComponent from '../RenderListComponent/RenderListComponent'
import { FaPencilAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import api from '../../../src/services/services';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import RequestModalComponent from '../RequestModalComponent/RequestModalComponent';

export function RequestDataComponent() {

    const navigate = useNavigate()

    let cycle = "Ciclo 02 2023"
    //obtener el id del usuario para obtener su data almacenada en rcrt-db
    const id = useParams()

    //función para retornar al formulario por si el usuario quiere editar su información
    function returnToEditRequest() {
        navigate(`/recruitment/fillRequest/${id.id}`)
    }

    //estado de la data a recuperar
    const [userData, setUserData] = useState([])
    const [isShowing, setIsShowing] = useState(false)
    //variables de estado para almacenar teléfonos, correos y materias 
    //a inscribir
    const [phones, setPhones] = useState([])
    const [signatures, setSignatures] = useState([])
    const [emails, setEmails] = useState([])
    const [adminName, setAdminName] = useState('')
    const [acceptedOption, setAcceptedOption] = useState('')
    //instrucciones usadas para obtener la data del usuario que ha llenado
    //la request
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.getRequestData(id.id, cycle)

                if (response.data[0].accepted != 0) {

                    const adminData = await api.getAdminData(response.data[0].accepted)
                    let nombre = `${adminData.data[0].firstname} ${adminData.data[0].lastname}`
                    setAdminName(nombre)

                    switch (response.data[0].accepted_op) {
                        case 1: {
                            setAcceptedOption(response.data[0].prim_op)
                            setIsShowing(!isShowing)
                            break;
                        }
                        case 2: {
                            setAcceptedOption(response.data[0].seg_op)
                            setIsShowing(!isShowing)
                            break;
                        }
                        default: break;
                    }
                    setUserData(response.data)
                    mappingUserData(response.data.slice(1))
                } else {

                    setUserData(response.data)
                    mappingUserData(response.data.slice(1))

                }

            } catch (error) {
                console.error('Error al fetchear la data', error)
            }
        }
        fetchData()
    }, [id])

    //función para setear el tipo de contratación que ha solicitado el estudiante
    const isRemunerated = (es_remunerado) => {
        if (es_remunerado == '0') {
            console.log(signatures, phones, emails)
            return 'Por horas sociales'
        } else {
            return 'Remunerado'
        }
    }

    //función para setear el nivel de estudio del estudiante
    const academicLevel = (academicLevel) => {
        switch (academicLevel) {
            case 1: return 'Primer Ciclo'
            case 2: return 'Segundo Ciclo'
            case 3: return 'Tercer Ciclo'
            case 4: return 'Cuarto Ciclo'
            case 5: return 'Quinto Ciclo'
            case 6: return 'Sexto Ciclo'
            case 7: return 'Séptimo Ciclo'
            case 8: return 'Octavo Ciclo'
            case 9: return 'Noveno Ciclo'
            case 10: return 'Décimo Ciclo'
            default: break;
        }
    }

    //función para colocar la experiencia del estudiante
    const experienceInfo = (experience) => {
        if (experience == '') {
            return 'sin experiencia brindada por el usuario'
        } else {
            return experience
        }

    }

    //función para colocar los comentarios adicionales del usuario
    const commentInfo = (comments) => {
        if (comments == '' || comments == 'sin comentarios') {
            return comments
        } else {
            return comments
        }

    }

    //función para obtener teléfonos, emails y materias del usuario
    const mappingUserData = (items) => {

        items.map(item => {
            switch (item.content_type) {
                case 2: {
                    setEmails(prevEmails => {
                        if (prevEmails.length === 0 || !prevEmails.includes(item.data)) {
                            return [...prevEmails, item.data]
                        }
                        return prevEmails
                    })
                    break
                }
                case 3: {
                    setPhones(prevPhones => {
                        if (prevPhones.length === 0 || !prevPhones.includes(item.data)) {
                            return [...prevPhones, item.data];
                        }
                        return prevPhones;
                    });
                    break
                }
                case 4: {
                    setSignatures(prevSignatures => {
                        if (prevSignatures.length === 0 || !prevSignatures.includes(item.data)) {
                            return [...prevSignatures, item.data];
                        }
                        return prevSignatures;
                    })
                    break
                }
                default: break;
            }
        })
    }

    return (
        <div className='requestDataComponentView'>
            <RequestModalComponent isOpen={isShowing} text={acceptedOption} autor={adminName} />
            <button className='editButton' onClick={returnToEditRequest}><FaPencilAlt className='editIcon' /></button>
            {userData.length > 0 && <section className='requestInformationSectionOne'>
                <img src={userData[0].picture} alt="image" />
                <div>
                    <p><b>Carné:</b>{userData[0].idnumber}</p>
                    <p><b>Nombre:</b>{userData[0].firstname} {userData[0].lastname} </p>
                    <p><b>Primera opción:</b>{userData[0].prim_op}</p>
                    <p><b>Segunda opción:</b> {userData[0].seg_op}</p>
                    <p><b>Tipo de contratación:</b>{isRemunerated(userData[0].es_remunerado)}</p>
                    <p><b>Ciclo para el que solicita:</b>{userData[0].semester}</p>
                    <p><b>Nota con que aprobó la materia en 1a. opción:</b>{userData[0].nota}</p>
                </div>
            </section>}
            {userData.length > 0 && <section className='requestInformationSectionTwo'>
                <p><b>Carrera:</b> {userData[0].carrera}</p>
                <RenderListComponent text="Teléfonos" items={phones} />
                <RenderListComponent text="Materias inscritas" items={signatures} />
                <RenderListComponent text="Correos" items={emails} />
                <p><b>Materias aprobadas:</b>{userData[0].nmaterias}</p>
                <p><b>CUM:</b>{userData[0].cum}</p>
                <p><b>Nivel de estudio:</b>{academicLevel(userData[0].niv_est)}</p>
                <p className='experienceParraph'><b>Experiencia como instructor:</b>
                    {experienceInfo(userData[0].experiencia)}
                </p>
                <p className='commentParraph'><b>Comentario adicional:</b>
                    {commentInfo(userData[0].comments)}
                </p>
            </section>}
        </div>
    )
}

