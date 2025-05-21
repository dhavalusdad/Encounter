import React, { type ReactElement } from 'react';

export interface DialInputProps {
  destinationNumber: string;
  setDestinationNumber: (value: string) => void;
}

const DialInput: React.FC<DialInputProps> = ({
  
  destinationNumber,
  setDestinationNumber
}: DialInputProps): ReactElement => {
  return (
    <div className="relative">
    
      <div className="flex justify-between items-center">
        <input
          type="text"
          disabled
          placeholder="+1"
          value={'+1'}
          className="border p-1 h-12 rounded w-[50px] text-center text-[1.6rem] text-[grey] text-xl"
        />
        <div className="justify-center text-[1.8rem] h-12 px-[0] relative inline-flex items-center">
          <input
            value={destinationNumber}
            className="border w-[220px] p-1 h-12 rounded pr-[20px] text-xl"
            onChange={(e) => setDestinationNumber(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default DialInput;
