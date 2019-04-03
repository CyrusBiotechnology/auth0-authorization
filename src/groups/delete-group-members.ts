import { del } from '../common/request';

export interface Input {
  groupId: string;
  userIds: string[];
}

type IRequestBody = string[];

export function deleteGroupMembers(extensionUrl: string, accessToken: string) {
  return (input: Input) => {
    return del<IRequestBody, void>({
      accessToken,
      body: input.userIds,
      url: `${extensionUrl}/groups/${input.groupId}/members`,
    });
  }
}
