export interface PostLoginRequest {
  user_id: string;
  password: string;
}

export interface PostLoginResponse {
  user_id: string;
  company_id: number;
  name: string;
  access_token: string;
}
