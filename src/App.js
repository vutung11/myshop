import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Content from './pages/Content';
import Home from './pages/Home';
import Page404 from './pages/Page404';


import './App.css';
import Product from './pages/Product';
import Users from './pages/Users';
import Header from './components/Header';

function App() {
  


    

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Content' element={<Content/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/product/:name/:id' element={<Product/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='*' element={<Page404/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
  
}

export default App;
