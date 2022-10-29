import config from "./auth_config";

async function createClient() {
  let auth0Client = await createAuth0Client({
    domain: config.domain,
    client_id: config.clientId
  });
  return auth0Client;
}

async function loginWithPopup(client, options) {
  try {
    await client.loginWithPopup(options).then(() => window.location = "http://localhost:8080/lessons/ch1");
  } catch (e) {
    // eslint-disable-next-line
    console.error(e);
  }
}

function logout(client) {
  return client.logout().then(() => window.location = "http://localhost:8080/logout/");
}

const auth = {
  createClient,
  loginWithPopup,
  logout
};

export default auth;