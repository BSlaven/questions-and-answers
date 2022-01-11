import Questions from '../components/Questions';
import Users from '../components/Users';

const Homepage = () => {

  return (
    <div className="d-flex container justify-content-around">
      <Questions />
      <Users />
    </div>
  )
}

export default Homepage;