import './SubjectSearch.css'

function SubjectSearch(){

    const subjects = [
        'Electricidad y Magnetismo','Física I'
        ,'Física II','Electricidad y Magnetismo Laboratorios'
    ]

    return(
        <div className='subjectSearchComponent'>
            <h3>Por materia y prioridad:</h3>
            <section className='selectSubjectSection'>
                <select>
                    {
                        subjects.map((subject)=>{
                            return <option key={`${subject}_item`} value={subject}>{subject}</option>
                        })
                    }
                </select>
                <div className='subjectApplySection'>
                    <input type='checkbox' value="primera opción"/>
                    <p>Primera opción</p>
                    <input type='checkbox' value="segunda opción"/>
                    <p>Segunda opción</p>
                </div>
            </section>
        </div>
    )
}

export default SubjectSearch;