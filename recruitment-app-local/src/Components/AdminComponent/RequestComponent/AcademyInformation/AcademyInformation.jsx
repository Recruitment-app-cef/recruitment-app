import './AcademyInformation.css'

function AcademyInformation(){
    return(
        <div className='academyInformation'>
                <section className='twoPartsSection'>
                    <section className='firstPart'>
                        <p><b>Carrera: </b> Ingeniería Informática</p>
                        <p><b>Teléfonos: </b>
                            <ul>
                                <li>2222-2222</li>
                                <li>2222-2222</li>
                            </ul>
                        </p>
                        <p><b>Materias Inscritas: </b>
                            <ul>
                                <li>Programación I</li>
                                <li>Programación II</li>
                                <li>Programación III</li>
                            </ul>
                        </p>
                    </section>
                    <section className='secondPart'>
                        <p><b>Correo/s: </b>
                            <ul>
                                <li>username@email.com</li>
                                <li>username2@email.com</li>
                            </ul>
                        </p>
                        <p><b>Materias aprobadas: </b>28</p>
                        <p><b>CUM: </b>7.29</p>
                        <p><b>Nivel de estudio: </b>Séptimo Ciclo</p>
                    </section>
                </section>
                <section className='commentsPart'>
                    <p><b>Experiencia como instructor: </b>La segunda vez</p>
                    <p><b>Comentario adicional: </b>Que bueno que me pagarán</p>
                </section>
        </div>
    )
}

export default AcademyInformation