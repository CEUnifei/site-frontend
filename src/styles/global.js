import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: '#6a00c8',
            light: '#8733d3',
            dark: '#4a008c'
        },
        secondary: {
            dark: '#000000',
            main: '#000000',
            light: '#ffffff',
        },
        coworking: {
            main: '#ffde59'
        },
    },
    typography: {
        fontFamily: 'GlacialIndifference, Roboto'
    }
})

export default theme;