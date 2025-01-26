import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Paper,
    IconButton
  } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import CoffeeIcon from '@mui/icons-material/Coffee';
import WifiIcon from '@mui/icons-material/Wifi';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link } from 'react-router-dom';
function CoworkingSection() {
return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'grey.50' }}>
    {/* Hero Section */}
    <Box sx={{ position: 'relative', height: '70vh', overflow: 'hidden' }}>
      <img
        src="coworkingSW.jpg"
        alt="Coworking Space"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'brightness(0.5)',
          zIndex: 0
        }}
      />
      <Container
        sx={{
          position: 'relative',
          zIndex: 1,
          color: 'common.white',
          py: 8,
          textAlign: 'center'
        }}
      >
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          O Espaço de Trabalho Perfeito Espera por Você
        </Typography>
        <Typography variant="h6" color="grey.300" gutterBottom>
          Junte-se à nossa comunidade vibrante de profissionais em um espaço de coworking moderno e totalmente equipado, projetado para o seu sucesso.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 3, fontWeight: 'bold' }}
        >
          Saiba Mais
        </Button>
      </Container>
    </Box>

    {/* Features Section */}
    <Box sx={{ py: 8, bgcolor: 'common.white' }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
              <IconButton sx={{ bgcolor: 'blue', color: 'white' }}>
                <PeopleIcon />
              </IconButton>
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  Espaço Colaborativo
                </Typography>
                <Typography color="text.secondary" sx={{fontSize: '1.2rem'}}>
                  Conecte-se com outros profissionais em nossas áreas de trabalho de conceito aberto.
                </Typography>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
              <IconButton sx={{ bgcolor: '#a18262', color: 'white' }}>
                <CoffeeIcon />
              </IconButton>
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  Café Grátis
                </Typography>
                <Typography color="text.secondary" sx={{fontSize: '1.2rem'}}>
                  Mantenha-se energizado com aquele cafezinho que todo profissional ama ☕
                </Typography>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
              <IconButton sx={{ bgcolor: 'purple', color: 'white' }}>
                <WifiIcon />
              </IconButton>
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  WiFi de Alta Velocidade
                </Typography>
                <Typography color="text.secondary" sx={{fontSize: '1.2rem'}}>
                  Internet ultrarrápida para todas as suas necessidades de trabalho.
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Link to={'/coworking'}>
            <Button
              startIcon={<CalendarMonthIcon />}
              color="primary"
              sx={{ fontWeight: 'bold' }}
              variant='outlined'
            >
              Reserve uma sala hoje
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  </Box>
);
}

export default CoworkingSection;
  