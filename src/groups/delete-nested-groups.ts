import { del } from '../common/request';
import { IAuth0AuthorizationApiGroup } from '../interfaces';

export interface Input {
  groupId: string;
  nestedGroupIds: string[];
}

type Response = IAuth0AuthorizationApiGroup[];

export function deleteNestedGroups(extensionUrl: string, accessToken: string) {
  return (input: Input): Promise<Response> => {
    return del({
      accessToken,
      body: input.nestedGroupIds,
      url: `${extensionUrl}/groups/${input.groupId}/nested`,
    });
  }
}
