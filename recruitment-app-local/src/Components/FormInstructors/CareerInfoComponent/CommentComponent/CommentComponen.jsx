import './CommentComponent.css'

function CommentComponent(){
    return(
        <div className='commentComponent'>
            <p>Liste algunas experiencias como instructor
                (especificando las materias en que ha colaborado), si las hubiese:
            </p>
            <input type='text' placeholder='Deja tu comentario...'/>
        </div>
    )
}

export default CommentComponent