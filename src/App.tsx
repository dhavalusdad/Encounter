import { Providers } from '@encounter/redux/provider';
import ToastContainer from '@encounter/components/Toast';
import Layout from '@encounter/components/Layout';
import QueryProvider from '@encounter/api/QueryProvider';

function App() {
  return (
    <QueryProvider>
      <Providers>
        <ToastContainer />
        <Layout />
      </Providers>
    </QueryProvider>
  );
}

export default App;
