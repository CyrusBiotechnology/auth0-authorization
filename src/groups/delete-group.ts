import { del } from '../common/request';

export interface Input {
  groupId: string;
}

export function deleteGroup(extensionUrl: string, accessToken: string) {
  return (input: Input) => {
    return del<void, void>({
      accessToken,
      url: `${extensionUrl}/groups/${input.groupId}`,
    });
  }
}
