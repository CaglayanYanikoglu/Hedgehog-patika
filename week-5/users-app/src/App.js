import logo from './logo.svg';
import './styles/App.scss';
import { Home, UseCallbackExample } from './containers';

function App() {
  return (
    <div className="App">
      <UseCallbackExample />
      {/* <Home /> */}
      {/* <div style={{ width: '200px', height: '200px', background: 'lightblue' }}>Center me</div> */}
    </div>
  );
}

export default App;
