import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login-Register/Login';
import Register from './Login-Register/Register';
import Forgot from './Login-Register/Forgot';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/forgot' element={<Forgot/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
