import React from 'react';
import { PopUpContainer } from '../Popup/PopUpContainer';
import { IPopup } from '../../context';

export const EngageApplyPopup: React.FC<IPopup<any>> = (props) => {
  return (
    <PopUpContainer name={props?.name}>
      <div className="w-1/4 h-1/4 bg-warning">
        content
      </div>
    </PopUpContainer>
  );
};
