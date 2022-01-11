import { useEffect } from 'react';
import { useDispatch } from 'react-redux'

import Questions from '../components/Questions';
import Users from '../components/Users';

const Homepage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_ALL_QUESTIONS' })
  }, [dispatch]);

  useEffect(() => {
    dispatch({ type: 'FETCH_USERS'})
  }, [dispatch]);
  
  return (
    <div className="d-flex container justify-content-around">
      <Questions />
      <Users />
    </div>
  )
}

export default Homepage;