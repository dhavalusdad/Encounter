import { store } from '@encounter/redux/store';
import { type PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

export function Providers({ children }: PropsWithChildren) {
  return <Provider store={store}>{children}</Provider>; // wrap entire app in provider to get state from useSelector
}
