import React from 'react';
import { CardInformationProvider } from './hooks/CardInformationsContext';
import { Layout } from './pages/Layout';
import { GlobalStyle } from './styles/global';


export function App() {
  return (
    <CardInformationProvider>
      <Layout />

      <GlobalStyle />
    </CardInformationProvider>
  );
}

