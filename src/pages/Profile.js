import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

import Questions from '../components/Questions';
import EditElement from '../components/EditElement'

const Profile = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [ editableElement, setEditableElement ] = useState(null);
  const [ showEditForm, setShowEditForm ] = useState(false)

  const loggedUser = useSelector(state => state.loggedIn);
  const users = useSelector(state => state.users);
  const selectedUser = users.find(user => user.userId === loggedUser);
  const questions = useSelector(state => state.questions)
    .filter(questions => questions.author === loggedUser)

  const userQuestions = questions.filter(question => question.author === loggedUser)

  const userLikes = userQuestions
    .map(question => question.likes)
    .reduce((acc, curr) => acc.concat(curr), []);

    const onClickForChange = e => {
      const target = e.target.id;
      setEditableElement(target);
      setShowEditForm(true)
    }
  
    const closeEditForm = () => {
      setShowEditForm(false);
    }
  
    const deleteProfile = () => {
      dispatch({ type: 'DELETE_PROFILE', id: selectedUser.id })
      navigate('/');
    }
  
  return (
    <div className="rounded m-3 mt-5 mx-auto col-md-12 position-relative">
      <button 
        style={{top: '-1rem', right: '1rem'}} 
        className="btn btn-outline-warning position-absolute"
        onClick={deleteProfile}>Delete Profile</button>
      <div className="row m-4 mt-5 d-flex container justify-content-center">
      <div className="col-sm-12 col-lg-5 m-3" style={{color: "#2C3E50"}}>
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
        <button 
          onClick={onClickForChange}
          style={{backgroundColor: "#D2E7FC"}}
          className="my-3 btn btn-light text-dark"
          id="name">
          Change Name
        </button>
        <button 
          onClick={onClickForChange}
          style={{backgroundColor: "#D2E7FC"}}
          className="my-3 btn btn-light text-dark ms-2"
          id="password">Change Password
        </button>
      </div>
      {showEditForm && <EditElement close={closeEditForm} element={editableElement} user={selectedUser} />}
      <Questions displayQuestions={userQuestions} />
      </div>
    </div>
  )
}

export default Profile
