const apiConfig = {
  baseUrl: "http://api.myrecharge.ng/",
  authKeyName: "x-auth-my-recharge-ng",
  apiKeyName: "x-my-recharge-api-key",
  apiKeyValue: "",
  jwtConfig: {
    userKey: "my-recharge-auth",
    secret: "",
    expirationInMinutes: 1440,
  },
};

export default apiConfig;
