import { Container, Typography, Box } from "@mui/material"
import backgroundImage from '../../../styles/images/CEU2024.jpg';

export default function News() {
    return (
        <>
        <Container className="home-noticias" maxWidth="xll"
        sx={{
            width: '100%',
            height: '800px',
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: 'center 38%',
            backgroundSize: 'cover',
            borderBottom: "#6204BF 1px solid",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}
        >
               <Box width="60vw" height="200px" margin='190px 30vw 0 0'>
                   <Typography fontFamily="League Spartan" color="secondary.light" className="title" variant="h1"
                    sx={{
                        display: "block",
                        fontSize: "5rem",
                        width: '100%',
                        height: '100%',
                        fontWeight: 'bold',
                        WebkitTextStroke: '1.5px black',
                        lineHeight: '50px'
                    }}
                   
                   >CENTRO DE EMPREENDEDORISMO UNIFEI</Typography>
               </Box>
               <Typography fontFamily="League Spartan" color="secondary.light" className="slogan" variant="h2"
                sx={{
                    fontSize: '3.5rem',
                    WebkitTextStroke: '1.5px #6204BF',
                    margin: '30px 0px 0px 40vw',
                    fontWeight: 'bold',
                    width: '750px',
                    height: '200px',
                    textAlign: 'center'
                }}
               >O MAIOR ECOSSISTEMA DE EMPREENDEDORISMO DO BRASIL💜</Typography>
        </Container>
        <Box className="text-wrapper">
            <Typography fontFamily="League Spartan">&nbsp;INOVAÇÃO • CENTRO DE EMPREENDEDORISMO • CRIATIVIDADE • STARTUPS&nbsp; •</Typography>
            <Typography fontFamily="League Spartan">&nbsp;INOVAÇÃO • CENTRO DE EMPREENDEDORISMO • CRIATIVIDADE • STARTUPS&nbsp; •</Typography>
            <Typography fontFamily="League Spartan">&nbsp;INOVAÇÃO • CENTRO DE EMPREENDEDORISMO • CRIATIVIDADE • STARTUPS&nbsp; •</Typography>
            <Typography fontFamily="League Spartan">&nbsp;INOVAÇÃO • CENTRO DE EMPREENDEDORISMO • CRIATIVIDADE • STARTUPS&nbsp; •</Typography>
            <Typography fontFamily="League Spartan">&nbsp;INOVAÇÃO • CENTRO DE EMPREENDEDORISMO • CRIATIVIDADE • STARTUPS&nbsp; •</Typography>
            <Typography fontFamily="League Spartan">&nbsp;INOVAÇÃO • CENTRO DE EMPREENDEDORISMO • CRIATIVIDADE • STARTUPS&nbsp; •</Typography>
        </Box>
        </>
        
    )
}