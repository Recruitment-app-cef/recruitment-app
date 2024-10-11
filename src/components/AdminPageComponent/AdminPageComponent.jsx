import InputComponent from '../../../public/reusable/InputComponent/InputComponent'
import NoneRenderComponent from '../../../public/reusable/NoneRenderComponent/NoneRenderComponent'
import RequestComponent from '../../../public/reusable/RequestComponent/RequestComponent'
import SelectFilterComponent from '../../../public/reusable/SelectFilterComponent/SelectFilterComponent'
import TurnBackButton from '../../../public/reusable/TurnBackButton/TurnBackButton'
import UplineComponent from '../../../public/reusable/UplineComponent/UplineComponent'
import './AdminPageComponent.css'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/services'
import Swal from 'sweetalert2'
import myQuery from '../../services/Query'
import jsPDF from 'jspdf';

function AdminPageComponent() {

    //id del usuario administrador que accesa al sistema
    const adminId = useParams()

    //estado del id de la data del administrador 
    const [admin, setAdmin] = useState('')

    //variables de estado usadas para obtener los cursos disponibles
    //los semestres para renderizar solicitudes y las solicitudes 
    //que se obtienen en base a los filtros que se ocupen

    const [courses, setCourses] = useState([])
    const [semesters, setSemesters] = useState([])
    const [requests, setRequests] = useState([])

    //variable que es un objeto de estado usado para filtrar las 
    //solicitudes y a su vez saber en base a qué se está filtrando
    const [parraphs, setParraphs] = useState([
        { estado: '' },
        { materia: '' },
        { contratacion: '' },
        { ciclo: 'Ciclo 02 2023' }
    ])

    //variables para almacenar los valores del input para filtrar
    //las checkbox y cambiar su estado de seleccionado a deseleccionado
    //y la variable de estado que muestra los resultados obtenidos
    //en base a las solicitudes obtenidas, filtradas o no
    const [value, setValue] = useState('')
    const [firstOptionValue, setFirstOptionValue] = useState('')
    const [secondOptionValue, setSecondOptionValue] = useState('')
    const [checkboxStateOne, setCheckboxStateOne] = useState(false)
    const [checkboxStateTwo, setCheckboxStateTwo] = useState(false)
    const [resultados, setResultados] = useState('')

    //useEffect usado para obtener los cursos y semestres disponibles
    useEffect(() => {
        const fetchCourses = async () => {
            let fetchedCourses = await api.getCourses()
            setCourses(fetchedCourses.data)
        }

        const fetchSemesters = async () => {
            let fetchedSemesters = await api.getSemesters()
            setSemesters(fetchedSemesters.message)
        }

        const fetchAdminData = async () => {
            try {
                const response = await api.getAdminData(adminId.id)
                let nombre = `${response.data[0].firstname} ${response.data[0].lastname}`
                setAdmin(nombre)
            } catch (error) {
                console.error('Error al fetchear la data', error)
            }
        }

        fetchCourses()
        fetchSemesters()
        fetchAdminData()

    }, [])

    //useEffect usado para traer las solicitudes en base a los filtros
    //depende de los cambios en las variables de estado
    useEffect(() => {
        const fetchRequests = async () => {

            let fetchedRequests
            let query = ''

            if (parraphs[0].estado == '' && parraphs[1].materia == '' &&
                parraphs[2].contratacion == '' && parraphs[3].ciclo == ''
            ) {
                setRequests([])
                setResultados('')
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Sin filtros aplicados",
                    footer: 'Selecciona un filtro al menos'
                });
            } else {
                if (firstOptionValue == '' && secondOptionValue == '') {

                    query = new myQuery(parraphs[2].contratacion, parraphs[3].ciclo,
                        parraphs[0].estado);

                    fetchedRequests = await api.getRequests(query.getQuery())

                } else if (secondOptionValue == '') {

                    if (parraphs[1].materia == "Electricidd & Magnetismo Discusión") {

                        query = new myQuery(parraphs[2].contratacion, parraphs[3].ciclo,
                            parraphs[0].estado, "Electricidd %26 Magnetismo Discusión", [firstOptionValue]);

                        fetchedRequests = await api.getRequests(query.getQuery())

                    } else if (parraphs[1].materia == "Electricidd & Magnetismo Laboratorios") {

                        query = new myQuery(parraphs[2].contratacion, parraphs[3].ciclo,
                            parraphs[0].estado, "Electricidd %26 Magnetismo Laboratorios", [firstOptionValue]);

                        fetchedRequests = await api.getRequests(query.getQuery())

                    } else {

                        query = new myQuery(parraphs[2].contratacion, parraphs[3].ciclo,
                            parraphs[0].estado, parraphs[1].materia, [firstOptionValue]);

                        fetchedRequests = await api.getRequests(query.getQuery())

                    }

                } else if (firstOptionValue == '') {

                    query = new myQuery(parraphs[2].contratacion, parraphs[3].ciclo,
                        parraphs[0].estado, parraphs[1].materia, [secondOptionValue]);

                    fetchedRequests = await api.getRequests(query.getQuery())

                } else {

                    query = new myQuery(parraphs[2].contratacion, parraphs[3].ciclo,
                        parraphs[0].estado, parraphs[1].materia, [firstOptionValue, secondOptionValue]);

                    fetchedRequests = await api.getRequests(query.getQuery())

                }
            }

            if (fetchedRequests == []) {
                setRequests([])
                setResultados([])
            } else {
                setResultados(fetchedRequests.data.length)
                setRequests(fetchedRequests.data)
            }

        }

        fetchRequests()

    }, [parraphs, firstOptionValue, secondOptionValue])

    const navigate = useNavigate()

    // función que renderiza las solicitudes
    function renderRequestList() {
        if (requests.length === 0) {
            return <NoneRenderComponent />
        } else {
            return requests.map((user, index) => (
                <RequestComponent user={user} adminId={admin} key={`request_${index}`} />
            ))
        }
    }

    //función para obtener los valores de los checkbox
    function obtainCheckboxValue(e) {
        switch (e.target.name) {
            case 'firstOption': {
                switch (!checkboxStateOne) {
                    case true: {
                        setFirstOptionValue(e.target.value)
                        setCheckboxStateOne(!checkboxStateOne)
                        break;
                    }
                    case false: {
                        setFirstOptionValue('')
                        setCheckboxStateOne(!checkboxStateOne)
                        break;
                    }
                }
                break;
            }
            case 'secondOption': {
                switch (!checkboxStateTwo) {
                    case true: {
                        setSecondOptionValue(e.target.value)
                        setCheckboxStateTwo(!checkboxStateTwo)
                        break;
                    }
                    case false: {
                        setSecondOptionValue('')
                        setCheckboxStateTwo(!checkboxStateTwo)
                        break;
                    }
                }
                break;
            }
            default: break;
        }
    }

    //función del botón de salida o retorno
    function quitButtonHandler() {
        navigate('/recruitment/main')
    }

    //función para obtener el valor de cada select
    function obtainSelectValue(value, identifier) {

        if (value === "Seleccionar...") {
            setParraphs(prevParraphs =>
                prevParraphs.map(parraph => {
                    if (parraph[identifier] !== undefined) {
                        return { [identifier]: '' }
                    }
                    return parraph
                })
            )
        } else {

            setParraphs(prevParraphs =>
                prevParraphs.map(parraph =>
                    parraph[identifier] !== undefined
                        ? { [identifier]: value }
                        : parraph
                )
            );
        }
    }

    //función para limpiar los filtros y dejar los valores por
    //defecto de cada variable de estado
    function cleanSearchData() {
        setParraphs([
            { estado: '' },
            { materia: '' },
            { contratacion: '' },
            { ciclo: 'Ciclo 02 2023' }
        ])
        setValue('')
        SetFirstOptionValue('')
        setSecondOptionValue('')
        setCheckboxStateOne(false)
        setCheckboxStateTwo(false)
    }

    //función para obtener el valor del input de filtrado
    function obtainInputValue(event) {
        setValue(event)
    }

    const generatePDF = () => {
        const doc = new jsPDF();
        const maxWidth = 190; // Ancho máximo para el texto
        const lineHeight = 10; // Altura entre líneas de texto
        let currentY = 50; // Posición inicial en Y

        // Configurar encabezado general del documento
        doc.setFont('Montserrat', 'bold');
        doc.setFontSize(16);
        doc.addImage('../../../src/assets/images/logo-uca.png', 'png', 10, 10, 30, 40, 'logo-uca', 'MEDIUM');
        doc.text('Universidad Centroamericana "José Simeón Cañas"', 55, 20);
        doc.text('Departamento de Ciencias Energéticas y Fluídicas', 55, 30);
        doc.text('Solicitud de Instructoría', 80, 40);

        currentY += 10;

        // Iterar sobre todas las solicitudes
        requests.forEach((userData, index) => {

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
            currentY += 10;

            // Configurar encabezado general del documento
            doc.setFont('Montserrat', 'bold');
            doc.setFontSize(16);
            doc.addImage('../../../src/assets/images/logo-uca.png', 'png', 10, 10, 30, 40, 'logo-uca', 'MEDIUM');
            doc.text('Universidad Centroamericana "José Simeón Cañas"', 55, 20);
            doc.text('Departamento de Ciencias Energéticas y Fluídicas', 55, 30);
            doc.text('Solicitud de Instructoría', 80, 40);

            doc.setFontSize(12);
            // Agregar la información de cada solicitud
            const addText = (text, x, y) => {
                doc.text(text, x, y);
                return y + lineHeight;
            };

            const addArrayContent = (label, array, x, y) => {
                doc.text(`${label}:`, x, y);
                array.forEach((item, index) => {
                    doc.text(item, x + ((index + 1) * 45), y);
                });
                return y + lineHeight;
            };

            const segundaOpcionText = userData.seg_op === '0' ? "Segunda opción no seleccionada" : `Segunda opción: ${userData.seg_op}`;
            currentY = addText(`${userData.firstname} ${userData.lastname}`, 10, currentY);
            currentY = addText(`${userData.idnumber}`, 130, currentY - lineHeight);
            currentY = addText(`Primera opción: ${userData.prim_op}`, 10, currentY);
            currentY = addText(segundaOpcionText, 10, currentY);
            currentY = addText(`Tipo de contratación solicitada: ${isRemunerated(userData.es_remunerado)}`, 10, currentY);
            currentY = addText(`Nota con que aprobó la materia: ${userData.nota}`, 10, currentY);
            currentY = addText(`CUM: ${userData.cum}`, 10, currentY);
            currentY = addText(`Número de materias aprobadas: ${userData.nmaterias}`, 10, currentY);
            currentY = addText(`Carrera: ${userData.carrera}`, 10, currentY);
            currentY = addText(`Nivel de estudio: ${academicLevel(userData.niv_est)}`, 10, currentY);

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

            // Salto de página si es necesario (si el contenido supera el límite de la página)
            if (currentY > 270) {
                doc.addPage();
                currentY = 60; // Reiniciar la posición en Y para la nueva página
            }
        });

        // Guardar el PDF final con todas las solicitudes
        doc.save('Listado_Solicitudes.pdf');
    };


    return (
        <div className='adminPageComponent'>
            <UplineComponent />
            <TurnBackButton route="main" />
            <section className='searchSection'>
                <div className='searchByTextSection'>
                    <p>Busqueda</p>
                    <InputComponent type="text" placeholder="Ej: Física l"
                        onExtract={obtainInputValue} value={value} />
                </div>
                <div className='searchByRequirementSection'>
                    <SelectFilterComponent title="Por materia y prioridad"
                        options={['Seleccionar...', ...courses]} onExtract={obtainSelectValue}
                        identifier="materia" value={parraphs[1].materia} />
                    <section className='checkboxInputSection'>
                        <input type='checkbox' value="first"
                            onChange={obtainCheckboxValue} name='firstOption'
                            checked={checkboxStateOne} />
                        <label>Primera opción</label>
                        <input type='checkbox' value="second"
                            onChange={obtainCheckboxValue} name='secondOption'
                            checked={checkboxStateTwo} />
                        <label>Segunda opción</label>
                    </section>
                    <SelectFilterComponent title="Por contratación"
                        options={['Seleccionar...', 'Ambas', 'Remunerado', 'Por Servicio Social']}
                        onExtract={obtainSelectValue} identifier="contratacion"
                        value={parraphs[2].contratacion}
                    />
                    <SelectFilterComponent title="Por ciclo"
                        options={['Seleccionar...', ...semesters]} onExtract={obtainSelectValue}
                        identifier="ciclo" value={parraphs[3].ciclo} />
                    <SelectFilterComponent title="Por estado"
                        options={['Seleccionar...', 'Aceptados y/o confirmados', 'No aceptados']}
                        onExtract={obtainSelectValue} identifier="estado"
                        value={parraphs[0].estado} />
                    <section className='searchButtonsContainer'>
                        <button className='btnGenerate' onClick={generatePDF}>Generar PDF</button>
                        <button className='btnSearch'>Buscar</button>
                        <button className='btnClear' onClick={cleanSearchData}>Limpiar</button>
                    </section>
                </div>
            </section>
            <section className='resultsContainer'>
                <button className='quitButton' onClick={quitButtonHandler}>Salir</button>
                <h3>Resultados de búsqueda</h3>
                <div className='filtersContainer'>
                    {parraphs[0].estado && <p><b>Estado:</b> {parraphs[0].estado}</p>}
                    {parraphs[3].ciclo && <p><b>Ciclo:</b> {parraphs[3].ciclo} </p>}
                    {parraphs[2].contratacion && <p><b>Contratación:</b> {parraphs[2].contratacion}</p>}
                    {parraphs[1].materia && <p><b>Materia:</b> {parraphs[1].materia}</p>}
                    {resultados && <p><b>Resultados encontrados:</b> {resultados}</p>}
                </div>
                <section className='requestListContainer'>
                    {renderRequestList()}
                </section>
                <p>UCA (CEF) Sistema de Reclutamiento de Personal ® Derechos reservados</p>
            </section>
        </div>
    )
}

export default AdminPageComponent
