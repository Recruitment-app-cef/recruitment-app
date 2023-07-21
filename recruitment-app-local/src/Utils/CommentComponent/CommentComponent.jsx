import './CommentComponent.css'

function CommentComponent(props){
    return(
        <div className='commentComponent'>
            <p>{props.title}</p>
            <input type='text' placeholder='Deja tu comentario...'/>
        </div>
    )
}

export default CommentComponent