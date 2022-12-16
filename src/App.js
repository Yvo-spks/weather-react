import Weather from './Weather';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hello from React JS
        </h1> 
        <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer">
          Shecodes
        </a>
       <strong>NPM - Note package manager</strong> 
        <img src="test.png" alt="shecodes logo"/>
        <Weather city="Paris"/> 
      </header>
    </div>
  );
}

export default App;
