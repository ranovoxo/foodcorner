import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/register/Register';


function App() {
  return (
    <main>
      
      <Router>
        <div className="App">
          Welcome to the Food Corner!
        </div>
        <Routes>
            <Route exact path = '/' element = {<Login/>} />
            <Route exact path = '/Register' element = {<Register/>} />
        </Routes>
      </Router>

    </main>
  );
}

export default App;
