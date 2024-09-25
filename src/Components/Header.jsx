import { Button, Box, Link } from "@mui/material";
import { FaSquareInstagram, FaLinkedin, FaFacebook } from "react-icons/fa6";
import logo from "../styles/images/Logo CEU horizontal preto.png";
import vortex from "../styles/images/vortex 1.svg"
import vortexRight from "../styles/images/vortex 2.svg"



import "./header.css";
import { DisplaySettings } from "@mui/icons-material";

export default function Header() {
    return (
        <Box className="header" >
            <Box className="header-social">
                <img src={vortex} alt="" className="vortexHeader"/>
                <Box className="redes-sociais" sx={{ display: 'flex', gap: 3 }}>
                    <Link href="https://www.instagram.com/ceuunifei/"><FaSquareInstagram className="icon" /></Link>
                    <Link><FaLinkedin className="icon" /></Link>
                    <Link href=""><FaFacebook className="icon" /></Link>
                </Box>
                <Box className="logo">
                    <img src={logo} alt="CEU logo" />
                </Box>
                
                <Box><img src={vortexRight} alt="" className="vortexHeaderRight"/></Box>
            </Box>
            <Box className="headerMenu"  fontFamily="League Spartan">
                <Link color="primary" sx={{textDecoration: "none", cursor: "pointer"}} fontFamily="Kdam Thmor Pro">Quem Somos</Link>
                <Link color="primary" sx={{textDecoration: "none", cursor: "pointer"}} fontFamily="Kdam Thmor Pro">Reservas</Link>
                <Link color="primary" sx={{textDecoration: "none", cursor: "pointer"}} fontFamily="Kdam Thmor Pro">Regras e Códigos</Link>
            </Box>
        </Box>
    );
}
