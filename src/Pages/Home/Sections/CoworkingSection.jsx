import { Container, Stack, Typography, Box, Button } from "@mui/material";
import chair from '../../../styles/images/chair.png';
import "./coworkingSec.css"
export default function CoworkingSection() {

    return (
        <Box maxHeight='1200px' 
             width='100vw' 
             display='flex' 
             position='relative' 
             borderBottom={"2px solid black"}
             className="coworking-section"
             
             >
            <Stack flexDirection={'column'} justifyContent='space-between' width='60%'>
                <Container maxWidth="xl" className="home-coworking"  sx={{marginLeft: '40px'}}>
                    <Typography fontFamily="Saira" color="secondary.dark" className="title" variant="h2">
                        CONHEÇA O NOSSO ESPAÇO DE TRABALHO <Typography color="primary" variant="span">COWORKING</Typography>
                    </Typography>
                    
                    <Box width='100%' marginTop='50px' className="coworking-text">
                        <Typography fontSize='2.4rem' width='600px'>Nosso coworking une espaços livres e reserváveis com um clima agradável e café comunitário ☕</Typography>
                        <Button variant="contained"  sx={{margin: '50px', width: '100%', maxWidth: '60%', padding: '10px', fontSize: "1.3rem"}}>Saiba mais</Button>
                    </Box>
                </Container>
                
                
            </Stack>
            <div className="coworking-img">
                <Button href="/coworking"
                color="primary" variant="contained" sx={{marginTop:'500px',  fontSize: "1.3rem"}}>Reserve Já</Button>
            </div>
            <img src={chair} alt="Chair" className="chair"  />
        </Box>
    )
}