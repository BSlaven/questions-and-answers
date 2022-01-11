import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';

import { 
  BsHandThumbsDown,
  BsHandThumbsUp
} from 'react-icons/bs'

const Answer = ({ answer }) => {

  const dispatch = useDispatch();

  const user = useSelector(state => state.loggedIn);
  const answerAuthor = useSelector(state => state.users.find(user => user.userId === answer.author));
  const answerLikes = answer.likes;
  const answerDislikes = answer.dislikes;
  const formatedDate = format(answer.createdAt, 'dd/MMM/yyyy');
  

  const addAnswerLike = e => {
    if(!user || answerLikes.includes(user)) return;
    dispatch({ 
      type: 'ADD_ANSWER_LIKE',
      user,
      id: answer.answerId,
      question: answer.question
    })
  }

  const addAnswerDislike = e => {
    if(!user || answerDislikes.includes(user)) return;
    dispatch({
      type: 'ADD_ANSWER_DISLIKE',
      user,
      id: answer.answerId,
      question: answer.question
    })
  }

  return (

    <div className="card border-warning border rounded mb-2">
      <div style={{fontSize: '0.8rem'}} className="bg-white card-header d-flex justify-content-between">
        <span className="text-primary">{answerAuthor.name}</span>
        <span className="text-secondary">{formatedDate}</span>
      </div>
      <div className="card-body fs-5">
        <p>{answer.text}</p>
      </div>
      <div className="fs-6 card-footer d-flex justify-content-around">
        <span 
          onClick={addAnswerLike}
          className="text-success">
          <BsHandThumbsUp /> ({answer.likes.length})
        </span>
        <span 
          onClick={addAnswerDislike}
          className="text-danger">
          <BsHandThumbsDown /> ({answer.dislikes.length})
        </span>
      </div>
    </div>
  )
}

export default Answer

