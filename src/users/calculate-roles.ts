import { get } from '../common/request';
import { IAuth0AuthorizationApiRole } from '../interfaces';

export interface Input {
  userId: string;
}

export function calculateRoles(authorizationExtensionUrl: string, accessToken: string) {
  return (input: Input) => {
    return get<IAuth0AuthorizationApiRole[]>({
      accessToken,
      url: `${authorizationExtensionUrl}/users/${input.userId}/roles/calculate`,
    });
  }
}
