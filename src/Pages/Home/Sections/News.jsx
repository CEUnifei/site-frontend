import { Container, Typography } from "@mui/material"
import backgroundImage from '../../../styles/images/CEU2024.jpg';

export default function News() {
    return (
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
               <Typography fontFamily="League Spartan" color="secondary.light" className="title" variant="h1"
                sx={{
                    display: "inline-block",
                    fontSize: "3.5rem",
                    margin: '230px 690px 0 0',
                    width: '600px',
                    height: '200px',
                    fontWeight: 'bold',
                    WebkitTextStroke: '1.5px black',
                    lineHeight: '50px'
                }}
               
               >CENTRO DE EMPREENDEDORISMO UNIFEI</Typography>
               <Typography fontFamily="League Spartan" color="secondary.light" className="slogan" variant="h2"
                sx={{
                    fontSize: '2.8rem',
                    WebkitTextStroke: '1.5px #6204BF',
                    margin: '30px 0px 0px 480px',
                    fontWeight: 'bold',
                    width: '750px',
                    height: '200px',
                    textAlign: 'center'
                }}
               >O MAIOR ECOSSISTEMA DE EMPREENDEDORISMO DO BRASIL💜</Typography>
        </Container>
    )
}