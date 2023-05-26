import { ResultContextProvider } from '@/contexts/resultContext';
import { UserContextProvider } from '@/contexts/userContext';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <ResultContextProvider>
        <Component {...pageProps} />
      </ResultContextProvider>
    </UserContextProvider>
  );
}
