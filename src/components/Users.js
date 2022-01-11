import { useSelector } from 'react-redux';

import User from './User';

const Users = () => {

  let users = useSelector(state => state.users);
  console.log('My users: ', users)

  
  return (
    <div className="col-5 m-3">
      <h3 className="my-4">Users (questions)</h3>
      {users && users.map(user => <User key={user.userId} user={user} />)}
    </div>
  )
}

export default Users;