import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import User from './User';

const Users = () => {

  const dispatch = useDispatch();

  let users = useSelector(state => state.users);
  console.log('Ovo je user componente', users);
  

  useEffect(() => {
    dispatch({ type: 'FETCH_USERS'})
  }, [dispatch]);
  
  return (
    <div className="col-5 m-3 text-align-center">
      <h3 className="my-4">Users (questions)</h3>
      {users && users.map(user => <User key={user.id} user={user} />)}
    </div>
  )
}

export default Users;