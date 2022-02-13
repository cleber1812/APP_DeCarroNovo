import React from 'react';
import { AuthProvider } from './hooks/AuthState';
import Navigation from './Navigation';

export default function App() {
  return (
    // <Navigation/>    

    <AuthProvider>
      <Navigation/>
    </AuthProvider>
  );
}