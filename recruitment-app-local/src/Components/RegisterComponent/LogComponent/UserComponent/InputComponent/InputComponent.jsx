import './InputComponent.css'

function InputComponent(props){
    return(
        <div className='inputComponent'>
            <p>{props.title}</p>
            <input type="text" placeholder={props.placeholder}/>
        </div>
    )   
}

export default InputComponent