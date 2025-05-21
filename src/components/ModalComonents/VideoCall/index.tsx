import { Modal } from '@encounter/common';

const VideoCall = ({
  setIsShowVideoCall,
  isShowVideoCall,
  title
}: {
  isShowVideoCall: boolean;
  setIsShowVideoCall: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
}) => {
  return (
    <Modal
      isOpen={isShowVideoCall}
      onClose={() => setIsShowVideoCall(false)}
      title={title}
      width="xxs"
      parentClassName="!bg-BlackLight-opacity-54"
      titleClassname="!text-Gray-900 truncate"
    >
      <div className="p-4 space-y-2 text-center">
        <h2 className="text-lg font-semibold text-Gray-900">Patient Video Call</h2>
        <p className="text-sm text-Gray-700">
          Video call feature is not implemented yet.
        </p>
      </div>
    </Modal>
  );
};

export default VideoCall;
