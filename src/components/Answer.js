import { useState } from 'react';

import { 
  BsHandThumbsDown,
  BsHandThumbsUp,
  BsChatLeft
} from 'react-icons/bs'

const Answer = () => {

  const [ showForm, setShowForm ] = useState(true)
  
  return (

    <div className="card border-warning border rounded mb-2">
      <div style={{fontSize: '0.8rem'}} className="bg-white card-header d-flex justify-content-between">
        <span className="text-primary">Slaven</span>
        <span className="text-secondary">Dec 12, 2021</span>
      </div>
      <div className="card-body fs-5">
        <p>Ovo je odgovor na pitanje. Ovo je odgovor na pitanje</p>
      </div>
      <div className="fs-6 card-footer d-flex justify-content-around">
        <span className="text-success">
          <BsHandThumbsUp /> (12)
        </span>
        <span className="text-warning">
          <BsChatLeft /> (22)
        </span>
        <span className="text-danger">
          <BsHandThumbsDown /> (32)
        </span>
      </div>
    </div>
  )
}

export default Answer

