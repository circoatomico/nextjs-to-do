import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

import '../styles/global.scss';

import { Provider as NextAuthProvider } from 'next-auth/client';

const initialOption = {
  "client-id": "AaB7OJasCjaa7S2k4p9w0Wd64MXZHKbxC0CkSVQXkLwUfdtu5-spk0JygAq9yvvnFyHqkpVvKOWLaKME",
  currency: "BRL",
  intent: 'capture'
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session} >
      <PayPalScriptProvider options={initialOption}>
        <Header/>
        <Component {...pageProps} />
      </PayPalScriptProvider>
    </NextAuthProvider>
  )
}

export default MyApp