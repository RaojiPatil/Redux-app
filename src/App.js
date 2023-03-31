import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Adduser from './pages/adduser';
import Edituser from './pages/edituser';
import LoginPage from './pages/Login';
import SignUP from './pages/Registration';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({})
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={  user && user._id ? <Home /> : <LoginPage setUser={setUser}/>} />
      <Route exact path="/adduser" element={<Adduser />} />
      <Route exact path="/edituser/:id" element={<Edituser />} />
      <Route exact path="/Login" element={<LoginPage setUser={setUser} />} />
      <Route exact path="/Registration" element={<SignUP />} />
    </Routes>
    </div>
  );
}

export default App;
