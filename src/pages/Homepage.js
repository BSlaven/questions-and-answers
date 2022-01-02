import { useEffect, useState } from 'react';
import { getDocs } from 'firebase/firestore';

import { useDispatch, useSelector } from 'react-redux';

import Questions from '../components/Questions';
import Users from '../components/Users';

const Homepage = () => {

  const dispatch = useDispatch();

  const users = useSelector(state => state.users);
  // const questions = users.map(user => user.questions);

  useEffect(()=> {
    dispatch({ type: 'FETCH_USERS' })
  }, []);
  
  return (
    <div>
      {/* <Questions questions={questions} /> */}
      <Users users={users} />
    </div>
  )
}

export default Homepage;