import React from 'react';
import { CardValueProvider } from './hooks/CardValueContext';
import { Layout } from './pages/Layout';
import { GlobalStyle } from './styles/global';


export function App() {
  return (
    <CardValueProvider>
      <Layout />

      <GlobalStyle />
    </CardValueProvider>
  );
}

