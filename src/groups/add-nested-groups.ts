import { patch } from '../common/request';

export interface Input {
  groupId: string;
  nestedGroupIds: string[];
}

type IRequestBody = string[];

export function addNestedGroups(extensionUrl: string, accessToken: string) {
  return (input: Input) => {
    return patch<IRequestBody, void>({
      accessToken,
      body: input.nestedGroupIds,
      url: `${extensionUrl}/groups/${input.groupId}/nested`,
    });
  }
}
