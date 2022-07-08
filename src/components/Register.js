import { registerUser } from "./Networking";
import { useState } from "react";

export default function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [passwordRequirements, setPasswordRequirements] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email, password, confirmPassword);
    if (password === confirmPassword) {
      if (
        password.includes(
          "^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{10,}$"
        )
      ) {
        const registerCheck = await registerUser(email, password);
        if (registerCheck.response === "email already exists") {
          console.log(registerCheck.response);
        } else {
          console.log(registerCheck.response);
        }
      } else {
        setPasswordRequirements(false);
      }
    } else {
      setPasswordsMatch(false);
      console.log("passwords do not match");
    }
  };

  function assignEmail(email) {
    setEmail(email);
  }

  function assignPassword(password) {
    setPassword(password);
  }

  function assignConfirmPassword(password) {
    setConfirmPassword(password);
  }

  return (
    <div className="main-page">
      <div className="register-box">
        <div className="left-image"></div>
        <form>
          <h4>Sign up</h4>
          <label htmlFor="email"> email: </label>
          <input
            id="email"
            name="email"
            placeholder="email"
            onChange={(e) => assignEmail(e.target.value)}
          />
          <label htmlFor="password"> password: </label>
          <input
            name="password"
            type="password"
            id="password"
            placeholder="password"
            onChange={(e) => assignPassword(e.target.value)}
          />
          <label htmlFor="confirm-password"> confirm password: </label>
          <input
            name="confirm-password"
            type="password"
            id="confirm-password"
            placeholder="confirm password"
            onChange={(e) => assignConfirmPassword(e.target.value)}
          />
          <button onClick={handleSubmit}>Sign Up</button>
          {!passwordRequirements ? (
            <div className="message">
              <h3 style={{ color: "rgb(235, 80, 72)" }}>
                Password must contain the following:
              </h3>
              <p id="letter" className="invalid">
                A <b>lowercase</b> letter
              </p>
              <p id="capital" className="invalid">
                An <b>uppercase</b> letter
              </p>
              <p id="special-character" className="invalid">
                A <b>special character</b> (e.g. ! @ $ %)
              </p>
              <p id="length" className="invalid">
                Minimum <b>10 characters</b>
              </p>
            </div>
          ) : null}
          {!passwordsMatch ? (
            <div>
              <h3 style={{ color: "rgb(235, 80, 72)" }}>
                Passwords don't match
              </h3>
            </div>
          ) : null}
          <p
            onClick={props.goToLogin}
            style={{ color: "rgba(113, 174, 244, 0.99)", cursor: "pointer" }}
          >
            Already have an account? Sign in
          </p>
        </form>
      </div>
    </div>
  );
}
