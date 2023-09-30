import config from "./config";

export function getUserToken() {
  return localStorage.getItem(config.authKeyName);
}

export function setUserToken(securityToken: string) {
  localStorage.setItem(config.authKeyName, securityToken);
}
