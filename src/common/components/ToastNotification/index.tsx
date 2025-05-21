import clsx from 'clsx';
import { CgClose } from 'react-icons/cg';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ToastNotification = () => (
  <ToastContainer
    className="!p-0 !z-[2147483647]"
    position="bottom-right"
    autoClose={2500}
    hideProgressBar={true}
    closeOnClick
    closeButton={() => {
      return (
        <CgClose
          style={{
            color: 'black',
            height: '20px',
            cursor: 'pointer'
          }}
        />
      );
    }}
    toastClassName={(context) => {
      if (context) {
        const { type } = context;
        return clsx(
          'relative flex items-start border border-l-4 px-4 py-3 bg-white border w-full justify-between rounded-lg z-[2147483647] mb-3',
          {
            'border-[#ff4e4e]/30 border-l-[#ff4e4e] !bg-[#fff6f6]':
              type === 'error',
            'border-[#00a28e]/30 border-l-[#00a28e] !bg-[#f0f9f8]':
              type === 'success',
            'border-[#f5b103]/30 border-l-[#f5b103] !bg-[#fffbf2]':
              type === 'warning',
            'border-[#3186EA]/30 border-l-[#3186EA] !bg-[#eff5fd]':
              type === 'info' || type === 'default'
          }
        );
      }
      return '';
    }}
    bodyClassName={() => 'flex text-sm text-black w-full'}
  />
);

export default ToastNotification;
export * from './Error';
export * from './Info';
export * from './Success';
export * from './Warning';
