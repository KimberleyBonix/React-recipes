export interface Credential {
  email: string;
  password: string;
}

export interface User {
  logged: boolean;
  credentials: Credential;
  pseudo: string;
  token: null | string;
  loggedMessage: string;
}
