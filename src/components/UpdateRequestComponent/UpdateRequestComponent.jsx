import './UpdateRequestComponent.css'
import LogoComponent from "../../../public/reusable/LogoComponent/LogoComponent"
import TurnBackButton from "../../../public/reusable/TurnBackButton/TurnBackButton"
import UplineComponent from "../../../public/reusable/UplineComponent/UplineComponent"
import FieldComponent from '../../../public/reusable/FieldComponent/FieldComponent'
import { FiAlertCircle } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NoneRenderComponent from '../../../public/reusable/NoneRenderComponent/NoneRenderComponent'
import ItemComponent from '../../../public/reusable/ItemComponent/ItemComponent'
import SelectFieldComponent from '../../../public/reusable/SelectFieldComponent/SelectFieldComponent'
import api from '../../services/services'
import Swal from 'sweetalert2'

function UpdateRequestComponent() {

    const cycle = "Ciclo 01 2023"

    let arrayPersonalData, arrayAcademicData, arrayBookingData

    const id = useParams()

    const [phones, setPhones] = useState([])
    const [emails, setEmails] = useState([])
    const [signatures, setSignatures] = useState([])
    const [courses, setCourses] = useState([])
    const [semesters, setSemesters] = useState([])

    //variables de estado de la parte de información personal
    const [personalData, setPersonalData] = useState([
        { identifier: "Image", value: "" },
        { identifier: "Carne", value: "" },
        { identifier: "Nombres", value: "" },
        { identifier: "Apellidos", value: "" },
        { identifier: "TelefonoFijo", value: "" },
        { identifier: "TelefonoMovil", value: "" },
        { identifier: "Emails", value: [] }
    ])

    const [value, setValue] = useState('')

    //variables de destado de la parte de información académica

    const [academicData, setAcademicData] = useState([
        { identifier: "Carrera", value: "" },
        { identifier: "NivelEstudio", value: "" },
        { identifier: "MateriasAprobadas", value: "" },
        { identifier: "CUM", value: "" },
        { identifier: "MateriasProximas", value: "" },
        { identifier: "Experiencia", value: "" }
    ])

    //Variables de estado de la parte de información de contratación

    const [bookingData, setBookingData] = useState([
        { identifier: "PrimeraOpcion", value: "" },
        { identifier: "SegundaOpcion", value: "" },
        { identifier: "Ciclo", value: "" },
        { identifier: "Contratacion", value: "" },
        { identifier: "Nota1aOpcion", value: "" },
        { identifier: "Comentario", value: "" }])

    useEffect(() => {
        const fetchCourses = async () => {
            let fetchedCourses = await api.getCourses()
            setCourses(fetchedCourses.data)
        }

        const fetchSemesters = async () => {
            let fetchedSemesters = await api.getSemesters()
            setSemesters(fetchedSemesters.message)
        }

        const fetchUser = async () => {
            let fetchedUser = await api.getRequestData(id.id, cycle)

            mappingUserData(fetchedUser.data.slice(1))
            
            let es_remunerado = isRemunerated(fetchedUser.data[0].es_remunerado)
            let semester = academicLevel(fetchedUser.data[0].niv_est)
            let comentario = commentInfo(fetchedUser.data[0].comments)
            let experiencia = experienceInfo(fetchedUser.data[0].experiencia)
            
            arrayPersonalData = [
                { identifier: "Image", value: fetchedUser.data[0].picture },
                { identifier: "Carne", value: fetchedUser.data[0].idnumber },
                { identifier: "Nombres", value: fetchedUser.data[0].firstname },
                { identifier: "Apellidos", value: fetchedUser.data[0].lastname },
                { identifier: "TelefonoFijo", value: phones[0] },
                { identifier: "TelefonoMovil", value: phones[1] },
                { identifier: "Emails", value: emails }
            ]
            setPersonalData(arrayPersonalData)

            arrayAcademicData = [
                { identifier: "Carrera", value: fetchedUser.data[0].carrera },
                { identifier: "NivelEstudio", value: semester },
                { identifier: "MateriasAprobadas", value: fetchedUser.data[0].nmaterias },
                { identifier: "CUM", value: fetchedUser.data[0].cum },
                { identifier: "MateriasProximas", value: signatures },
                { identifier: "Experiencia", value: experiencia }
            ]

            setAcademicData(arrayAcademicData)

            arrayBookingData = [
                { identifier: "PrimeraOpcion", value: fetchedUser.data[0].prim_op },
                { identifier: "SegundaOpcion", value: fetchedUser.data[0].seg_op },
                { identifier: "Ciclo", value: fetchedUser.data[0].semester },
                { identifier: "Contratacion", value: es_remunerado },
                { identifier: "Nota1aOpcion", value: fetchedUser.data[0].nota },
                { identifier: "Comentario", value: comentario }]

            setBookingData(arrayBookingData)
        }

        fetchCourses()
        fetchSemesters()
        fetchUser()
    }, [])

    //función para setear el tipo de contratación que ha solicitado el estudiante
    const isRemunerated = (es_remunerado) => {
        if (es_remunerado == '0') {
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


    function obtainEmail(e) {
        e.preventDefault()
        setValue(e.target.value)
    }

    function deleteAnItem(itemValue, clickState) {
        if (clickState == true) {
            const filteredEmails = emails.filter((item) => item !== itemValue);
            setEmails(filteredEmails);
            setPersonalData(prevData =>
                prevData.map(data =>
                    data.identifier === 'Emails' ? { ...data, value: filteredEmails } : data
                )
            );
        }
    }

    function renderEmails() {
        if (emails.length == 0) {
            return <NoneRenderComponent />
        } else {
            return emails.map((item) =>
                <ItemComponent value={item} key={item} onExtract={deleteAnItem} />)
        }
    }

    function addEmail() {
        if (value.length == 0 || value == "" || value == null || value == undefined) {
            console.log("vacío")
        } else {
            const newEmails = [...new Set([...emails, value])]; // Usar Set para evitar duplicados
            setEmails(newEmails);
            setValue('');
            setPersonalData(prevData =>
                prevData.map(data =>
                    data.identifier === 'Emails' ? { ...data, value: newEmails } : data
                )
            );
        }
    }

    function obtainFieldValue(value, identifier) {
        setPersonalData(prevData =>
            prevData.map(data =>
                data.identifier === identifier ? { ...data, value } : data
            )
        )
    }

    function obtainImageValue(e) {
        const imageValue = e.target.value;
        setPersonalData(prevData =>
            prevData.map(data =>
                data.identifier === 'Image' ? { ...data, value: imageValue } : data
            )
        )
    }

    function obtainSignature(e) {
        e.preventDefault()
        setValue(e.target.value)
    }

    function deleteASignatureItem(itemValue, clickState) {
        if (clickState == true) {
            const filteredSignatures = signatures.filter((item) => item !== itemValue);
            setSignatures(filteredSignatures);
            setAcademicData(prevData =>
                prevData.map(data =>
                    data.identifier === 'MateriasProximas' ? { ...data, value: filteredSignatures } : data
                )
            );
        }
    }

    function renderSignatures() {
        if (signatures.length == 0) {
            return <NoneRenderComponent />
        } else {
            return signatures.map((item) => <ItemComponent value={item} key={item} onExtract={deleteASignatureItem} />)
        }
    }

    function addSignature() {
        if (value.length == 0 || value == "" || value == null || value == undefined) {
            console.log("vacío")
        } else {
            const newSignatures = [...new Set([...signatures, value])]; // Usar Set para evitar duplicados
            setSignatures(newSignatures);
            setValue('');
            setAcademicData(prevData =>
                prevData.map(data =>
                    data.identifier === 'MateriasProximas' ? { ...data, value: newSignatures } : data
                )
            );
        }
    }

    function obtainSelectValue(value, identifier) {
        if (value == "Seleccionar...") {
            alert("Por favor selecciona una opción")
        } else {
            setAcademicData(prevData =>
                prevData.map(data =>
                    data.identifier === identifier ? { ...data, value } : data
                )
            );
        }
    }

    function obtainCommentValue(e) {
        const { name, value } = e.target;
        setAcademicData(prevData =>
            prevData.map(data =>
                data.identifier === name ? { ...data, value } : data
            )
        );
    }

    function obtainBookingSelectValue(value, identifier) {
        if (value == "Seleccionar...") {
            alert("Por favor selecciona una opción")
        } else {
            setBookingData(prevData =>
                prevData.map(data =>
                    data.identifier === identifier ? { ...data, value } : data
                )
            );
        }
    }

    function obtainInputValue(e) {
        const { name, value } = e.target;
        setBookingData(prevData =>
            prevData.map(data =>
                data.identifier === name ? { ...data, value } : data
            )
        );
    }

    function obtainAcademicFieldValue(value, identifier) {
        setAcademicData(prevData =>
            prevData.map(data =>
                data.identifier === identifier ? { ...data, value } : data
            )
        );
    }

    function obtainBookingFieldValue(value, identifier) {
        setBookingData(prevData =>
            prevData.map(data =>
                data.identifier === identifier ? { ...data, value } : data
            )
        );
    }

    async function sendData () {
        let data = {
            "data": [
                {
                    identifier: "personalData",
                    value: personalData
                }, {
                    identifier: "academicData",
                    value: academicData
                }, {
                    identifier: "bookingData",
                    value: bookingData
                }
            ]
        }

        if(data){
            const response = await api.updateUserData(data)
            
            if(response){
                Swal.fire({
                    title: "Datos actualizados!",
                    text: `Registro guardado`,
                    icon: "success"
                  });
                  console.log(response)
            }else{
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "¡Ha habido un error!",
                    footer: 'Revisa que haz ingresado bien tu información'
                  });
            }           
        }

    }

    return (
        <div className='updateRequestComponent'>
            <UplineComponent />
            <TurnBackButton route="main" />
            <LogoComponent />
            <h2>Actualiza tu solicitud para enviarla</h2>
            <div className='instructorInformationSection'>
                <p>Información actual</p>
                <article className='imageInputSection'>
                    <div>
                        <label>Adjunte una foto reciente</label>
                        <FiAlertCircle className='iconAlert' />
                    </div>
                    <p>
                        Nota: La imagen debe tener dimensiones no mayores de 250px de ancho
                        y 300px de alto. Puede estar en formato .jpg, .gif, .png o .bmp
                    </p>
                    <input type="file" accept="image/png/jpg" onChange={obtainImageValue} />
                </article>
                <FieldComponent labelText="Carné:" type="text" id="Carne" onExtract={obtainFieldValue}
                    value={personalData[1].value} />
                <FieldComponent labelText="Nombre(s):" type="text" id="Nombres" onExtract={obtainFieldValue}
                    value={personalData[2].value} />
                <FieldComponent labelText="Apellido(s):" type="text" id="Apellidos" onExtract={obtainFieldValue}
                    value={personalData[3].value} />
                <FieldComponent labelText="Teléfono fijo:" type="text" id="TelefonoFijo" onExtract={obtainFieldValue}
                    value={personalData[4].value} />
                <FieldComponent labelText="Teléfono móvil:" type="text" id="TelefonoMovil" onExtract={obtainFieldValue}
                    value={personalData[5].value} />
                <section className='emailField'>
                    <div className='emailInput'>
                        <section>
                            <label>Correo electrónico:</label>
                            <FiAlertCircle className='iconAlert' />
                        </section>
                        <input type='text' value={value} onChange={obtainEmail} />
                        <button onClick={addEmail}>Añadir</button>
                    </div>
                    <div className='emailsList'>
                        {
                            renderEmails()
                        }
                    </div>
                </section>
                <FieldComponent labelText="Carrera:" type="text" id="Carrera"
                    onExtract={obtainAcademicFieldValue} value={academicData[0].value} />
                <SelectFieldComponent labelText="Nivel de estudio:"
                    options={['Selecionar...', 'Primer Ciclo', 'Segundo Ciclo',
                        'Tercer Ciclo', 'Cuarto Ciclo', 'Quinto Ciclo',
                        'Sexto Ciclo', 'Séptimo Ciclo', 'Octavo Ciclo',
                        'Noveno Ciclo', 'Décimo Ciclo', 'Egresado']} id="NivelEstudio"
                    onExtract={obtainSelectValue} value={academicData[1].value} />
                <p>Nota: Si el número de materias es menor a 20 se rechazará el formulario</p>
                <FieldComponent labelText="Materias aprobadas:" type="text" id="MateriasAprobadas"
                    onExtract={obtainAcademicFieldValue} value={academicData[2].value} />
                <FieldComponent labelText="CUM:" type="text" id="CUM"
                    onExtract={obtainAcademicFieldValue} value={academicData[3].value} />
                <section className='signaturesField'>
                    <div className='signaturesInput'>
                        <section>
                            <label>Materias próximas:</label>
                            <FiAlertCircle className='iconAlert' />
                        </section>
                        <input type='text' value={value} onChange={obtainSignature} />
                        <button onClick={addSignature}>Añadir</button>
                    </div>
                    <div className='signaturesList'>
                        {
                            renderSignatures()
                        }
                    </div>
                </section>
                <p>
                    Liste algunas experiencias como instructor (especificando las)
                    materias en que ha colaborado, si las hubiese:
                </p>
                <textarea type="text" className='comment' name="Experiencia" onChange={obtainCommentValue}
                    value={academicData[5].value} />
                <SelectFieldComponent labelText="Primera opción:"
                    options={['Seleccionar...', ...courses]} onExtract={obtainBookingSelectValue}
                    id="PrimeraOpcion" value={bookingData[0].value} />
                <SelectFieldComponent labelText="Segunda opción:"
                    options={['Seleccionar...', ...courses]} id="SegundaOpcion" onExtract={obtainBookingSelectValue}
                    value={bookingData[1].value} />
                <SelectFieldComponent labelText="Ciclo al que aplica:"
                    options={['Seleccionar...', ...semesters]}
                    id="Ciclo" onExtract={obtainBookingSelectValue} value={bookingData[2].value}/>
                <SelectFieldComponent labelText="Tipo de contratación:"
                    options={['Seleccionar...', 'Horas Sociales', 'Remunerado']} id="Contratacion"
                    onExtract={obtainBookingSelectValue} value={bookingData[3].value}/>
                <FieldComponent labelText="1a. opción (nota):" type="text" id="Nota1aOpcion"
                    onExtract={obtainBookingFieldValue} value={bookingData[4].value}/>
                <p>Puedes expresar algún comentario adicional:</p>
                <textarea type="text" className='comment' name="Comentario" onChange={obtainInputValue} value={bookingData[5].value}/>
                <button className='updateButton' onClick={sendData}>Actualizar</button>
            </div>
        </div>
    )
}

export default UpdateRequestComponent