import { Button } from '@encounter/common';
import Call from '../ModalComonents/Call';
import { useState } from 'react';
import Chat from '../ModalComonents/Chat';

const RightSideBar = () => {
  const [isShowCall, setIsShowCall] = useState<boolean>(false);
  const [isShowChat, setIsShowChat] = useState<boolean>(false);
  return (
    <div className="toolbox p-4 bg-white rounded-2xl shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        Patient Tools
      </h3>
      <div className="button-row grid grid-cols-3 gap-4 mb-6">
        <Button
          className="min-h-50px py-3 px-6 rounded-lg w-full sm:w-auto !bg-Primary-500 text-white"
          variant="filled"
          onClick={() => setIsShowCall(true)}
          title="Patient Call"
        />
        <Button
          className="min-h-50px py-3 px-6 rounded-lg w-full sm:w-auto !bg-Primary-500 text-white"
          variant="filled"
          title="Patient Chat"
          onClick={() => setIsShowChat(true)}
        />
        <Button
          className="min-h-50px py-3 px-6 rounded-lg w-full sm:w-auto !bg-Primary-500 text-white"
          variant="filled"
          title="Patient Video Call"
        />
      </div>

      <h3 className="text-lg font-semibold mb-4 text-gray-800">Doctor Tools</h3>
      <div className="button-row grid grid-cols-3 gap-4">
        <Button
          className="min-h-50px py-3 px-6 rounded-lg w-full sm:w-auto !bg-Primary-500 text-white"
          variant="filled"
          title="Doctor Call"
          onClick={() => setIsShowCall(true)}
        />
        <Button
          className="min-h-50px py-3 px-6 rounded-lg w-full sm:w-auto !bg-Primary-500 text-white"
          variant="filled"
          title="Doctor Chat"
          onClick={() => setIsShowChat(true)}
        />
        <Button
          className="min-h-50px py-3 px-6 rounded-lg w-full sm:w-auto !bg-Primary-500 text-white"
          variant="filled"
          title="Orders"
        />
      </div>
      {isShowCall && (
        <Call
          isShowCall={isShowCall}
          setIsShowCall={setIsShowCall}
          title="Call"
        />
      )}
       {isShowChat && (
        <Chat
          isShowChat={isShowChat}
          setIsShowChat={setIsShowChat}
          title="Chat"
        />
      )}
    </div>
  );
};
export default RightSideBar;
