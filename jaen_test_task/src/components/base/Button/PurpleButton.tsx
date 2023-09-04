import React, { ButtonHTMLAttributes } from 'react';

export const PurpleButton: React.FC<
ButtonHTMLAttributes<HTMLButtonElement>> = ({ className, ...props }) => {
  return (
    <button
      className={[`hover:cursor-pointer h-6 bg-primary
       bg-gradient-to-r from-primary to-[#7877D7] rounded-md text-md
        text-sky-100 border border-base-100 w-min py-1
        px-4 flex flex-row items-center justify-center space-x-1 `, className].join(' ')}
      {...props}
    />
  );
};
