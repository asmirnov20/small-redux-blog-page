import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { deleteComment } from "../redux/actions"
import { UPDATE_COMMENT } from "../redux/types"

const SingleComment = ({ data }) => {

    const { text, id } = data
    const [commentText, setCommentText] = useState('')


    useEffect(() => {
        if (text) {
            setCommentText(text)
        }
    }, [text])

    const dispatch = useDispatch()

    const handleUpdate = (e) => {
        e.preventDefault()
        dispatch({
            type: UPDATE_COMMENT,
            data: {
                text: commentText,
                id: id
            }
        })
    }

    const handleDelete = () => {
        dispatch(deleteComment(id))
    }


    return (
        <form onSubmit={handleUpdate} className="comments-item">

            <input type='text' value={commentText} onChange={e => setCommentText(e.target.value)} />
            <div className="comments-item-delete" onClick={handleDelete}>&times;</div>
            <input type='submit' hidden />
        </form>
    )
}

export default SingleComment