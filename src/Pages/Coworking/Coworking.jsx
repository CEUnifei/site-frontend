import { useState } from "react";

import { Box, Container, Stack, Typography } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

import salaGrande from "../../styles/images/Sala-grande.jpg"
import salaMedia from "../../styles/images/Sala-media.jpg"
import salaPequena from "../../styles/images/Sala-pequena.jpg"
import icon from "../../styles/images/logo final cw.png"
import brush1 from "../../styles/images/brush1.png"
import brush2 from "../../styles/images/brush2.png"

import InputForm from "../../Components/InputForm";
import "./coworking.css"

export default function Coworking() {
    const [value, setValue] = useState(dayjs('2022-04-17'));
    return (
        <Box className="coworking">
            <Stack bgcolor={"secondary.main"} height={350} flexDirection="row" className="salas">
                <Box>
                    <img src={salaGrande} alt="" className="salaImg" />
                    <Typography>GRANDE</Typography>
                </Box>
                <Box>
                    <img src={salaMedia} alt="" className="salaImg" id="sala2" />
                    <Typography>MÉDIA</Typography>
                </Box>
                <Box>
                    <img src={salaPequena} alt="" className="salaImg" />
                    <Typography>PEQUENA</Typography>
                </Box>
            </Stack>

            <img src={brush1} alt="" className="brush brush1" />
            <img src={brush2} alt="" className="brush brush2" />

            <Container className="reserva">
                <Typography variant="h2" fontFamily="League Spartan">
                    faça já sua reserva
                </Typography>
                <Box margin="auto" className="form-reserva">
                    <img src={icon} alt="" width={100} height={100} />
                    <form>
                        <InputForm type="email" label="email" htmlfor="email" 
                        placeholder="example@email.com"/>
                        <InputForm type="text" label="empresa" htmlfor="empresa" placeholder="example" />
                        <Box my={5}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker
                                    
                                    label="Reserva"
                                    value={value}
                                    onChange={(newValue) => setValue(newValue)}
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                        </Box> 
                    </form>
                </Box>
            </Container>
        </Box>
    );
}
