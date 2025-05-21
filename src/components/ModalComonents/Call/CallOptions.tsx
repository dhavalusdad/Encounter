import { Icon } from '@encounter/common';
import { type ReactElement } from 'react';

const CallOptions = ({
  handleBackspaceClick
}: {
  handleBackspaceClick: () => void;
}): ReactElement => {

  return (
    <div className="flex flex-col">
      <div className="flex justify-end bg-white z-10">
        <div className="w-1/3">
          <div
            className={`cursor-pointer my-2 mx-auto w-[50px] h-[50px] text-2xl flex items-center ${
              true ? 'bg-green-500' : 'bg-slate-400'
            } justify-center rounded-full`}>
            <Icon name="call" />
          </div>
        </div>
        <div className="w-1/3">
          <div
            className="flex justify-center items-center my-2 mx-auto w-[50px] h-[50px] text-2xl cursor-pointer"
            onClick={handleBackspaceClick}>
            <Icon name="backSpace" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallOptions;
