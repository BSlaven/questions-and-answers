import Questions from '../components/Questions';
import Users from '../components/Users';

const Homepage = () => {

  return (
    <div className="container justify-content-around m-auto row">
      <Questions />
      <Users />
    </div>
  )
}

export default Homepage;