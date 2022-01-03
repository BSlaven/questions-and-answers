import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainNav from './layouts/Navbar.js';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Question from './pages/Question';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <MainNav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/questions/:id" element={<Question />} />
          <Route path="/users/:id" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;