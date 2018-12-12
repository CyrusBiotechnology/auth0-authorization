import { get } from '../common/request';
import { IAuth0AuthorizationApiGroup } from '../interfaces';

export interface Input {
  groupId: string;
}

type Response = IAuth0AuthorizationApiGroup[];

export function getNestedGroups(extensionUrl: string, accessToken: string) {
  return (input: Input): Promise<Response> => {
    return get({
      accessToken,
      url: `${extensionUrl}/groups/${input.groupId}/nested`,
    });
  }
}
