import FieldComponent from '../../../public/reusable/FieldComponent/FieldComponent'
import './Personal_InformationView.css'
import { FiAlertCircle } from 'react-icons/fi'
import { useState } from 'react'
import ItemComponent from '../../../public/reusable/ItemComponent/ItemComponent'
import NoneRenderComponent from '../../../public/reusable/NoneRenderComponent/NoneRenderComponent'

function Personal_InformationView(props) {

    const [personalData, setPersonalData] = useState([
        { identifier: "Image", value: "" },
        { identifier: "Carne", value: "" },
        { identifier: "Nombres", value: "" },
        { identifier: "Apellidos", value: "" },
        { identifier: "TelefonoFijo", value: "" },
        { identifier: "TelefonoMovil", value: "" },
        { identifier: "Emails", value: [] }
    ])

    const [emails, setEmails] = useState([])
    const [value, setValue] = useState('')

    //función para agregar los correos de manera dinámica
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
            props.onExtract(personalData);
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
            props.onExtract(personalData);
        }
    }

    function obtainFieldValue(value, identifier) {
        setPersonalData(prevData =>
            prevData.map(data =>
                data.identifier === identifier ? { ...data, value } : data
            )
        )
        props.onExtract(personalData)
    }

    function obtainImageValue(e) {
        const imageValue = e.target.value;
        setPersonalData(prevData =>
            prevData.map(data =>
                data.identifier === 'Image' ? { ...data, value: imageValue } : data
            )
        )
        props.onExtract(personalData)
    }

    return (
        <section className='personalInformationContainer'>
            <h1>Llene el formulario para una nueva solicitud</h1>
            <article className='iconInformation'>
                <FiAlertCircle className='iconAlert' />
                <p>Los campos que contienen este icono son de caracter obligatorio</p>
            </article>
            <h3>Sección de información personal</h3>
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
            <section className='fieldsContainer'>
                <FieldComponent labelText="Carné:" type="text" id="Carne" onExtract={obtainFieldValue} />
                <FieldComponent labelText="Nombre(s):" type="text" id="Nombres"
                    onExtract={obtainFieldValue} />
                <FieldComponent labelText="Apellido(s):" type="text" id="Apellidos"
                    onExtract={obtainFieldValue} />
                <FieldComponent labelText="Teléfono fijo:" type="text" id="TelefonoFijo"
                    onExtract={obtainFieldValue} />
                <FieldComponent labelText="Teléfono móvil:" type="text" id="TelefonoMovil"
                    onExtract={obtainFieldValue} />
            </section>
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
        </section>
    )
}

export default Personal_InformationView