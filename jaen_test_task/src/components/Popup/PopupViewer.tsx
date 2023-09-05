import React from 'react';
import { usePopup } from '../../context';

export const PopupViewer = () => {
  const { state } = usePopup();
  return (
    <div>
      {state.popups
        .map((Popup) => (
          <Popup.Content
            name={Popup.name}
            additionalParameter={Popup.additionalParameter}
            key={Popup.name}
          />
        ))}
    </div>
  );
};
