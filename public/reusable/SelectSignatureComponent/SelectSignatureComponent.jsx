import './SelectSignatureComponent.css'
import {useState} from 'react'
import Swal from 'sweetalert2'

function SelectSignatureComponent(props){

    let signatures = props.signatures
    const [flag, setFlag] = useState(false)

    function obtainSignatureValue(e){
        Swal.fire(`Haz seleccionado: ${e.target.innerHTML} para contratación`);
        let signature = e.target.innerHTML
        let index = e.target.getAttribute('data-key')
        console.log(index)
        setFlag(true)
        props.obtainSignature(signature, index)
    }

    const validateSelection = () => { flag === true ? props.close() : Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Sin asignatura seleccionada para contratación",
        footer: 'Selecciona una asignatura para contratación'
      }) }

    return(
        <div className={`selectSignatureComponent ${props.click && "open"}`}>
            <p>Seleccione la asignatura para la cual selecciona al solicitante:</p>
            <section className='signaturesList'>
                {
                    signatures.map((signature,index)=>{
                        return <p onClick={obtainSignatureValue} 
                        key={`${signature}_item_${index}`} className={`${signature}_item`}
                        data-key={`${index+1}`}>
                            {signature}
                            </p>
                    })
                }
            </section>
            <section className='buttonsSelectSignatures'>
                <button className="confirmButton" onClick={validateSelection}>OK</button>
                <button className='cancelButton' onClick={props.hide}>Cancelar</button>
            </section>
        </div>
    )
}

export default SelectSignatureComponent