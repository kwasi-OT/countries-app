import './App.css';
import Country from './components/Country';
import Header from './components/Header';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router className='app'>
        <Header />
      <Routes>
        <Route path='/'></Route>
        <Route path='/countries/:name' children={<Country />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
