import React from 'react';
import { Dialog } from '@headlessui/react';
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
    <Dialog
      open
      onClose={close}
      className="w-screen h-screen flex  justify-center items-center pointer-events-auto"
    >
      <Dialog.Panel>
        {children}
      </Dialog.Panel>
    </Dialog>
  );
};
