import React from 'react';
import { Card } from './components/Card/';
import { InputValueProvider } from './hooks/InputValueContext';
import { GlobalStyle } from './styles/global';
import { Layout } from './pages/Layout'


export function App() {
  return (
    <InputValueProvider>
      <Layout />
      <Card />

      <GlobalStyle />
    </InputValueProvider>
  );
}

