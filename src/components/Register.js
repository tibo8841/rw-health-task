import { registerUser } from "./Networking";

export default function Register() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get("username"),
      password: data.get("password"),
      confirmPassword: data.get("confirm-password"),
    });
    if (data.get("password") === data.get("confirm-password")) {
      const registerCheck = await registerUser(
        data.get("username"),
        data.get("password")
      );
      if (registerCheck.response === "username already exists") {
        console.log(registerCheck.response);
      } else {
        console.log(registerCheck.response);
      }
    } else {
      console.log("passwords do not match");
    }
  };

  return (
    <div>
      <h1>Sign up</h1>
      <form>
        <label htmlFor="username"> username: </label>
        <input id="username" name="username" />
        <label htmlFor="password"> password: </label>
        <input name="password" type="password" id="password" />
        <label htmlFor="confirm-password"> confirm password: </label>
        <input name="confirm-password" type="password" id="confirm-password" />
        <button onClick={handleSubmit}>Sign Up</button>
      </form>
      <a href="login">Already have an account? Sign in</a>
    </div>
  );
}
