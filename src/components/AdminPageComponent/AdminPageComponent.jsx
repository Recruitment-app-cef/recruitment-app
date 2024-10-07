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
                        <button className='btnGenerate'>Generar PDF</button>
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
