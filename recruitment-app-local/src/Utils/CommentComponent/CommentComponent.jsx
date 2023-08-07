import './CommentComponent.css'

function CommentComponent(props){

    function obtainingComment(event){
        props.onExtract(event.target.name, event.target.value)
    }

    return(
        <div className='commentComponent'>
            <p>{props.title}</p>
            <input type='text' name={props.nameInput} placeholder='Deja tu comentario...' onChange={obtainingComment}/>
        </div>
    )
}

export default CommentComponent