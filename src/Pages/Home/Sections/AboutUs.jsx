import { Box, Grid2, Typography } from "@mui/material";

export default function AboutUs() {

    return (
        <Box width="100vw" height={800} sx={
            {
                background: 'linear-gradient(to bottom, #4D0A8E, #680BC4, #7C21D6, #8E30EB, #9A3AF9)',
                display: 'flex',
                flexDirection: 'column',
            }}>
            <Box margin="100px auto">
                <Typography variant="h2" fontFamily="League Spartan" sx={{fontWeight: 600, color: 'secondary.light'}}>SOBRE NÓS</Typography>
                <Grid2 container>

                </Grid2>
            </Box>
        </Box>
    )
}