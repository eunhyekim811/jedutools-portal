import { initialize, logout, loadUserProfile } from "./keycloak.js";

window.onload = async () => {
  await initialize();

  const profile = await loadUserProfile();
  const usernameSpan = document.getElementById("username");
  usernameSpan.classList.remove("spinner-border");
  usernameSpan.innerText = profile.username;
};
window.logout = logout;
