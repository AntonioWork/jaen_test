import { MOCK_ENGAGE_GROUPS } from '../mock';

export const useGetGroupByIdQuery = (groupId: string) => {
  return MOCK_ENGAGE_GROUPS.find((group) => group.id === groupId);
};
