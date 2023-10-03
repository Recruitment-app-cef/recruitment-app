import './UserInformation.css'

function UserInformation(props){
    var carne, nombres, apellidos, primeraOpcion, segundaOpcion, tipoContratacion, ciclo, nota
    [carne, nombres, apellidos, primeraOpcion, segundaOpcion, ciclo, tipoContratacion, nota] = props.dataObject

    return(
        <div className='userInformation'>
            <img src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg" alt="user-img"/>
            <div className='personalInformation'>
                <section className='firstPart'>
                    <p><b>Carné:</b>{carne.value}</p>
                    <p><b>Solicitante:</b>{nombres.value}{apellidos.value}</p>
                    <p><b>Primera opción:</b>{primeraOpcion.value}</p>
                    <p><b>Segunda opción:</b>{segundaOpcion.value}</p>
                </section>
                <section className='secondPart'>
                    <p><b>Contratación:</b>{tipoContratacion.value}</p>
                    <p><b>Ciclo para el cual solicita instructoría:</b>{ciclo.value}</p>
                    <p><b>Nota con que aprobó la primera opción:</b>{nota.value}</p>
                </section>
            </div>
        </div>
    )
}

export default UserInformation