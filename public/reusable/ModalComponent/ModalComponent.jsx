import './ModalComponent.css'

function ModalComponent(props){
    return(
        <div className={`modalSection ${props.isOpen && "open"}`}>
                <div className='modalBackground'></div>
                {props.children}
                <button className='modalSection-close' onClick={props.closeModal}>Close</button>
            </div>
    )
}

export default ModalComponent