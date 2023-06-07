import React from 'react';
import Header from "./components/Header";
import Footer from './components/Footer';
import Home from './pages/Home';
import Info from './pages/Info';
import News from './pages/News';
import OurCourses from './pages/OurCourses';
import About from './pages/About';
import WebDev from './pages/WebDev';
import {BrowserRouter,Route, Routes} from "react-router-dom";


import "./styles/App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/info' element={<Info />} />
          <Route path='/ourCourses' element={<OurCourses />} />
          <Route path='/about' element={<About />} />
          <Route path='/courses' element={<WebDev />} />
          <Route path='/news' element={<News />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
