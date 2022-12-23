import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import VerifyEmail from './pages/VerifyEmail';
import ChangePass from './pages/ChangePass';
import ForgetPass from './pages/ForgetPass';
import { HashRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/verifyEmail" element={<VerifyEmail />}></Route>
          <Route path='/changePass' element={<ChangePass />}></Route>
          <Route path='/forgetPass' element={<ForgetPass />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
