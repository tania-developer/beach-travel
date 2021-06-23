
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
function App() {
  return (
    <Router>
      <Home/>
    </Router>
  );
}

export default App;
