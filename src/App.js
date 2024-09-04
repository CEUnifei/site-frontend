import React from 'react';
import { Container, Typography, Button, Paper, Box } from '@mui/material';

function App() {
  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h5">Welcome to My MUI App</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            This is a simple React application using Material-UI.
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 3 }}>
            Click Me
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default App;
