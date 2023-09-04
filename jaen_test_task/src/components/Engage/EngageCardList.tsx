import React from 'react';
import { IEngagementGroup } from '../../interface';
import { EngageCard } from './EngageCard';

export const EngageCardList: React.FC<{
  groups: IEngagementGroup[]
}> = ({ groups }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:p-1 lg:p-2">
      {groups.map((group) => (
        <EngageCard
          group={group}
          key={group.id}
        />
      ))}
    </div>
  );
};
