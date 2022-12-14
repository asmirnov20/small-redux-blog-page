import { useDispatch, useSelector } from 'react-redux'
import { inputText } from '../redux/actions'

const Title = () => {

    const text = useSelector(state => {
        const { inputReducer } = state
        return inputReducer.text
    })

    const dispatch = useDispatch()

    const handleChange = (e) => {
        dispatch(inputText(e.target.value))
    }

    return (
        <div>
            <div className="card-title-top">
                <input type='text' onChange={handleChange} />
            </div>
            <p>{text}</p>
        </div>
    )
}

export default Title