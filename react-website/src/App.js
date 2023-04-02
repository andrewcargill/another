import './App.css';
import Navbar from './pages/home';
import { BrowserRouter as Router, Routes, Route} 
  from 'react-router-dom';
import About from './pages/about';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<Navbar />} />
        <Route path='/about' element={<About />} />
      </Routes>
      
      </Router>
      
  );
}

export default App;
