import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: '#6204BF',
            light: '#8733d3',
            dark: '#4a008c'
        },
        secondary: {
            dark: '#000000',
            main: '#1E1E1E',
            light: '#ffffff',
        },
        coworking: {
            main: '#ffde59'
        },
    },
    typography: {
        fontFamily: 'Teachers, Roboto, League Spartan, Saira, Kdam Thmor, Pro Roboto Mono '
    }
})

export default theme;