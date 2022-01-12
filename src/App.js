import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { auth } from './firebase/firebase-setup';
import MainNav from './layouts/Navbar.js';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import QuestionPage from './pages/QuestionPage';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(!user) {
        dispatch({ type: 'USER_OUT' })
      } else {
        dispatch({ type: 'USER_IN', id: user.uid })
      }
    })

    return unsubscribe
  }, [dispatch])

  useEffect(() => {
    dispatch({ type: 'FETCH_ALL_QUESTIONS' })
  }, [dispatch]);

  useEffect(() => {
    dispatch({ type: 'FETCH_USERS'})
  }, [dispatch]);
  
  return (
    <div style={{backgroundColor: '#FDFEFE', minHeight: '100vh'}}>
      <BrowserRouter>
        <MainNav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/question/:id" element={<QuestionPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;