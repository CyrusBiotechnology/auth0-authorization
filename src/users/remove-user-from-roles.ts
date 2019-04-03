import { del } from '../common/request';

export interface Input {
  userId: string;
  roleIds: string[];
}

type IRequestBody = string[];

export function removeUserFromRoles(authorizationExtensionUrl: string, accessToken: string) {
  return (input: Input) => {
    return del<IRequestBody, void>({
      accessToken,
      body: input.roleIds,
      url: `${authorizationExtensionUrl}/users/${input.userId}/roles`,
    });
  }
}
