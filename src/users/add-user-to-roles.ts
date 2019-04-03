import { patch } from '../common/request';

export interface Input {
  userId: string;
  roleIds: string[];
}

type IRequestBody = string[];

export function addUserToRoles(authorizationExtensionUrl: string, accessToken: string) {
  return (input: Input) => {
    return patch<IRequestBody, void>({
      accessToken,
      body: input.roleIds,
      url: `${authorizationExtensionUrl}/users/${input.userId}/roles`,
    });
  }
}
