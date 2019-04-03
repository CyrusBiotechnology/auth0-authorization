import { get } from '../common/request';
import { IAuth0AuthorizationApiGroup } from '../interfaces';

export interface Response {
  groups: IAuth0AuthorizationApiGroup[];
  total: number;
}

export function getGroups(extensionUrl: string, accessToken: string) {
  return () => {
    return get<Response>({
      accessToken,
      url: `${extensionUrl}/groups`,
    });
  }
}
