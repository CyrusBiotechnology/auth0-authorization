import { create } from '../common/request';
import { IAuth0AuthorizationApiPermission } from '../interfaces';

// Remove _id
export type Input = Pick<IAuth0AuthorizationApiPermission, Exclude<keyof IAuth0AuthorizationApiPermission, '_id'>>;

export function createPermission(authorizationExtensionUrl: string, accessToken: string) {
  return (input: Input) => {
    return create<Input, IAuth0AuthorizationApiPermission>({
      accessToken,
      body: {
        name: input.name,
        description: input.description,
        applicationId: input.applicationId,
        applicationType: input.applicationType,
      },
      url: `${authorizationExtensionUrl}/permissions`,
    });
  }
}
