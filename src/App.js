import './App.css';
import Country from './components/Country';
import Navigation from './components/Navigation';
import RegionSelector from './components/RegionSelector';
import SearchForm from './components/SearchForm';

function App() {
  return (
    <div className='app'>
      <Navigation />
      <div className='appContainer'>
        <div className='searchGroup'>
          <SearchForm />
          <RegionSelector />
        </div>
        <Country />
      </div>
    </div>
  );
}

export default App;
