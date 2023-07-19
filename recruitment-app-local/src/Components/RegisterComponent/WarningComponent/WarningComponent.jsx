import './WarningComponent.css'

function WarningComponent(){
    return(
        <div className='warningComponent'>
            <button className='btnCloseWarning'>x</button>
            <p>Requisitos para ser instructor</p>
            <ul>
                <li>Tener un CUM igual o mayor que 7.0</li>
                <li>Nota de área mayor o igual que 8.0</li>
                <li>ser estudiante activo, egresado o graduado de la universidad</li>
                <li>Haber completado al menos, el 60% de su carrera.En casos excepcionales
                    y con la aprobación del Vicerrector académico, bastará haber aprobado 20
                    materias de su carrera.
                </li>
                <li>Ser responsable y honesto con su trabajo</li>
                <li>Mostrar inclinación y aptitud para el trabajo universitario.</li>
            </ul>
        </div>
    )   
}

export default WarningComponent