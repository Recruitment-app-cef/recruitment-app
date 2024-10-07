import './ItemComponent.css'
import {GoTrash} from 'react-icons/go'

function ItemComponent(props){

    var clickState = false;

    function obtainClickEvent(e){
        e.preventDefault()
        if(e.nativeEvent.isTrusted == true){
            clickState = true;
            props.onExtract(props.value, clickState)
        }
    }

    return(
        <article className="itemComponent"  >
            <p>{props.value}</p>
            <button className='deleteButton' onClick={obtainClickEvent}><GoTrash/></button>            
        </article>
    )
}

export default ItemComponent