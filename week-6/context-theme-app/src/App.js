import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { ThemeProvider } from './context/ThemeContext';


function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>Context Example</h1>
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
