const Question = () => {

  const pitanje = 'Ovo je pitanje stručnjaka strašnog koji ne zna odgovor na njega. Neka mu je sila strašna na pomoći.'
  
  return (
    <div className="card border-success mb-3">
      <div className="card-body">
        <p className="card-text">{pitanje}</p>
      </div>
      <div className="card-footer text-muted">
        
      </div>
    </div>
  )
}

export default Question
