import './App.css';
import Country from './components/Country';
import Header from './components/Header';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router className='app'>
        <Header />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/country/:name' element={<Country />} />
      </Routes>
    </Router>
  );
}

export default App;
