import { useState } from 'react';
import './App.css';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import Detail from './components/Detail';
import Update from './components/Update';

//import PersonForm from './components/PersonForm';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/home" default element={<Main/>} />
            <Route path="/people/:id" element={<Detail/>} />
            <Route path="/people/edit/:id" element={<Update/>} />
            <Route path="/*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
