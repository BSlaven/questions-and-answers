import Questions from '../components/Questions';
import Users from '../components/Users';

const Homepage = () => {
  return (
    <div className="text-center">
      <h1>Ovo je Slavenov Homepage</h1>
      <Questions />
      <Users />
    </div>
  )
}

export default Homepage;