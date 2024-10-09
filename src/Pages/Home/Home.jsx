import { Box } from "@mui/material";
import "./home.css"
import News from "./Sections/News";
import CoworkingSection from "./Sections/CoworkingSection";
import AboutUs from "./Sections/AboutUs";

export default function Home() {
    return (
        <Box>
            <News />
            <CoworkingSection />
            <AboutUs />
        </Box>
    )
}