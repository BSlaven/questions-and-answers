import User from './User';

const Users = ({ users }) => {
  return (
    <div className="col-5 m-3">
      <h3>Users</h3>
      {users.map(user => <User key={user.id} user={user} />)}
    </div>
  )
}

export default Users;