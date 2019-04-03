import { del } from '../common/request';

export interface Input {
  groupId: string;
  roleIds: string[];
}

type IRequestBody = string[];

export function deleteGroupRoles(extensionUrl: string, accessToken: string) {
  return (input: Input) => {
    return del<IRequestBody, void>({
      accessToken,
      body: input.roleIds,
      url: `${extensionUrl}/groups/${input.groupId}/roles`,
    });
  }
}
