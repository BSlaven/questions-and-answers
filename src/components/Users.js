import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import User from './User';

const Users = () => {

  const dispatch = useDispatch();

  let users = useSelector(state => state.users);

  useEffect(() => {
    dispatch({ type: 'FETCH_USERS'})
  }, []);
  
  return (
    <div className="col-5 m-3 text-align-center">
      <h3 className="my-4">Users</h3>
      {users.map(user => <User key={user.id} user={user} />)}
    </div>
  )
}

export default Users;