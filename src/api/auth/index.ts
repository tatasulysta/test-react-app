import { ApiResult, queryFetch } from '../common';

export interface LoginModel {
  accessToken: string;
}

export type LoginInput = {
  email: string;
  //   min six char
  password: string;
};

export const useLogin = async (
  body: LoginInput,
): Promise<ApiResult<LoginModel>> =>
  await queryFetch({
    endpoint: 'login',
    method: 'POST',
    body: body,
  });
