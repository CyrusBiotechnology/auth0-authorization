import { create } from '../common/request';
import { IAuth0AuthorizationApiRole } from '../interfaces';

// Remove _id and make permissions optional
export interface Input extends Pick<IAuth0AuthorizationApiRole, Exclude<keyof IAuth0AuthorizationApiRole, '_id' | 'permissions'>> {
  permissions?: string[];
}

export function createRole(authorizationExtensionUrl: string, accessToken: string) {
  return (input: Input) => {
    return create<Input, IAuth0AuthorizationApiRole>({
      accessToken,
      body: {
        name: input.name,
        description: input.description,
        applicationId: input.applicationId,
        applicationType: input.applicationType,
        permissions: input.permissions,
      },
      url: `${authorizationExtensionUrl}/roles`,
    });
  }
}
