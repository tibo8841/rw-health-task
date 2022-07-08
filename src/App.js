import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [isRegister, setIsRegister] = useState(false);

  function goToLogin() {
    setIsRegister(false);
    setIsLogin(true);
  }

  function goToRegister() {
    setIsLogin(false);
    setIsRegister(true);
  }

  return (
    <div className="App">
      {isLogin ? <Login goToRegister={goToRegister} /> : null}
      {isRegister ? <Register goToLogin={goToLogin} /> : null}
    </div>
  );
}

export default App;
