import { useState } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import logo from './logo.svg';

function App() {
  const [clickCount, setClickCount] = useState(0);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the app lol
        </p>
        <Button onClick={() => setClickCount(clickCount + 1)}>
          Clicked {clickCount} times
        </Button>
      </header>
    </div>
  );
}

export default App;
