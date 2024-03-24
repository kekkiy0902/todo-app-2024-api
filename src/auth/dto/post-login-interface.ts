export interface PostLoginRequest {
  user_id: string;
  password: string;
}

export interface PostLoginResponse {
  user_id: string;
  user_name: string;
  company_id: number;
  access_token: string;
}
