import React from 'react';
import { auth } from '../firebaseConfig';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';

export function SignIn() {
  const signIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log('User signed in:', result.user);
      })
      .catch((error) => {
        console.error('Error signing in:', error);
      });
  };

  return (
    <button onClick={signIn} className="styled-button">
      Sign In with Google
    </button>
  );
}

export function SignOut() {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('User signed out');
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  return (
    auth.currentUser && (
      <button onClick={handleSignOut} className="styled-button">
        Sign Out
      </button>
    )
  );
}
