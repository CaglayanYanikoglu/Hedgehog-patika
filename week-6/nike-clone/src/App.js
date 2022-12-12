import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { FavoritesProvider } from './context/FavoritesContext';

function App() {
  return (
    <div className="App">
      <FavoritesProvider>
        <Home />
      </FavoritesProvider>
    </div>
  );
}

export default App;
