
import './App.css';
import Home from './components/Home';
import { SearchProvider } from './components/SearchContextApi';

function App() {
  
  return (
    <div>
      <SearchProvider>
        <Home />
      </SearchProvider>
    </div>
  )
}

export default App;
