import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import SearchPage from './pages/SearchPage';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SearchPage/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
