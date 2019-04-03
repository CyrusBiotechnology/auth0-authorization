import { patch } from '../common/request';

export interface Input {
  userId: string;
  groupIds: string[];
}

type IRequestBody = string[];

export function addUserToGroups(authorizationExtensionUrl: string, accessToken: string) {
  return (input: Input) => {
    return patch<IRequestBody, void>({
      accessToken,
      body: input.groupIds,
      url: `${authorizationExtensionUrl}/users/${input.userId}/groups`,
    });
  }
}
