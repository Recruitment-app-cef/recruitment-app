import './UserInformation.css'

function UserInformation(props){
    var carne, nombres, apellidos, primeraOpcion, segundaOpcion, tipoContratacion, ciclo, nota
    props.dataObject.forEach((item) => {
        switch(item.identifier){
            case 'carné':
                carne = item.value
                break
            case 'nombres':
                nombres = item.value
                break
            case 'apellidos':
                apellidos = item.value
                break
            case 'primeraOpcion':
                primeraOpcion = item.value
                break
            case 'segundaOpcion':
                segundaOpcion = item.value
                break
            case 'tipoContratacion':
                tipoContratacion = item.value
                break
            case 'ciclo':
                ciclo = item.value
                break
            case 'nota':
                nota = item.value
                break
        }
    })

    return(
        <div className='userInformation'>
            <img src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg" alt="user-img"/>
            <div className='personalInformation'>
                <section className='firstPart'>
                    <p><b>Carné:</b>{carne}</p>
                    <p><b>Solicitante:</b>{nombres}{apellidos}</p>
                    <p><b>Primera opción:</b>{primeraOpcion}</p>
                    <p><b>Segunda opción:</b>{segundaOpcion}</p>
                </section>
                <section className='secondPart'>
                    <p><b>Contratación:</b>{tipoContratacion}</p>
                    <p><b>Ciclo para el cual solicita instructoría:</b>{ciclo}</p>
                    <p><b>Nota con que aprobó la primera opción:</b>{nota}</p>
                </section>
            </div>
        </div>
    )
}

export default UserInformation