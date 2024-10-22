import React from 'react';
import { ThemeProvider } from '@mui/material';
import theme from './styles/global';
import Header from './Components/Header';
import { Toaster } from 'sonner'
import "./App.css"
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Toaster richColors position='bottom-right' toastOptions={{
      className: 'my-toast',
    }}/>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
