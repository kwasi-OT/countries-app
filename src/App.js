import './App.css';
import Countries from './components/Countries';
import Country from './components/Country';
import Navigation from './components/Navigation';
import RegionSelector from './components/RegionSelector';
import SearchForm from './components/SearchForm';
import { BrowserRouter, Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='app'>
        <Navigation />
      <Route path='/'>
        <div className='appContainer'>
          <div className='searchGroup'>
            <SearchForm />
            <RegionSelector />
          </div>
          <Countries />
        </div>
      </Route>
      <Route path='/countries/:name' children={<Country />}></Route>
      </div>
    </Router>
  );
}

export default App;
