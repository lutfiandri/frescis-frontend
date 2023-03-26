import UserContext from '@/contexts/userContext';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { auth } from '../services/firebase';

export default function useActiveUser(
  needActiveUser = false,
  redirectEndpointFallback = '/'
) {
  const { setUser } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (!setUser) return;

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        });
      } else {
        setUser(null);
        if (needActiveUser) {
          router.replace(redirectEndpointFallback);
        }
      }
    });
  }, [needActiveUser, redirectEndpointFallback, router, setUser]);
}
