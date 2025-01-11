import { Box, Button, Grid, Typography } from "@mui/material";
import "./aboutus.css"


export default function AboutUs() {

    return (
        <Grid container width="100vw" height={800} sx={
            {
                background: 'linear-gradient(to bottom, #4D0A8E, #680BC4, #7C21D6, #8E30EB, #9A3AF9)',
                position: 'relative'
            }}>
            <Grid item xs={12} margin={10}>
                <Typography variant="h2" fontFamily="League Spartan" 
                sx={{fontWeight: 600, color: 'secondary.light', textShadow: '2px 2px 5px black'}}>SOBRE NÓS</Typography>
                <Box display={'flex'}>
                    <Typography
                    color="secondary.light"
                    fontFamily="Saira" fontSize="2.9rem" fontWeight={"500"}
                    width={"40vw"}
                    marginTop={"50px"}
                    
                    >
                    <span className="destaque">CRIATIVIDADE</span>, LIDERANÇA E ENGAJAMENTO FORMAM 100% DA MENTE <span className="destaque">
                        EMPEENDEDORA</span> DA NOSSA COMUNIDADE</Typography>
                    <img src="/astronaut.svg" alt="cloud" srcset="" className="astronaut"/>
                </Box>
                <img src="/cloud-realistic.svg" alt="cloud" srcset="" className="cloud-top"/>
                <img src="/cloud-realistic2.svg" alt="cloud" srcset="" className="cloud-two"/>
                <img src="/Vortex-White.svg" alt="cloud" srcset="" className="vortex-white"/>
            </Grid>
            <Grid container flexDirection={'row'} justifyContent='center'>
                <Grid item xs={12} marginBottom={5}>
                    <Typography fontFamily="Saira" fontSize="2.5rem" textAlign="center" fontWeight={'bold'}
                    color="#FFF500"> SOMOS MOVIDOS POR ALTO IMPACTO.</Typography>
                </Grid>
                <Grid item xs={12} display='flex' justifyContent='center' marginBottom={5}>
                    <Box width='30vw'>
                        <Typography fontFamily="Roboto Mono" fontSize="2rem" textAlign="center" fontWeight={500}
                        color="secondary.light">NOSSA VISÃO É SER O CENTRO DE EMPREENDEDORISMO MAIS IMPACTANTE DO BRASIL.</Typography>
                    </Box>
                </Grid>
                <Button variant="contained" color="secondary" 
                    sx={{marginBottom: 5, width: '200px', fontSize: '1.2rem'}}>
                Saiba Mais</Button>
            </Grid>
        </Grid>
    )
}