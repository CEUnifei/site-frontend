import { Box, Container, Typography } from "@mui/material";
import "./home.css"
import News from "./Sections/News";
import CoworkingSection from "./Sections/CoworkingSection";

export default function Home() {
    return (
        <Box>
            <News />
            <CoworkingSection />
        </Box>
    )
}