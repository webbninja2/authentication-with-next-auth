import '@/styles/globals.css'
import { AuthProvider } from '@/components/authProvider/AuthProvider';

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
