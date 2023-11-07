import './App.css';
import Navigation from './components/Navigation';
import RegionSelector from './components/RegionSelector';
import SearchForm from './components/SearchForm';

function App() {
  return (
    <div className="App">
      <Navigation />
      <SearchForm />
      <RegionSelector />
    </div>
  );
}

export default App;
