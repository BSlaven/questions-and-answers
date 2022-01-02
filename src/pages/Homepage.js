import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Questions from '../components/Questions';
import Users from '../components/Users';

const Homepage = () => {

  const dispatch = useDispatch();

  let users = useSelector(state => state.users);

  useEffect(() => {
    dispatch({ type: 'FETCH_USERS'})
  }, []);
  
  return (
    <div className="row justify-content-around">
      <Questions />

      {<Users users={users} />}
    </div>
  )
}

export default Homepage;