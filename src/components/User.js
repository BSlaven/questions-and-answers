const User = ({ user }) => {
  return (
    <div className="card">
      <div className="card-body text-secondary">
        {user.name || user.email}
      </div>
    </div>
  )
}

export default User
