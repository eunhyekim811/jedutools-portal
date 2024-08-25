import Keycloak from "https://cdn.jsdelivr.net/npm/keycloak-js@25.0.4/+esm";
const keycloak = new Keycloak({
  url: "https://keycloak.jins.page",
  realm: "jedutools",
  clientId: "jedutools-portal",
});

export async function initialize() {
  try {
    const authenticated = await keycloak.init({ onLoad: "login-required" });
    console.log(
      `User is ${authenticated ? "authenticated" : "not authenticated"}`
    );
  } catch (error) {
    document.write("Failed to initialize adapter", error);
    console.error("Failed to initialize adapter:", error);
  }
}

export const logout = keycloak.logout;
export const loadUserProfile = keycloak.loadUserProfile;
