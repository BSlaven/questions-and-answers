import { useSelector } from 'react-redux';

import { 
  BsHandThumbsDown,
  BsHandThumbsUp
} from 'react-icons/bs'

const Answer = ({ answer }) => {

  const answerAuthor = useSelector(state => state.users.find(user => user.userId === answer.author));

  console.log(new Date(answer.createdAt.seconds))

  return (

    <div className="card border-warning border rounded mb-2">
      <div style={{fontSize: '0.8rem'}} className="bg-white card-header d-flex justify-content-between">
        <span className="text-primary">{answerAuthor.name}</span>
        <span className="text-secondary">12, 12, 2021</span>
      </div>
      <div className="card-body fs-5">
        <p>{answer.text}</p>
      </div>
      <div className="fs-6 card-footer d-flex justify-content-around">
        <span className="text-success">
          <BsHandThumbsUp /> ({answer.likes.length})
        </span>
        <span className="text-danger">
          <BsHandThumbsDown /> ({answer.dislikes.length})
        </span>
      </div>
    </div>
  )
}

export default Answer

