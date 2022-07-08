const URL = "https://rw-health-backend.herokuapp.com/";

export async function getLogin(email, password) {
  const result = await fetch(
    `${URL}/login?email=${email}&password=${password}`
  );
  const json = await result.json();
  return json;
}

export async function registerUser(email, password) {
  const userDetails = { email: email, password: password };
  const result = await fetch(`${URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userDetails),
  });
  const json = await result.json();
  return json;
}

export async function getProfile() {
  const result = await fetch(`${URL}/profile`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await result.json();
  return json;
}

export async function startSession(userID) {
  const user = { userID: userID };
  const result = await fetch(`${URL}/sessions`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  const json = await result.json();
  await checkSessions();
  return json;
}

export async function endSession() {
  const result = await fetch(`${URL}/sessions`, {
    method: "DELETE",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
  });
  const json = await result.json();
  return json;
}

export async function checkSessions() {
  const result = await fetch(`${URL}/sessions`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await result.json();
  return json.response;
}
