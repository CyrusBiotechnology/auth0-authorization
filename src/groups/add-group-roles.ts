import { patch } from '../common/request';

export interface Input {
  groupId: string;
  roleIds: string[];
}

type IRequestBody = string[];

export function addGroupRoles(extensionUrl: string, accessToken: string) {
  return (input: Input) => {
    return patch<IRequestBody, void>({
      accessToken,
      body: input.roleIds,
      url: `${extensionUrl}/groups/${input.groupId}/roles`,
    });
  }
}
