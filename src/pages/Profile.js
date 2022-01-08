// import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Questions from '../components/Questions';

const Profile = () => {

  const loggedUser = useSelector(state => state.loggedIn);
  const users = useSelector(state => state.users);
  const selectedUser = users.find(user => user.userId === loggedUser);
  const questions = useSelector(state => state.questions)
    .filter(questions => questions.author === loggedUser)

  const userQuestions = questions.filter(question => question.author === loggedUser)

  const userLikes = userQuestions
    .map(question => question.likes)
    .reduce((acc, curr) => acc.concat(curr), []);
  
  return (
    <div className="rounded m-3 mt-5 mx-auto col-md-12">
      <div className="row m-4 mt-5 d-flex justify-content-center">
      <div className="col-sm-12 col-md-5 m-3" style={{color: "#2C3E50"}}>
        <h3 style={{color: "#1C2833"}} className="my-4">User info</h3>
        <div className="d-flex align-items-center mb-3 gx-1">
          <p className="fs-4 m-0 col-5">Name:</p>
          <p className="fs-4 m-0 col-3">{selectedUser.name || selectedUser.email}</p>
        </div>
        <div className="row mb-3 gx-2">
          <p className="fs-4 m-0 col-5">Likes:</p>
          <p className="fs-4 m-0 col-5">{userLikes.length}</p>
        </div>
        <div className="row mb-3 gx-2">
          <p className="fs-4 m-0 col-5">Questions:</p>
          <p className="fs-4 m-0 col-5">{userQuestions.length}</p>
        </div>
        <div className="row mb-3 gx-2">
          <p className="fs-4 m-0 col-5">Answers:</p>
          <p className="fs-4 m-0 col-5">{userQuestions.length}</p>
        </div>
        <button style={{backgroundColor: "#D2E7FC"}} className="my-3 btn btn-light text-dark">Change info</button>
      </div>
      <Questions displayQuestions={userQuestions} />
      </div>
    </div>
  )
}

export default Profile
