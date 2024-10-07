import FieldComponent from '../../../public/reusable/FieldComponent/FieldComponent'
import SelectFieldComponent from '../../../public/reusable/SelectFieldComponent/SelectFieldComponent'
import './BookingInformationView.css'
import { useState } from 'react'

function BookingInformationView(props) {

    const [bookingData, setBookingData] = useState([
        { identifier: "PrimeraOpcion", value: "" },
        { identifier: "SegundaOpcion", value: "" },
        { identifier: "Ciclo", value: "" },
        { identifier: "Contratacion", value: "" },
        { identifier: "Nota1aOpcion", value: "" },
        { identifier: "Comentario", value: "" }])

    function obtainSelectValue(value, identifier) {
        if (value == "Seleccionar...") {
            alert("Por favor selecciona una opción")
        } else {
            setBookingData(prevData =>
                prevData.map(data =>
                    data.identifier === identifier ? { ...data, value } : data
                )
            );
            props.onExtract(bookingData);
        }
    }

    function obtainInputValue(e) {
        const { name, value } = e.target;
        setBookingData(prevData =>
            prevData.map(data =>
                data.identifier === name ? { ...data, value } : data
            )
        );
        props.onExtract(bookingData);
    }

    function obtainFieldValue(value, identifier) {
        setBookingData(prevData =>
            prevData.map(data =>
                data.identifier === identifier ? { ...data, value } : data
            )
        );
        props.onExtract(bookingData);
    }

    return (
        <section className='bookingInformationContainer'>
            <h3>Sección de información para contratación</h3>
            <p>Especifica en que materia y actividad quisieras colaborar como instructor</p>
            <div className='fieldsContainer'>
                <SelectFieldComponent labelText="Primera opción:"
                    options={['Seleccionar...', 'Física l - Discusión', 'Física l - Laboratorios',
                        'Física ll - Discusión', 'Física ll - Laboratorio',
                        'Electricidad y Magnetismo - Laboratorio', 'Electricidad y Magnetismo - Discusión',
                        'Termodinámica', 'Mecánica de Fluidos']} onExtract={obtainSelectValue}
                    id="PrimeraOpcion" />
                <SelectFieldComponent labelText="Segunda opción:"
                    options={['Seleccionar...', 'Física l - Discusión', 'Física l - Laboratorios',
                        'Física ll - Discusión', 'Física ll - Laboratorio',
                        'Electricidad y Magnetismo - Laboratorio', 'Electricidad y Magnetismo - Discusión',
                        'Termodinámica', 'Mecánica de Fluidos']} id="SegundaOpcion" onExtract={obtainSelectValue} />
                <SelectFieldComponent labelText="Ciclo al que aplica:"
                    options={['Seleccionar...', 'Ciclo 01-2024', 'Ciclo 02-2024',
                        'Ciclo 03-2024', 'Ciclo 01-2025', 'Ciclo 02-2025', 'Ciclo 03-2025']}
                    id="Ciclo" onExtract={obtainSelectValue} />
                <SelectFieldComponent labelText="Tipo de contratación:"
                    options={['Seleccionar...', 'Horas Sociales', 'Remunerado']} id="Contratacion"
                    onExtract={obtainSelectValue} />
                <FieldComponent labelText="1a. opción (nota):" type="text" id="Nota1aOpcion"
                    onExtract={obtainFieldValue} />
                <p>Puedes expresar algún comentario adicional:</p>
                <input type="text" className='comment' name="Comentario" onChange={obtainInputValue} />
            </div>
            <p>UCA (CEF) Sistema de Reclutamiento de Personal ® Derechos Reservados</p>
        </section>
    )
}

export default BookingInformationView