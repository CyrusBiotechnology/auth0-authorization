import { get } from '../common/request';
import { IAuth0AuthorizationApiPermission } from '../interfaces';

export interface Response {
  permissions: IAuth0AuthorizationApiPermission[];
  total: number;
}

export function getPermissions(authorizationExtensionUrl: string, accessToken: string) {
  return () => {
    return get<Response>({
      accessToken,
      url: `${authorizationExtensionUrl}/permissions`,
    });
  }
}
