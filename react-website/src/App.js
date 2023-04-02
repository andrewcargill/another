import './App.css';
import { BrowserRouter as Router, Routes, Route} 
  from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home';
import Header from './pages/header';
import Footer from './pages/footer';


function App() {
  return (
    <div>
      <Header />
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />

      </Routes>
      
      </Router>
      <Footer />
      </div>
  );
}

export default App;
