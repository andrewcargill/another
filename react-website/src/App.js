import './App.css';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Header from './pages/Header';
import Footer from './pages/Footer';


function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      </div>
  );
}

export default App;
