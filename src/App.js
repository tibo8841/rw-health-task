import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [isRegister, setIsRegister] = useState(false);
  const [isHome, setIsHome] = useState(false);

  function goToLogin() {
    setIsRegister(false);
    setIsLogin(true);
  }

  function goToRegister() {
    setIsLogin(false);
    setIsRegister(true);
  }

  function goToHome() {
    setIsLogin(false);
    setIsHome(true);
  }

  return (
    <div className="App">
      {isLogin ? (
        <Login goToRegister={goToRegister} goToHome={goToHome} />
      ) : null}
      {isRegister ? <Register goToLogin={goToLogin} /> : null}
      {isHome ? <Home /> : null}
    </div>
  );
}

export default App;
