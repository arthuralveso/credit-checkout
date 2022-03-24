import React from 'react';
import { Card } from './components/Card/';
import { CardValueProvider } from './hooks/CardValueContext';
import { GlobalStyle } from './styles/global';
import { Layout } from './pages/Layout'


export function App() {
  return (
    <CardValueProvider>
      <Layout />
      <Card />
      <GlobalStyle />
    </CardValueProvider>
  );
}

