import { useState, useEffect } from "react";

import { Box, Button, Container, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Stack, Typography } from "@mui/material";
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

import 'dayjs/locale/pt-br'; // Importando a localidade brasileira
import utc from 'dayjs/plugin/utc';

import { Toaster, toast } from 'sonner'

// Defina a localidade do dayjs para 'pt-br'
dayjs.locale('pt-br');
dayjs.extend(utc);

export default function Coworking() {
    const [value, setValue] = useState();
    const today = new Date()
    const minDate = dayjs(today)
    const maxDate = dayjs(today).add(1, 'month')

    const [startDate, setStartDate] = useState(''); //hora de entrada
    const [endDate, setEndDate] = useState(''); // hora de saída

    const [timesIn, setTimesIn] = useState([]); // horários de entrada (campo select)
    const [timesOut, setTimesOut] = useState([]); // horários de saída (campo select)
    
    
    

    // Gerando a lista de horários
    const generateTimes = (minutes=0, startHour=8) => {
        const time = []
        let hour = startHour;
        let minute = minutes;

        while (hour < 18 || (hour === 18 && minute === 0)) {
            const formattedTime = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
            time.push(
                <MenuItem key={formattedTime} value={formattedTime}>
                    {formattedTime}
                </MenuItem>
            );

            minute += 30;
            if (minute === 60) {
                minute = 0;
                hour++;
            }
        }

        return time;
    };

    useEffect(() => {
        setTimesIn(generateTimes(0)); 
        setTimesOut(generateTimes(30));

        //fazer validação de horários já reservados no backend - (bloquear horários ja reservados)
    }, []);

    // Monitora hora de entrada e permite selecionar apenas horários 30 minutos a partir dela
    useEffect(() => {
        if (startDate) {
            const [hours, minutes] = startDate.split(':').map(Number);
    
            
            let newHours = hours;
            let newMinutes = minutes + 30;
    
            if (newMinutes === 60) {
                newMinutes = 0;
                newHours += 1;
            }
    
            
            const newTimesOut = generateTimes(newMinutes, newHours);
            setTimesOut(newTimesOut); 
        }
    }, [startDate]);

    const handleSubmit = (e) => {
        e.preventDefault()
            // Verifica se a data e hora estão selecionadas
        if (!value || !startDate) {
            console.log("Selecione a data e hora de entrada!");
            return;
        }
        if(endDate <= startDate) {
            console.log("Selecione um período válido");
            return
        }

        // Divide a string da hora de entrada (ex: "11:30") em horas e minutos
        const [hoursIn, minutesIn] = startDate.split(':').map(Number);
        const [hoursOut, minutesOut] = endDate.split(':').map(Number);

        // Usar dayjs para adicionar horas e minutos à data selecionada
        const selectedStartTime = dayjs(value)
            .set('hour', hoursIn)
            .set('minute', minutesIn)
            .set('second', 0)
            .utc();  // Aplica UTC sem deslocar as horas

        const selectedEndTime = dayjs(value)
            .set('hour', hoursOut)
            .set('minute', minutesOut)
            .set('second', 0)
            .utc();  

        // Converte o objeto dayjs para um objeto Date, junta as horas de entrada à data selecionada
        const selectedDateIn = selectedStartTime.toDate();
        const selectedDateOut = selectedEndTime.toDate();

        
        console.log("Data e Hora de Entrada:", selectedDateIn);
        console.log("Data e Hora de Saída:", selectedDateOut);

        console.log("Data selecionada:", value);
        console.log("Hora de Entrada:", startDate);
        console.log("Hora de Saída:", endDate);

       
        
    }

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
                    <form onSubmit={handleSubmit}>
                        <InputForm type="email" label="email" htmlfor="email" 
                        placeholder="example@email.com"/>
                        <InputForm type="text" label="empresa" htmlfor="empresa" placeholder="example" />
                        <Box my={5}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker
                                    minDate={minDate}
                                    maxDate={maxDate}
                                    label="Dia de Reserva"
                                    value={value}
                                    onChange={(newValue) => setValue(newValue)}
                                    format="DD/MM/YYYY"
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                        </Box>
                        <Stack flexDirection={"row"} gap={5}>
                            <FormControl sx={{ m: 1, width: 160 }}>
                                <InputLabel>Entrada</InputLabel>
                                <Select label="Entrada" value={startDate} onChange={(e) => setStartDate(e.target.value)}>
                                    {timesIn}
                                </Select>
                            </FormControl>

                            {/* Select para Horário de Saída */}
                            <FormControl sx={{ m: 1, width: 160 }}>
                                <InputLabel>Saída</InputLabel>
                                <Select label="Saida" value={endDate} onChange={(e) => setEndDate(e.target.value)}>
                                    {timesOut}
                                </Select>
                            </FormControl>
                        </Stack>
                        <FormControl  sx={{margin: 5}}>
                        <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="2"
                                name="row-radio-buttons-group"
                                
                                
                            >
                                <FormControlLabel value="1" control={<Radio />} label="Sala Grande" />
                                <FormControlLabel value="2" control={<Radio />} label="Sala Média" />
                                <FormControlLabel value="3" control={<Radio />} label="Sala Pequena" />
                            </RadioGroup>
                        </FormControl>
                            <Button type="submit" sx={{bgcolor: "#ffde59", color: "#000", padding: '2px 30px', fontSize: "1.4rem"}}>
                                Reservar</Button>
                        
                    </form>
                </Box>
            </Container>
        </Box>
    );
}
