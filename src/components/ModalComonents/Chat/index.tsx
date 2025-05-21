import { Modal } from '@encounter/common';
import ChatApp from './ChatApp';

const Chat = ({
  setIsShowChat,
  isShowChat,
  title
}: {
  isShowChat: boolean;
  setIsShowChat: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
}) => {

  return (
    <Modal
      isOpen={isShowChat}
      onClose={() => setIsShowChat(false)}
      title={title}
      width="xxs"
      parentClassName="!bg-BlackLight-opacity-54"
      titleClassname="!text-Gray-900 truncate">
      <ChatApp />
    </Modal>
  );
};

export default Chat;
