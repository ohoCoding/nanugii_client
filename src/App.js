import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router';
import Main from './pages/Main';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
        <Routes>
        <Route path="/" element={<Main/>} />
        </Routes>
    </BrowserRouter>
  
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
