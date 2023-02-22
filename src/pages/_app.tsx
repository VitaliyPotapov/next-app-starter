import '@/styles/globals.css';
import { App as SharedApp, AppProps as SharedAppProps } from '@takeda/ui/components/App';

export default function App(props: SharedAppProps) {
  return (
    <SharedApp {...props}>
      <meta name="robots" content="noindex, nofollow" />

      <link rel="preload" href="/fonts/GothamSSm-Book_Web.woff2" as="font" crossOrigin="" type="font/woff2" />

      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    </SharedApp>
  );
}
