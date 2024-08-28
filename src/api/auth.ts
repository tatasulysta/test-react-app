import { ApiResult, queryFetch } from './common';

export interface LoginModel {
  accessToken: string;
}

export type LoginInput = {
  email: string;
  //   min six char
  password: string;
};

export type RegisterInput = {
  name: string;
  email: string;
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

export const useRegister = async (
  body: RegisterInput,
): Promise<ApiResult<any>> =>
  await queryFetch({
    endpoint: 'register',
    method: 'POST',
    body: body,
  });
