import { get } from '../common/request';
import { IAuth0AuthorizationApiUser } from '../interfaces';

export interface Input {
  groupId: string;
}

export interface Response {
  users: IAuth0AuthorizationApiUser[];
  total: number;
}

export interface Options {
  page: number;
  perPage: number;
}

const defaultOptions: Options = {
  page: 0,
  perPage: 25,
};

export function getGroupMembers(extensionUrl: string, accessToken: string) {
  return (input: Input, options?: Options): Promise<Response> => {
    options = {
      ...defaultOptions,
      ...options
    };
    const getPaged: any = function(page: number) {
      return get({
        accessToken,
        url: `${extensionUrl}/groups/${input.groupId}/members`,
        queryParams: {
          page: `${page}`,
          per_page: `${options.perPage}`
        }
      }).then((result: any) => {
        const total_pages = Math.ceil(result.total / options.perPage);
        if (total_pages > page + 1) {
          return getPaged(page + 1).then((p: any) => {
            result.users = result.users.concat(p.users);
            return result;
          })
        }
        return result;
      });
    };
    return getPaged(0);

  }
}
