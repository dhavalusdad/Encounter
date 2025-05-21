import { dispatchToast } from '@encounter/redux/dispatch/toast.dispatch';
import { type IToastType } from '@encounter/redux/ducks/toast';
import {
  ErrorComponent,
  Info,
  Success,
  ToastNotification,
  Warning
} from '@encounter/common';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const ToastContainer = () => {
  const toastMessage = useSelector(
    (state: { toast: IToastType }) => state.toast
  );

  useEffect(() => {
    if (toastMessage?.message) {
      if (toastMessage?.type === 'error') {
        toast.error(
          <div className="flex items-start gap-3">
            <ErrorComponent />
            <div className="">
              <span className="text-BlackLight font-medium text-sm">
                {toastMessage.message}
              </span>
            </div>
          </div>
        );
      } else if (toastMessage.type === 'success') {
        toast.success(
          <div className="flex items-start gap-3">
            <Success />
            <div className="">
              <span className="text-BlackLight font-medium text-sm">
                {toastMessage.message}
              </span>
            </div>
          </div>
        );
      } else if (toastMessage.type === 'warning') {
        toast.warning(
          <div className="flex items-start gap-3">
            <Warning />
            <div className="">
              <span className="text-BlackLight font-medium text-sm">
                {toastMessage.message}
              </span>
            </div>
          </div>
        );
      } else {
        toast(
          <div className="flex items-start gap-3">
            <Info />
            <div className="">
              <span className="text-BlackLight font-medium text-sm ">
                {toastMessage.message}
              </span>
            </div>
          </div>
        );
      }
      setTimeout(() => {
        dispatchToast(null, null);
      }, 500);
    }
  }, [toastMessage.message]);

  return <ToastNotification />;
};
export default ToastContainer;
