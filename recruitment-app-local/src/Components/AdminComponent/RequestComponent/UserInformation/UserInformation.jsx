import './UserInformation.css'

function UserInformation(){
    return(
        <div className='userInformation'>
            <img src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg" alt="user-img"/>
            <div className='personalInformation'>
                <section className='firstPart'>
                    <p><b>Carné: </b> 00007518</p>
                    <p><b>Solicitante: </b> Marcos Antonio Hernández Grande</p>
                    <p><b>Primera opción: </b> Física I</p>
                    <p><b>Segunda opción: </b> Física II</p>
                </section>
                <section className='secondPart'>
                    <p><b>Contratación: </b> Remunerado</p>
                    <p><b>Ciclo para el cual solicita instructoría: </b> 02/2023</p>
                    <p><b>Nota con que aprobó la primera opción: </b> 6.7</p>
                </section>
            </div>
        </div>
    )
}

export default UserInformation