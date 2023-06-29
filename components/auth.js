/** @format */

// Auth.js

import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

function Auth({ children, adminOnly }) {
  const router = useRouter();
  const {
    status,
    data: session,
    error,
  } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/unauthorized?message=login required');
    },
  });

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (adminOnly && !session.user.isAdmin) {
    router.push('/unauthorized?message=admin login required');
    return null;
  }

  return children;
}

export default Auth;
