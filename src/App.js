import React from 'react';
import { ThemeProvider } from '@mui/material';
import theme from './styles/global';
import Header from './Components/Header';

import "./App.css"
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
