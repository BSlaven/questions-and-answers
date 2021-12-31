const Users = ({ users }) => {
  return (
    <div>
      <h3>Users Component</h3>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  )
}

export default Users
