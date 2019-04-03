import { get } from '../common/request';
import { IAuth0AuthorizationApiGroup } from '../interfaces';

export interface Input {
  userId: string;
}

export function calculateGroupMemberships(authorizationExtensionUrl: string, accessToken: string) {
  return (input: Input) => {
    return get<IAuth0AuthorizationApiGroup[]>({
      accessToken,
      url: `${authorizationExtensionUrl}/users/${input.userId}/groups/calculate`,
    });
  }
}
