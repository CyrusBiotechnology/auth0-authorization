import { get } from '../common/request';
import { IAuth0AuthorizationApiUser } from '../interfaces';

export interface Response {
  start: number;
  limit: number;
  length: number;
  users: IAuth0AuthorizationApiUser[];
  total: number;
}

export interface Options {
  page: number;
  perPage: number;
}

const getUsersDefaultOptions: Options = {
  page: 1,
  perPage: 25,
};

export function getUsers(authorizationExtensionUrl: string, accessToken: string) {
  return (options?: Options) => {
    options = {
      ...getUsersDefaultOptions,
      ...options
    };
    return get<Response>({
      accessToken,
      url: `${authorizationExtensionUrl}/users`,
      queryParams: {
        page: `${options.page}`,
        per_page: `${options.perPage}`,
      }
    });
  }
}
