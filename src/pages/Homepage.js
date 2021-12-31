import { useEffect, useState } from 'react';

import Questions from '../components/Questions';
import Users from '../components/Users';

const Homepage = () => {

  const [ questions, setQuestions ] = useState([]);
  const [ users, setUsers ] = useState([]);

  const fetchQuestions = async () => {
    const res = await fetch('http://localhost:5000/questions');
    const data = await res.json();    
    setQuestions(data);
  }

  const fetchUsers = async () => {
    const res = await fetch('http://localhost:5000/users');
    const data = await res.json();    
    setUsers(data);
  }

  useEffect(() => {
    fetchUsers();
    console.log(users)
  }, []);

  useEffect(() => {
    fetchQuestions();
    console.log(questions)
  }, []);
  
  return (
    <div className="text-center">
      <h1>Ovo je Slavenov Homepage</h1>
      <Questions questions={questions} />
      <Users users={users} />
    </div>
  )
}

export default Homepage;