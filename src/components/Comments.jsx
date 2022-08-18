import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import uniqid from 'uniqid'
import { addComment, loadComments } from '../redux/actions'
import SingleComment from './SingleComment'

const Comments = () => {

    const [text, setText] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadComments())
    }, [])


    const comments = useSelector(state => {
        const { commentsReducer } = state
        console.log(state);
        return commentsReducer.comments
    })


    const handleSubmit = e => {
        e.preventDefault()
        const id = uniqid()
        dispatch(addComment(text, id))
        setText('')
    }
    console.log(comments)

    return (
        <div className="card-comments">
            <form onSubmit={handleSubmit} className="comments-item-create" >
                <input type='text' value={text} onChange={e => setText(e.target.value)} placeholder='Напишите сообщение...' />
                <input type='submit' hidden />
            </form>
            <h3>Сообщения:</h3>
            {comments.length > 0 && comments.map(post => {
                return <SingleComment key={post.id} data={post} />
            })}
        </div>
    )
}

export default Comments