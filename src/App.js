import logo from './assets/img/lou_bege.jpg';
// import logo from './assets/img/logo.svg';
import './App.css';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is the CV of Lou BEGE
        </p>
        <Button variant="contained">Welcome !</Button>
      </header>
    </div>
  );
}

export default App;
