import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { AuthContextProvider } from './context/AuthContext';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <ChakraProvider>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
  </ChakraProvider>
);


