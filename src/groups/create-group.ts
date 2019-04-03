import { create } from '../common/request';
import { IAuth0AuthorizationApiGroup } from '../interfaces';

// Everything in group object except _id
export type Input = Pick<IAuth0AuthorizationApiGroup, Exclude<keyof IAuth0AuthorizationApiGroup, '_id'>>;

export function createGroup(extensionUrl: string, accessToken: string) {
  return (input: Input) => {
    return create<Input, IAuth0AuthorizationApiGroup>({
      accessToken,
      body: {
        name: input.name,
        description: input.description,
      },
      url: `${extensionUrl}/groups`,
    });
  }
}
