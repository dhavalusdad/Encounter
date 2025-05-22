import { useCallback, useState } from 'react';
import DialInput from './DialInput';
import DialPadKeys from './DialPadKeys';
import CallOptions from './CallOptions';

const DialPad = ({ phoneNumber }: { phoneNumber?: string }) => {
  const [destinationNumber, setDestinationNumber] = useState(phoneNumber);

  const [isDialKeysVisible] = useState(true);

  const handleDigitClick = useCallback(
    (value: string) => () => {
      setDestinationNumber((prevNumber) =>
        (prevNumber ?? '').concat(value)
      );
    },
    []
  );

    const handleBackspaceClick = () => {
    setDestinationNumber((prevNumber) =>
      (prevNumber ?? '').slice(0, -1)
    );
  };

 return <>
    <div
      className={
        'flex flex-col item-center justify-around h-screen w-[280px] mx-auto gap-1.5 h-full overflow-hidden'
      }>
      <div className="relative flex flex-col gap-4 w-full">
        <DialInput
          destinationNumber={destinationNumber ?? ''}
          setDestinationNumber={setDestinationNumber}
        />
      </div>
      <div
        className={` transition-all relative ease-in-out duration-300 ${
          isDialKeysVisible ? 'top-0' : 'top-full -z-10'
        }`}>
        <DialPadKeys handleDigitClick={handleDigitClick} />
      </div>
       <CallOptions handleBackspaceClick={handleBackspaceClick}/>
      {/* call Options */}
    </div>
  </>;
};

export default DialPad;
