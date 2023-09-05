import React from 'react';
import { usePopup } from '../../context';

export const PopUpContainer: React.FC<{
  name: string
  children?: React.ReactNode
}> = ({ name, children }) => {
  const { closePopup } = usePopup().actions;

  const close = () => {
    closePopup({ name });
  };

  return (
    <div
      className="w-screen h-screen flex justify-center items-center pointer-events-auto"
      onClick={close}
    >
      {children}
    </div>
  );
};
