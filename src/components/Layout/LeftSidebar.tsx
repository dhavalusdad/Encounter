import { tabArray } from '@encounter/constant';
import { dispatchSetActiveTab } from '@encounter/redux/dispatch/encounter.dispatch';
import { encounterSelector } from '@encounter/redux/ducks/encounter';
import clsx from 'clsx';
import React from 'react';
import { useSelector } from 'react-redux';

const LeftSidebar = () => {
  const { activeTab } = useSelector(encounterSelector);
  return (
    <div className="flex flex-col gap-2 w-full">
      {tabArray.map((el) => {
        return (
          <div
            key={el.id}
            onClick={() => {
              dispatchSetActiveTab(el.id);
            }}
            className={clsx('px-3 py-2.5 truncate cursor-pointer', {
              'bg-Primary-300 text-white rounded-10px': activeTab === el.id
            })}>
            {el.tabName}
          </div>
        );
      })}
    </div>
  );
};

export default LeftSidebar;
