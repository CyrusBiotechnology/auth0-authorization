import { del } from '../common/request';

export interface Input {
  permissionId: string;
}

export function deletePermission(authorizationExtensionUrl: string, accessToken: string) {
  return (input: Input) => {
    return del<void, void>({
      accessToken,
      url: `${authorizationExtensionUrl}/permissions/${input.permissionId}`,
    });
  }
}
