import './App.css';
import { Link, Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home';
import Movie from './pages/Movie';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/movie/:id' element={<Movie />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
