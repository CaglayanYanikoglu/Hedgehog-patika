import logo from './logo.svg';
import './styles/App.scss';
import { Home, UseCallbackExample, BatchingExample } from './containers';

function App() {
  return (
    <div className="App">
      {/* <UseCallbackExample /> */}
      {/* <Home /> */}
      {/* <div style={{ width: '200px', height: '200px', background: 'lightblue' }}>Center me</div> */}
      <BatchingExample />
    </div>
  );
}

export default App;
