import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainNav from './layouts/Navbar.js';
import Homepage from './pages/Homepage';

function App() {
  return (
    <>
      <BrowserRouter>
        <MainNav />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;