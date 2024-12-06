import React from 'react';
import './App.css';
import Header from './component/Header/Header.jsx';
import Navbar from './component/Navbar/Navbar.jsx';
import Footer from './component/Footer/Footer.jsx';
import Home from './component/Home/Home.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(){
  return(
    <div>
          <Header/>
<BrowserRouter>
<Navbar/>

    <div className='App'>
      <Routes>
      <Route path='/home' element={<Home/>}></Route>

        <Route path='/about' element={<h1>About_page</h1>}></Route>
        <Route path='/contact' element={<h1>contact_page</h1>}></Route>
        <Route path='/blog' element={<h1>Blog_page</h1>}></Route>
        <Route path='/gallary' element={<h1>Gallery_page</h1>}></Route>

      </Routes>
    </div>
    </BrowserRouter>
<Footer/>
    </div>

  )
}

export default App;
