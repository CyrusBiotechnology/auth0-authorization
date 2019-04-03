import { get } from '../common/request';
import { IAuth0AuthorizationApiRole } from '../interfaces';

export interface Response {
  roles: IAuth0AuthorizationApiRole[];
  total: number;
}

export function getRoles(authorizationExtensionUrl: string, accessToken: string) {
  return () => {
    return get<Response>({
      accessToken,
      url: `${authorizationExtensionUrl}/roles`,
    });
  }
}
