import { get } from '../common/request';
import { IAuth0AuthorizationApiGroup, IAuth0AuthorizationApiRole } from '../interfaces';

export interface Input {
  groupId: string;
}

type Response = {
  group: IAuth0AuthorizationApiGroup,
  role: IAuth0AuthorizationApiRole,
}[];

export function getNestedGroupRoles(extensionUrl: string, accessToken: string) {
  return (input: Input) => {
    return get<Response>({
      accessToken,
      url: `${extensionUrl}/groups/${input.groupId}/roles/nested`,
    });
  }
}
