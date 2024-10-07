import FieldComponent from '../../../public/reusable/FieldComponent/FieldComponent'
import SelectFieldComponent from '../../../public/reusable/SelectFieldComponent/SelectFieldComponent'
import './AcademicInformationView.css'
import { useState } from 'react'
import ItemComponent from '../../../public/reusable/ItemComponent/ItemComponent'
import NoneRenderComponent from '../../../public/reusable/NoneRenderComponent/NoneRenderComponent'
import { FiAlertCircle } from 'react-icons/fi'

function AcademicInformationView(props) {

    const [academicData, setAcademicData] = useState([
        { identifier: "Carrera", value: "" },
        { identifier: "NivelEstudio", value: "" },
        { identifier: "MateriasAprobadas", value: "" },
        { identifier: "CUM", value: "" },
        { identifier: "MateriasProximas", value: "" },
        { identifier: "Experiencia", value: "" }
    ])

    const [signatures, setSignatures] = useState([])
    const [value, setValue] = useState('')
    //función para agregar los correos de manera dinámica
    function obtainSignature(e) {
        e.preventDefault()
        setValue(e.target.value)
    }

    function deleteAnItem(itemValue, clickState) {
        if (clickState == true) {
            const filteredSignatures = signatures.filter((item) => item !== itemValue);
            setSignatures(filteredSignatures);
            setAcademicData(prevData =>
                prevData.map(data =>
                    data.identifier === 'MateriasProximas' ? { ...data, value: filteredSignatures } : data
                )
            );
            props.onExtract(academicData);
        }
    }

    function renderSignatures() {
        if (signatures.length == 0) {
            return <NoneRenderComponent />
        } else {
            return signatures.map((item) => <ItemComponent value={item} key={item} onExtract={deleteAnItem} />)
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
            props.onExtract(academicData);
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
            props.onExtract(academicData);
        }
    }

    function obtainCommentValue(e) {
        const { name, value } = e.target;
        setAcademicData(prevData =>
            prevData.map(data =>
                data.identifier === name ? { ...data, value } : data
            )
        );
        props.onExtract(academicData);
    }

    function obtainFieldValue(value, identifier) {
        setAcademicData(prevData =>
            prevData.map(data =>
                data.identifier === identifier ? { ...data, value } : data
            )
        );
        props.onExtract(academicData);
    }

    return (
        <section className='academicInformationContainer'>
            <h3>Sección de información académica</h3>
            <div className='fieldsContainer'>
                <FieldComponent labelText="Carrera:" type="text" id="Carrera"
                    onExtract={obtainFieldValue} />
                <SelectFieldComponent labelText="Nivel de estudio:"
                    options={['Selecionar...', 'Primer Ciclo', 'Segundo Ciclo',
                        'Tercer Ciclo', 'Cuarto Ciclo', 'Quinto Ciclo',
                        'Sexto Ciclo', 'Séptimo Ciclo', 'Octavo Ciclo',
                        'Noveno Ciclo', 'Décimo Ciclo', 'Egresado']} id="NivelEstudio"
                    onExtract={obtainSelectValue} />
                <p>Nota: Si el número de materias es menor a 20 se rechazará el formulario</p>
                <FieldComponent labelText="Materias aprobadas:" type="text" id="MateriasAprobadas"
                    onExtract={obtainFieldValue} />
                <FieldComponent labelText="CUM:" type="text" id="CUM" onExtract={obtainFieldValue} />
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
                <input type="text" className='comment' name="Experiencia" onChange={obtainCommentValue} />
            </div>
        </section>
    )
}

export default AcademicInformationView