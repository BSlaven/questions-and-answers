import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { TiDeleteOutline } from 'react-icons/ti'

import { 
  BsHandThumbsDown,
  BsHandThumbsUp,
  BsChatLeft
} from 'react-icons/bs'

const Question = ({ question }) => {

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const user = useSelector(state => state.loggedIn);
  const users = useSelector(state => state.users);
  const author = users.find(user => user.userId === question.author)
  const formatedDate = format(question.createdAt, 'dd/MMM/yyyy')
  const questionLikes = question.likes;
  const questionDislikes = question.dislikes;

  const clickQuestionHandler = () => {
    if(!user) return
    dispatch({ type: 'SELECT_QUESTION', payload: question })
    navigate('/question');
  }

  const addQuestionLike = e => {
    if(!user || questionLikes.includes(user)) return;
    dispatch({ type: 'ADD_QUESTION_LIKE', user, id: question.id })
  }

  const addQuestionDislike = e => {
    if(!user || questionDislikes.includes(user)) {
      return console.log('Ili nisi ulogovan ili si već dislajkovao.')
    };
    dispatch({ type: 'ADD_QUESTION_DISLIKE', user, id: question.id })
  }

  const deleteQuestion = (e) => {
    if(!user) return;
    dispatch({ type: 'DELETE_QUESTION', id: question.id })
  }

  return (
    <div className="card border-success mb-3">
      <div style={{fontSize: '0.8rem'}} className="bg-white card-header d-flex justify-content-between">
        {author && <span className="me-2 text-primary">{author.name || 'No name'}</span>}
        <span className="text-secondary">{formatedDate}</span>
        {question.author === user && <div style={{color: '#808B96'}} className="ms-auto">
          <span onClick={deleteQuestion}>
            <TiDeleteOutline className="fs-4 ms-3" />
          </span>
        </div>}
      </div>
      <div className="card-body">
        <p className="card-text">{question.text}</p>
      </div>
      <div className="card-footer d-flex justify-content-around">
        <span
          onClick={addQuestionLike}
          className='text-primary'>
          <BsHandThumbsUp className="me-1" />
          {`(${question.likes.length})`}
        </span>
        <span onClick={clickQuestionHandler} className='text-warning'>
          <BsChatLeft className="me-1" />
          {`(${question.answers.length})`}
        </span>
        <span 
          onClick={addQuestionDislike}
          className='text-danger'>
          <BsHandThumbsDown className="me-1" />
          {`(${question.dislikes.length})`}
        </span>
      </div>
    </div>
  )
}

export default Question
