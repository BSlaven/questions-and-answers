const Questions = ({ questions }) => {

  return (
    <div>
      <h3>Questions Component</h3>
      <ul>
        {questions.map(question => <li key={question.id}>{question.text}</li>)}
      </ul>
    </div>
  )
}

export default Questions
