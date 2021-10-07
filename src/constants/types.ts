export interface IUser {
  id: string;
  username: string;
  email: string;
  fullName: string;
  // roles: string[];
}
export interface ILoginResponse {
  token: string;
  userData: IUser;
}
