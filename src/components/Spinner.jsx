import { TailSpin } from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'

const Spinner = () => {

    const spinner = useSelector(state => {
        const { loaderReducer } = state
        return loaderReducer.show
    })

    return (
        <div className='loader-styles'>
            <TailSpin
                color="#00BFFF"
                height={80}
                width={80}
                visible={spinner}
            />
        </div>
    )
}

export default Spinner