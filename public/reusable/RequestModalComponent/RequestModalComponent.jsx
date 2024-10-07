import './RequestModalComponent.css'

function RequestModalComponent(props){
    
    return( 
        <div className={`requestModalComponent ${props.isOpen && "open"}`}>
            <div className='backgroundModalComponent'></div>
            <h3>Aceptado</h3>
            <section>
                <p>Para {props.text}</p>
                <p>Por {props.autor}</p>
            </section>
        </div>
    )
}

export default RequestModalComponent