export interface ApiResult<T> {
  status: string;
  message: string;
  data: T;
}

export type QueryFetchParams = {
  endpoint: string;
  method: string;
  body?: any;
  params?: { [key: string]: any };
};

const BASE_URL = process.env.REACT_APP_BASE_URL;
const LOCAL_STORE_AUTH_KEY = process.env.REACT_APP_TOKEN_KEY!;

export const setLoginToken = (bearer: string) =>
  localStorage.setItem(LOCAL_STORE_AUTH_KEY, bearer);

export const getLoginToken = () => localStorage.getItem(LOCAL_STORE_AUTH_KEY);

export const removeLoginToken = async () =>
  await localStorage.removeItem(LOCAL_STORE_AUTH_KEY);

export const logout = async () => {
  window.location.href = '/sign-in';
  removeLoginToken();
};

export const login = async (token: string) => {
  await setLoginToken(token);
  window.location.href = `/`;
};

export const catchUnauthorized = (res: Response) => {
  if (res.status === 401) {
    logout();
    return;
  }
};

export const queryFetch = async ({
  endpoint,
  method,

  body,
  params,
}: QueryFetchParams) => {
  const res = await fetch(
    `${BASE_URL}/${endpoint}` +
      `${params ? `?${new URLSearchParams(params).toString()}` : ''}`,
    {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
        // CORS_ALLOW_ALL_ORIGINS: ' True',
        Accept: 'application/json',
        Authorization: `Bearer ${await getLoginToken()}`,
      },
      body: JSON.stringify(body),
    },
  );
  const _res = await res.json();
  if (!res.ok) {
    catchUnauthorized(res);
    throw new Error(_res?.message);
  }
  return _res;
};
