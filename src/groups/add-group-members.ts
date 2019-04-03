import { patch } from '../common/request';

export interface Input {
  groupId: string;
  userIds: string[];
}

type IRequestBody = string[];

export function addGroupMembers(extensionUrl: string, accessToken: string) {
  return (input: Input) => {
    return patch<IRequestBody, void>({
      accessToken,
      body: input.userIds,
      url: `${extensionUrl}/groups/${input.groupId}/members`,
    });
  }
}
