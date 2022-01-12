import { useSelector } from 'react-redux'

const User = ({ user }) => {

  const questions = useSelector(state => state.questions);
  const questionsThisUser = questions.filter(q => q.author === user.userId);

  return (
    <div className="card my-2">
      <div className="card-body text-secondary">
        {`${user.name || user.email} (${questionsThisUser.length})`}
      </div>
    </div>
  )
}

export default User
