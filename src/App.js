import './App.css';
import Country from './components/Country';
import Navigation from './components/Navigation';
import RegionSelector from './components/RegionSelector';
import SearchForm from './components/SearchForm';

function App() {
  return (
    <div className="App">
      <Navigation />
      <SearchForm />
      <RegionSelector />
      <Country />
    </div>
  );
}

export default App;
