export interface Credential {
  email: string;
  password: string;
}

export interface User {
  logged: boolean;
  credentials: Credential;
  pseudo?: string;
  token?: string;
  loggedMessage?: string;
  error?: string;
  loading: boolean;
}

export interface UserData {
  pseudo: string;
  token: string;
  loadding: boolean;
}
