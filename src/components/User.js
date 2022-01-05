const User = ({ user }) => {

  return (
    <div className="card my-2">
      <div className="card-body text-secondary">
        {`${user.name || user.email} (${user.questions.length})`}
      </div>
    </div>
  )
}

export default User
