import { getLogin, startSession, checkSessions } from "./Networking";
import { useState } from "react";
import "../App.css";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email, password);
    const loginCheck = await getLogin(email, password);
    if (loginCheck.response === "User Found") {
      await startSession(loginCheck.user.id);
      console.log(loginCheck.user.id);
      console.log("sessions should be started");
      console.log(await checkSessions());
      props.goToHome();
    } else {
      console.log(loginCheck.response);
    }
  };

  function assignEmail(email) {
    setEmail(email);
  }

  function assignPassword(password) {
    setPassword(password);
  }

  return (
    <div className="main-page">
      <div className="login-box">
        <div className="left-image"></div>
        <form>
          <h4>Sign in</h4>
          <label htmlFor="email"> email: </label>
          <input
            id="email"
            label="email"
            name="email"
            placeholder="email"
            autoFocus
            onChange={(e) => assignEmail(e.target.value)}
          />
          <label htmlFor="password"> password: </label>
          <input
            name="password"
            label="Password"
            type="password"
            id="password"
            placeholder="password"
            onChange={(e) => assignPassword(e.target.value)}
          />
          <button onClick={handleSubmit}>Sign In</button>
          <p
            onClick={props.goToRegister}
            style={{ color: "rgba(113, 174, 244, 0.99)", cursor: "pointer" }}
          >
            Don't have an account? Sign Up
          </p>
        </form>
      </div>
    </div>
  );
}
