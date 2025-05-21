import { Modal } from '@encounter/common';

const Order = ({
  setIsShowOrder,
  isShowOrder,
  title
}: {
  isShowOrder: boolean;
  setIsShowOrder: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
}) => {
  const orders = [
    "CBC with differential",
    "Chest X-Ray",
    "EKG",
    "COVID-19 PCR Test"
  ];

  return (
    <Modal
      isOpen={isShowOrder}
      onClose={() => setIsShowOrder(false)}
      title={title}
      width="xxs"
      parentClassName="!bg-BlackLight-opacity-54"
      titleClassname="!text-Gray-900 truncate"
    >
      <div className="p-4">
        <ul className="space-y-3">
          {orders.map((order, index) => (
            <li key={index} className="flex items-center">
              <span className="text-green-500 mr-2">✔</span>
              <span className="text-Gray-900">{order}</span>
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};

export default Order;