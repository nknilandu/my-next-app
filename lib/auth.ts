export function isAuthenticated() {
  return document.cookie.includes("auth=true");
}

export function login() {
  document.cookie = "auth=true; path=/";
}

export function logout() {
  document.cookie = "auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
}
