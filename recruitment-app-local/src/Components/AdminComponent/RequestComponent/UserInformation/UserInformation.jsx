import './UserInformation.css'

function UserInformation(props){
    var image, carne, nombres, apellidos, primeraOpcion, segundaOpcion, tipoContratacion, ciclo, nota
    [image, carne, nombres, apellidos, primeraOpcion, segundaOpcion, ciclo, tipoContratacion, nota] = props.dataObject

    return(
        <div className='userInformation'>
            <img src={image.value} alt="user-img"/>
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