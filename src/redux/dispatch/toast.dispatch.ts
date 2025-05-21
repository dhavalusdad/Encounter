import { type IToastType, toastShow } from '@encounter/redux/ducks/toast';
import { store } from '@encounter/redux/store';

export const dispatchToast = (
  message: IToastType['message'],
  type: IToastType['type']
) => {
  store.dispatch(toastShow({ message, type }));
};
