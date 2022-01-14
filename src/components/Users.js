import { useSelector } from 'react-redux';

import User from './User';

const Users = () => {

  const users = useSelector(state => state.users);
  const questions = useSelector(state => state.questions);

  const countQuestionsForUser = (user) => {
    const filtered = questions.filter(q => q.author === user.userId)
    return filtered.length
  }

  users.sort((a, b) => countQuestionsForUser(b) - countQuestionsForUser(a))

  return (
    <div className="col-sm-12 col-lg-5 m-3">
      <h3 className="my-4">Users (questions)</h3>
      {users && users.map(user => <User key={user.userId} user={user} />)}
    </div>
  )
}

export default Users;