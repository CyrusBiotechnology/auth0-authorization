import { get } from '../common/request';
import { IAuth0AuthorizationApiRole } from '../interfaces';

export interface Input {
  roleId: string;
}

export function getRole(authorizationExtensionUrl: string, accessToken: string) {
  return (input: Input) => {
    return get<IAuth0AuthorizationApiRole>({
      accessToken,
      url: `${authorizationExtensionUrl}/roles/${input.roleId}`,
    });
  }
}
