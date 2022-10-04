import '../styles/globals.css';

import type { AppProps } from 'next/app';
import ColorModeProvider from 'providers/ColorModeProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ColorModeProvider>
      <Component {...pageProps} />
    </ColorModeProvider>
  );
}

export default MyApp;
