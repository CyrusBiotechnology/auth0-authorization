import { put } from '../common/request';
import { IAuth0AuthorizationApiGroup } from '../interfaces';

export type Input = IAuth0AuthorizationApiGroup;

// Everything in group object except _id
export type IRequestBody = Pick<IAuth0AuthorizationApiGroup, Exclude<keyof IAuth0AuthorizationApiGroup, '_id'>>;

export function updateGroup(extensionUrl: string, accessToken: string) {
  return (input: Input) => {
    return put<IRequestBody, IAuth0AuthorizationApiGroup>({
      accessToken,
      body: {
        name: input.name,
        description: input.description,
      },
      url: `${extensionUrl}/groups/${input._id}`,
    });
  }
}
