import Comments from './components/Comments';
import Likes from './components/Likes';
import Spinner from './components/Spinner';
import Title from './components/Title';
import myImage from './sea.jpg'
import { useSelector } from 'react-redux';

function App() {
  const error = useSelector(state => state.loaderReducer.error)

  return (
    <div className="App">
      <div className='wrap'>
        <Spinner />
        <div className='card'>
          {error && (
            <div className='error-message'>
              {error}
            </div>
          )}
          <div className='card-image'>
            <img src={myImage} alt='sea' />
            <Title />
            <Likes />
          </div>
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default App;
