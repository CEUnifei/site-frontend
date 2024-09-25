import { Container, Stack, Typography, Box, Button } from "@mui/material";
import chair from '../../../styles/images/chair.png';
import coworking from '../../../styles/images/coworkingSW.jpg';

export default function CoworkingSection() {

    return (
        <Box height='1200px' width='100vw' display='flex' position='relative' flexDirection="row">
            <Stack flexDirection={'column'} justifyContent='space-between' width='60%'>
                <Container maxWidth="xl" className="home-coworking"  sx={{marginLeft: '40px'}}>
                    <Typography fontFamily="Saira" color="secondary.dark" className="title" variant="h2">CONHEÇA O NOSSO ESPAÇO DE TRABALHO <Typography color="primary" variant="span">COWORKING</Typography></Typography>
                    <Box width='600px' marginTop='50px'>
                        <Typography fontSize='1.5rem'>Nosso coworking une espaços livres e reserváveis com um clima agradável e café comunitário ☕</Typography>
                        <Button variant="contained" sx={{margin: '50px', width: '60%', padding: '10px'}}>Saiba mais</Button>
                    </Box>
                </Container>
                <Box  sx={{backgroundColor: 'primary.main', height: '350px', width: '100vw'}}></Box>
                
            </Stack>
            <Box sx={{
                width: '650px',
                height: '800px',
                backgroundImage: `url(${coworking})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                marginTop: '50px',
                borderRadius: '15px',
                marginTop: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Button color="primary" variant="contained" sx={{marginTop:'500px'}}>Reserve Já</Button>
            </Box>
            <img src={chair} alt="Chair" style={{ width: 'auto', height: '665px', zIndex: 10, position: 'absolute', left: 0, bottom: 0}} />
        </Box>
    )
}