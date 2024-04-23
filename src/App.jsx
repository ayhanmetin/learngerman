import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import WordApp from './components/WordApp';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Favorites from './components/Favorites';
import Mix from './Categories/Mix';
import Bureaucracy from './Categories/Bureaucracy';
import Business from './Categories/Business';
import Advanced from './Categories/Advanced';
import Living from './Categories/Living';

function App() {
  return (
    <>
      <div
        className='bg-transparent container col-12'
        style={{ minHeight: '100vh' }}
      >
        <div className='container bg-transparent'>
          <div className='row justify-content-center mt-0'>
            <div className='col-12 col-md-8 mt-0 '>
              <div className='mt-0 mb-5'>
                <Nav />
              </div>
              <Routes>
                <Route path='/' element={<WordApp />} />
                <Route path='/home' element={<WordApp />} />
                <Route path='/mix' element={<Mix />} />
                <Route path='/business' element={<Business />} />

                <Route path='/bureaucracy' element={<Bureaucracy />} />
                <Route path='/advanced' element={<Advanced />} />

                <Route path='/living' element={<Living />} />

                <Route path='/favorites' element={<Favorites />} />
              </Routes>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
