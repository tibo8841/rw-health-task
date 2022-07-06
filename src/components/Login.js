import { getLogin, startSession, checkSessions } from "./Networking";

export default function Login() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const loginCheck = await getLogin(
      data.get("username"),
      data.get("password")
    );
    if (loginCheck.response === "User Found") {
      await startSession(loginCheck.user.id);
      console.log(loginCheck.user.id);
      console.log("sessions should be started");
      console.log(await checkSessions());
      window.location.reload(false);
    } else {
      console.log(loginCheck.response);
    }
  };

  return (
    <div>
      <h1>Sign in</h1>
      <form>
        <label htmlFor="username"> username: </label>
        <input id="username" label="username" name="username" autoFocus />
        <label htmlFor="password"> password: </label>
        <input name="password" label="Password" type="password" id="password" />
        <button onClick={handleSubmit}>Sign In</button>
      </form>
      <a href="/register">Don't have an account? Sign Up</a>
    </div>
  );
}
