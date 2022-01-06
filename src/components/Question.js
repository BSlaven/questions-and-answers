import { 
  BsHandThumbsDown,
  BsHandThumbsUp,
  BsChatLeft
} from 'react-icons/bs'

const Question = ({ question }) => {

  return (
    <div className="card border-success mb-3">
      <div className="card-body">
        <p className="card-text">{question.text}</p>
      </div>
      <div className="card-footer d-flex justify-content-around">
        <span className='text-primary'>
          <BsHandThumbsUp className="me-1" />
          {`(${question.likes.length})`}
        </span>
        <span className='text-warning'>
          <BsChatLeft className="me-1" />
          {`(${question.answers.length})`}
        </span>
        <span className='text-danger'>
          <BsHandThumbsDown className="me-1" />
          {`(${question.dislikes.length})`}
        </span>
      </div>
    </div>
  )
}

export default Question
