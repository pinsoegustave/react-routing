import './App.css';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import About from './Pages/About';
import ErrorPage from './Pages/ErrorPage';

function App() {
  return (
    <Router>
      <nav>
        <Link to= "/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/profile:username">Profile</Link>
        <Link>Sign In</Link>
      </nav>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/profile" element= {<Profile/>}/>
        <Route path="/about" element= {<About/>}/>
        <Route path="*" element= {<ErrorPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
