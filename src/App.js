import './App.css';
import Countries from './components/Countries';
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
        <Countries />
      </div>
    </div>
  );
}

export default App;
