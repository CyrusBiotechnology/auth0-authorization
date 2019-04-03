import { put } from '../common/request';
import { IAuth0AuthorizationApiPermission } from '../interfaces';

// Make permissions optional
export type Input = IAuth0AuthorizationApiPermission;

// Keep everything in permission object except _id
export type IRequestBody = Pick<IAuth0AuthorizationApiPermission, Exclude<keyof IAuth0AuthorizationApiPermission, '_id'>>;

export function updatePermission(authorizationExtensionUrl: string, accessToken: string) {
  return (input: Input) => {
    return put<IRequestBody, IAuth0AuthorizationApiPermission>({
      accessToken,
      body: {
        name: input.name,
        description: input.description,
        applicationId: input.applicationId,
        applicationType: input.applicationType,
      },
      url: `${authorizationExtensionUrl}/permissions/${input._id}`,
    });
  }
}
