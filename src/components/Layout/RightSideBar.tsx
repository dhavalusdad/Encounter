import { Button } from '@encounter/common';
import Call from '../ModalComonents/Call';
import { useState } from 'react';
import Chat from '../ModalComonents/Chat';
import { ROUTES } from '@encounter/constant/routePath';
import Order from '../ModalComonents/Order';
import VideoCall from '../ModalComonents/VideoCall';

const RightSideBar = () => {
  const [isShowCall, setIsShowCall] = useState<boolean>(false);
  const [isShowChat, setIsShowChat] = useState<boolean>(false);
  const [isShowOrder, setIsShowOrder] = useState<boolean>(false);
  const [isShowVideoCall, setIsShowVideoCall] = useState<boolean>(false);
  return (
    <div className="toolbox p-4 bg-white rounded-2xl shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        Patient Tools
      </h3>
      <div className="button-row grid grid-cols-3 gap-4 mb-6">
        <Button
          className="min-h-50px py-3 px-6 rounded-lg w-full sm:w-auto !bg-Primary-500 text-white"
          variant="filled"
          onClick={() => {
            window.open(ROUTES.PATIENT_CALL.path, "_blank", 'left=100,top=100,width=320,height=600');
          }}
          title="Patient Call"
        />
        <Button
          className="min-h-50px py-3 px-6 rounded-lg w-full sm:w-auto !bg-Primary-500 text-white"
          variant="filled"
          title="Patient Chat"
          onClick={() => {
             window.open(ROUTES.PATIENT_CHAT.path, "_blank", 'left=100,top=100,width=450,height=780');
          }}
        />
        <Button
          className="min-h-50px py-3 px-6 rounded-lg w-full sm:w-auto !bg-Primary-500 text-white"
          variant="filled"
          title="Patient Video Call"
          onClick={() => setIsShowVideoCall(true)}
        />
      </div>

      <h3 className="text-lg font-semibold mb-4 text-gray-800">Doctor Tools</h3>
      <div className="button-row grid grid-cols-3 gap-4">
        <Button
          className="min-h-50px py-3 px-6 rounded-lg w-full sm:w-auto !bg-Primary-500 text-white"
          variant="filled"
          title="Doctor Call"
          onClick={() => { window.open(ROUTES.DOCTOR_CALL.path, "_blank", 'left=100,top=100,width=320,height=600');}}
        />
        <Button
          className="min-h-50px py-3 px-6 rounded-lg w-full sm:w-auto !bg-Primary-500 text-white"
          variant="filled"
          title="Doctor Chat"
          onClick={() => { window.open(ROUTES.DOCTOR_CHAT.path, "_blank", 'left=100,top=100,width=450,height=780');}}
        />
        <Button
          className="min-h-50px py-3 px-6 rounded-lg w-full sm:w-auto !bg-Primary-500 text-white"
          variant="filled"
          title="Orders"
          onClick={() => setIsShowOrder(true)}
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
      {isShowOrder && (
        <Order
          isShowOrder={isShowOrder}
          setIsShowOrder={setIsShowOrder}
          title="Order"
        />
      )}
      {isShowVideoCall && (
        <VideoCall
          isShowVideoCall={isShowVideoCall}
          setIsShowVideoCall={setIsShowVideoCall}
          title="Video Call"
        />
      )}
    </div>
  );
};
export default RightSideBar;
