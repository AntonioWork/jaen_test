import { useGetGroupByIdQuery } from '../api';

export const useJoinToGroup = ({
  groupId,
}: { groupId: string }) => {
  const isUserCanJoin = !useGetGroupByIdQuery(groupId)?.isPrivate || false;
  const applyToGroup = () => {

  };
  const joinToGroup = () => {

  };
  return {
    isUserCanJoin,
    applyToGroup,
    joinToGroup,
  };
};
