import { useGetGroupByIdQuery } from '../api';
import { usePopup } from '../context';
import { POPUPS } from '../constant';
import { EngageApplyPopup } from '../components/Engage/EngageApplyPopup';

export const useJoinToGroup = ({
  groupId,
}: { groupId: string }) => {
  const isUserCanJoin = !useGetGroupByIdQuery(groupId)?.isPrivate || false;

  const { openPopup } = usePopup().actions;

  const applyToGroup = () => {
    openPopup({
      name: POPUPS.ENGAGE_APPLY,
      content: EngageApplyPopup,
    });
  };

  const joinToGroup = () => {

  };
  return {
    isUserCanJoin,
    applyToGroup,
    joinToGroup,
  };
};
