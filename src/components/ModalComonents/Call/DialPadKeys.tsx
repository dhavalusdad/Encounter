import React, { type ReactElement, useRef, useState } from 'react';

export type DialKey = {
  digit: string;
  subset: string;
};


export const dialPadConfig: {
  digit: string;
  subset: string;
}[] = [
  { digit: '1', subset: '' },
  { digit: '2', subset: 'ABC' },
  { digit: '3', subset: 'DEF' },
  { digit: '4', subset: 'GHI' },
  { digit: '5', subset: 'JKL' },
  { digit: '6', subset: 'MNO' },
  { digit: '7', subset: 'PQRS' },
  { digit: '8', subset: 'TUV' },
  { digit: '9', subset: 'WXYZ' },
  { digit: '*', subset: '' },
  { digit: '0', subset: '+' },
  { digit: '#', subset: '' }
];


export type DialPadKeysProps = {
  handleDigitClick: (value: string) => () => void;
};

const DialPadKeys: React.FC<DialPadKeysProps> = ({
  handleDigitClick
}: DialPadKeysProps): ReactElement => {
  const holdTimeoutRef = useRef<number | null>(null);
  const [isHolding, setIsHolding] = useState(false);

  const handleZeroMouseDown = () => {
    holdTimeoutRef.current = window.setTimeout(() => {
      setIsHolding(true);
      handleDigitClick('+')();
    }, 400);
  };

  const handleZeroMouseUp = () => {
    if (holdTimeoutRef.current) {
      clearTimeout(holdTimeoutRef.current);
    }
    if (!isHolding) {
      handleDigitClick('0')();
    }
    setIsHolding(false);
  };

  return (
    <div className="grid grid-cols-3">
      {dialPadConfig.map((dialKey: DialKey): ReactElement => {
        if (dialKey.digit === '0') {
          return (
            <button
              className="select-none flex flex-col justify-center items-center cursor-pointer text-[1.2rem] w-[50px] h-[50px] mx-auto my-2 bg-[rgba(211,_211,_211,_0.1)] border-[1px] border-[rgba(211,211,211,1)] rounded-full"
              onMouseDown={handleZeroMouseDown}
              onMouseUp={handleZeroMouseUp}
              key={dialKey.digit}>
              {dialKey.digit}
              {dialKey.subset && (
                <div className="text-[grey] text-[0.5rem] font-semibold h-3">
                  {dialKey.subset}
                </div>
              )}
            </button>
          );
        }

        // Default behavior for other buttons
        return (
          <button
            className="select-none flex flex-col justify-center items-center cursor-pointer text-[1.2rem] w-[50px] h-[50px] mx-auto my-2 bg-[rgba(211,_211,_211,_0.1)] border-[1px] border-[rgba(211,211,211,1)] rounded-full"
            onClick={handleDigitClick(dialKey.digit)}
            key={dialKey.digit}>
            {dialKey.digit}
            {dialKey.subset && (
              <div className="text-[grey] text-[0.5rem] font-semibold h-3">
                {dialKey.subset}
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default DialPadKeys;
