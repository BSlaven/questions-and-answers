const Question = ({ question }) => {
  
  return (
    <div className="card border-success">
      <div className="card-body">
        <p className="card-text">{question.text}</p>
      </div>
      <div className="card-footer text-muted">jedna footer</div>
    </div>
  )
}

export default Question
