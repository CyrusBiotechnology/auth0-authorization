import { get } from '../common/request';
import { IAuth0AuthorizationApiPermission } from '../interfaces';

export interface Input {
  permissionId: string;
}

export function getPermission(authorizationExtensionUrl: string, accessToken: string) {
  return (input: Input) => {
    return get<IAuth0AuthorizationApiPermission>({
      accessToken,
      url: `${authorizationExtensionUrl}/permissions/${input.permissionId}`,
    });
  }
}
