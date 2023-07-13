import '../styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { SessionProvider, useSession } from 'next-auth/react';
import { StoreProvider } from '../utils/Store';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import ReactGA from 'react-ga';

ReactGA.initialize('G-KJMZD1YEY0'); // Replace 'YOUR_TRACKING_ID' with your actual tracking ID

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ReactGA.set({ page: url });
      ReactGA.pageview(url);
    };

    // Initialize Google Analytics on mount
    ReactGA.pageview(window.location.pathname);

    // Log each page change as the route changes
    router.events.on('routeChangeComplete', handleRouteChange);

    // Clean up the event listener
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <SessionProvider session={session}>
      <StoreProvider>
        <PayPalScriptProvider deferLoading={true}>
          {Component.auth ? (
            <Auth adminOnly={Component.auth.adminOnly}>
              <Component {...pageProps} />
            </Auth>
          ) : (
            <Component {...pageProps} />
          )}
        </PayPalScriptProvider>
      </StoreProvider>
    </SessionProvider>
  );
}

function Auth({ children, adminOnly }) {
  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/unauthorized?message=login required');
    },
  });

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (adminOnly && !session.user.isAdmin) {
    router.push('/unauthorized?message=admin login required');
  }

  return children;
}

export default MyApp;
