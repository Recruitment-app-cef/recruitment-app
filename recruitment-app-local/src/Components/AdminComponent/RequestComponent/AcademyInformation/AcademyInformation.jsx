import './AcademyInformation.css'

function AcademyInformation(props){
    var carrera, fijo, movil, email, materiasAprobadas, cum, nivelEstudio, materiasProximas, experiencia, comentario
    [fijo, movil, email, carrera, nivelEstudio, materiasAprobadas, cum, materiasProximas, experiencia, comentario] = props.academicData
    
    return(
        <div className='academyInformation'>
                <section className='twoPartsSection'>
                    <section className='firstPart'>
                        <p><b>Carrera: </b> {carrera.value}</p>
                        <p><b>Teléfono/s: </b>
                            <ul>
                                <li>{fijo.value}</li>
                                <li>{movil.value}</li>
                            </ul>
                        </p>
                        <p><b>Materias Inscritas: </b>
                            <ul>
                                {materiasProximas.value.map((item) => {
                                    return <li>{item}</li>
                                })}
                            </ul>
                        </p>
                    </section>
                    <section className='secondPart'>
                        <p><b>Correo/s: </b>
                            <ul>
                                {email.value.map((item) => {
                                    return <li>{item}</li>
                                })}
                            </ul>
                        </p>
                        <p><b>Materias aprobadas: </b>{materiasAprobadas.value}</p>
                        <p><b>CUM: </b>{cum.value}</p>
                        <p><b>Nivel de estudio: </b>{nivelEstudio.value}</p>
                    </section>
                </section>
                <section className='commentsPart'>
                    <p><b>Experiencia como instructor: </b>{experiencia.value}</p>
                    <p><b>Comentario adicional: </b>{comentario.value}</p>
                </section>
        </div>
    )
}

export default AcademyInformation