import { Modal } from '@encounter/common';
import DialPad from './DialPad';

const Call = ({
  setIsShowCall,
  isShowCall,
  title
}: {
  isShowCall: boolean;
  setIsShowCall: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
}) => {
  return (
    <Modal
      isOpen={isShowCall}
      onClose={() => setIsShowCall(false)}
      title={title}
      width="xxs"
      parentClassName="!bg-BlackLight-opacity-54"
      titleClassname="!text-Gray-900 truncate">
      <DialPad />
    </Modal>
  );
};
export default Call;
