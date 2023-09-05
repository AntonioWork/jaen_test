import React from 'react';
import { PopUpContainer } from '../Popup/PopUpContainer';
import { IPopup } from '../../context';
import { useGetGroupByIdQuery } from '../../api';

export const EngageApplyPopup: React.FC<IPopup<{
  groupId: string
}>> = ({ additionalParameter, name }) => {
  const group = useGetGroupByIdQuery(additionalParameter.groupId);
  return (
    <PopUpContainer name={name}>
      <div className="">
        <div className="">
          <div className="">
            <h2 className="text-2xl text-primary pr-1"> Apply to group</h2>
            <div className="text-2xl">
              {group?.name}
            </div>
          </div>
          <div className="pt-3">
            <p className="text-neutral font-semibold text-xl mb-3">
              why should we accept you to the group?
            </p>
          </div>
          <textarea
            rows={3}
            className={`block w-full resize-none border-0 py-5 
            placeholder-gray-500 focus:ring-0 sm:text-sm bg-base-300 rounded-lg mb-2`}
          />
        </div>
      </div>
    </PopUpContainer>
  );
};
