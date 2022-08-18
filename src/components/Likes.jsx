import { useDispatch, useSelector } from "react-redux"
import { dislike, incrementLikes } from '../redux/actions'

const Likes = () => {

    const likes = useSelector(state => {
        const { likesReducer } = state
        return likesReducer.likes

    })

    const dispatch = useDispatch()

    const handleIncrease = () => {
        dispatch(incrementLikes())
    }

    const handleDislike = () => {
        dispatch(dislike())
    }

    return (
        <div className='button-controls'>
            <button type="button" onClick={handleIncrease}> ❤ {likes}</button>
            <button type="button" onClick={handleDislike}>Dislike</button>
        </div>
    )
}

export default Likes