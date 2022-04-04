import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './pages';
import './fonts/Gilmer-Font/GilmerRegular.otf';

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
