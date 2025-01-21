import { Box, Button, Container, Typography } from "@mui/material";
import InputForm from "../../Components/InputForm";
import { useForm } from "react-hook-form";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import useCreateUser from "../../Hooks/User";
import { useState } from "react";

export default function Register() {
    const {mutateAsync, isLoading} = useCreateUser()
    const { register, handleSubmit, setValue} = useForm()
    const [birthdate, setBirthdate] = useState(null);

    function handleCreateUser(data) {
        mutateAsync({...data})
    }

    return (
        <Container className="reserva">
            <Typography variant="h2" fontFamily="League Spartan">
                crie já a sua conta
            </Typography>
            <Box margin="auto" className="form-reserva">
                <form onSubmit={handleSubmit(handleCreateUser)}>
                    <InputForm
                        type="text"
                        label="nome"
                        name="name"
                        placeholder="Seu nome"
                        register={register}
                    />
                    <InputForm
                        type="email"
                        label="email"
                        name="email"
                        placeholder="example@email.com"
                        register={register}
                    />
                    <InputForm
                        type="text"
                        label="empresa"
                        name="company"
                        placeholder="example"
                        register={register}

                    />
                    <InputForm
                        type="text"
                        label="telefone"
                        placeholder="(xx) xxxxx-xxxx"
                        name="phone"
                        register={register}

                    />

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']} sx={{ marginTop: 5 }}>
                            <DatePicker
                                label="Data de nascimento"
                                format="DD/MM/YYYY"
                                sx={{ width: '150px' }}
                                onChange={(newValue) => {
                                    setBirthdate(newValue);
                                    setValue("birthdate", newValue?.format("YYYY-MM-DD"));
                                }}
                            />
                        </DemoContainer>
                    </LocalizationProvider>

                    <InputForm
                        type="password"
                        label="senha"
                        placeholder="Sua senha"
                        name="password"
                        register={register}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            color: 'primary',
                            padding: '2px 50px',
                            fontSize: "1.4rem",
                            marginTop: '40px',
                        }}
                    >
                        { isLoading? '...' : 'Criar Conta'}
                    </Button>
                </form>
            </Box>
        </Container>
    );
}
