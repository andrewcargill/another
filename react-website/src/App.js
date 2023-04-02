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
import { createContext, useState } from 'react';

export const MainContentContext = createContext();

function App() {
  const [mainContent, setMainContent] = useState('Apps Default');

  function updateMainContent(newContent) {
    setMainContent(newContent);
  }

  return (
    <MainContentContext.Provider value={{ mainContent, updateMainContent }}>
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
      </MainContentContext.Provider>
  );
}

export default App;
