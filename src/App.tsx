import { Providers } from '@encounter/redux/provider';
import ToastContainer from '@encounter/components/Toast';
import QueryProvider from '@encounter/api/QueryProvider';
import Route from '@encounter/routes';

function App() {
  return (
    <QueryProvider>
      <Providers>
        <ToastContainer />
        <Route />
      </Providers>
    </QueryProvider>
  );
}

export default App;
