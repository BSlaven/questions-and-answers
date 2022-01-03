import { useEffect } from 'react';

import Questions from '../components/Questions';
import Users from '../components/Users';

const Homepage = () => {
  
  return (
    <div className="row justify-content-around">
      <Questions />
      {<Users />}
    </div>
  )
}

export default Homepage;