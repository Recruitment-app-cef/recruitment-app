import './InputComponent.css'

function InputComponent(props){

    function onExtractInputValue(event){
        props.onExtract(event.target.value)
    }

    return(
            <input className='inputComponent' type={props.type} name={props.name}
            placeholder={props.placeholder} onChange={onExtractInputValue} value={props.value}/>
    )
}

export default InputComponent